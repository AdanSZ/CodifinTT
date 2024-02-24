import { Button, Rate } from "antd"
import { formatCurrency } from "../../../utils/utils"
import { DeleteOutlined } from "@ant-design/icons"
import { Cart } from "../../../store/products/cartSlice"
import { Product } from "../../../utils/types"

const CardItem = ({item, onDelete, showQty=true}:{item: Cart | Product, onDelete: (id:string) => void, showQty: boolean}) => {

    return (
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
                    {
                        showQty && <span>qty: {item.qty}</span>
                    }
                    
                </div>
                <div>        
                    <Button type='primary' danger onClick={() => {
                        onDelete(item.id)
                        // dispatch(removeItem(item.id))
                    }}>
                        <DeleteOutlined />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardItem