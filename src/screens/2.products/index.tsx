import { useDispatch, useSelector} from 'react-redux';
import './products.css'
import { RootState } from '../../store/store';
import { Input } from 'antd';
import { useState } from 'react';
import { Product } from '../../utils/types';
import { Cart, addItemToCart } from '../../store/products/cartSlice';
import { useNavigate } from "react-router-dom";
import ProductItem from './components/productItem';


function ProductsScreen() {
    const {items} = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch()
    const [searchitems, setSearchItems] = useState<Product[]>(items)

    const navigate = useNavigate();

    const goToProduct = (item: Product) => {
        navigate("/product-details", {
            state: {item}
        })
    }
    const addToCart = (item: Product, value: number) => {
        const cartItem: Cart = {...item, qty: value}
        dispatch(addItemToCart(cartItem))
    }

    return (
        <div className='product-entry'>
            <h1>Products</h1>
            <Input placeholder="Search Product" onChange={(text) => {
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
                
            }}/>
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
