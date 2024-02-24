import { useDispatch, useSelector} from 'react-redux';
import './cart.css'
import { RootState } from '../../store/store';
import { formatCurrency } from '../../utils/utils';
import { removeItem } from '../../store/products/cartSlice';
import CardItem from './compoents/cardItem';

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
                        <CardItem  key={item.id} onDelete={(id) => dispatch(removeItem(id))} item={item}/>
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
