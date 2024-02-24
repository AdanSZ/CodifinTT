import { useDispatch, useSelector} from 'react-redux';
import './cart.css'
import { RootState } from '../../store/store';
import { Button, Rate } from 'antd';
import { formatCurrency } from '../../utils/utils';
import { DeleteOutlined } from '@ant-design/icons';
import { removeItem } from '../../store/products/cartSlice';

function CartScreen() {
    const {items} = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    let total = 0
    items.forEach((prod) =>{
        total += prod.price * prod.qty
    })
    const CartList = () => {
        return (
            <div className='cart-wrap'>
                {
                    items.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <div className='cart-product-image' style={{backgroundImage: `url(${item.image})`}} />
                                {/* <img src={item.image} alt="" /> */}
                            <div style={{display: 'flex', justifyContent: 'space-between', flex: 1}}>
                                <div className="cart-product-desc" style={{display: 'flex', flexDirection: 'column'}}>
                                    <span className='txt-name'>{item.name}</span>
                                    <span className='txt-price'>Price: {formatCurrency(item.price)}</span>
                                    <Rate 
                                        tooltips={['terrible', 'bad', 'normal', 'good', 'wonderful']} 
                                        onChange={() => {}} 
                                        value={3} 
                                        />
                                    <span className='txt-category'>Category: {item.category.value}</span>
                                    <span>qty: {item.qty}</span>
                                </div>
                                <div>
                                    
                                    <Button type='primary' danger onClick={() => {
                                        dispatch(removeItem(item.id))
                                    }}>
                                        <DeleteOutlined />
                                    </Button>
                                </div>
                            </div>
                        <div>
                    </div>
                </div>
                    ))
                }
            </div>
        )
    }
    return (
        <div className='cart'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Cart</h1>
                <div>
                    <h2>Total: {formatCurrency(total)}</h2>
                </div>
            </div>
            <CartList />
        </div>
    )
}

export default CartScreen
