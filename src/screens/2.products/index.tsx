import { useDispatch, useSelector} from 'react-redux';
import './products.css'
import { RootState } from '../../store/store';
import { Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { Product } from '../../utils/types';
import { Cart, addItemToCart } from '../../store/products/cartSlice';
import { useNavigate } from "react-router-dom";
import ProductItem from './components/productItem';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';


function ProductsScreen() {
    const {items} = useSelector((state: RootState) => state.products)
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch()
    const [searchitems, setSearchItems] = useState<Product[]>(items)
    const [sortBy, setSortBy] = useState('ascending')
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [sortBy])
    const goToProduct = (item: Product) => {
        navigate("/product-details", {
            state: {item}
        })
    }
    const addToCart = (item: Product, value: number) => {
        const cartItem: Cart = {...item, qty: value}
        dispatch(addItemToCart(cartItem))
        messageApi.open({
            type: 'success',
            content: `${value} ${item.name} added to cart`,
          });
    }

    useEffect(() => {
        let sorted = []
        if(sortBy === 'ascending'){
            sorted = [...items].sort((a,b) => a.price - b.price)
        } else {
            sorted = [...items].sort((a,b) => b.price - a.price)
        }
        setSearchItems(sorted as Product[])

    }, [sortBy])

    const toogleSort = () => {
        if(sortBy === 'ascending') {
            setSortBy('descending')
        } else {
            setSortBy('ascending')
        }
    }
    return (
        <div className='product-entry'>
            {contextHolder}
            <h1>Products</h1>
            <div style={{display: 'flex'}}>
                <Input 
                    placeholder="Search Product" 
                    style={{flex: 1}}
                    onChange={(text) => {
                        const found = items.filter((it) => {
                            if(it.name.toLocaleLowerCase().includes(text.currentTarget.value)) return it
                        })

                        if(found) {
                            setSearchItems(found as Product[])
                        } else {
                            setSearchItems([])
                        }

                        if(text.currentTarget.value === ''){
                            setSearchItems(items)
                        }
                    }}
                />
                <div style={{flex: 1}}>
                    {
                        sortBy === 'ascending' ? 
                            <SortAscendingOutlined style={{fontSize: 30}} onClick={toogleSort} />
                            : 
                            <SortDescendingOutlined style={{fontSize: 30}} onClick={toogleSort} /> 
                            
                    }
                </div>
                
            </div>
            {
                searchitems.length ?
                    <div className='items-wrap'>
                        {
                            searchitems.map((item, index) => (
                                <ProductItem key={index} item={item} onAddToCart={addToCart} onGoToDetails={goToProduct}/>
                            ))
                        }
                    </div>
                    : <span>No items found</span>
            }
            
        </div>
    )
}

export default ProductsScreen
