import { Button, Form, InputNumber, Rate, message } from 'antd';
import { Product } from '../../utils/types';
import './productDetails.css'
import { useLocation } from "react-router-dom";
import { formatCurrency } from '../../utils/utils';
import { Cart, addItemToCart } from '../../store/products/cartSlice';
import { useDispatch } from 'react-redux';

function ProductDetailsScreen() {
    const { state } = useLocation();
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const product: Product = state.item
    const dispatch = useDispatch()

    const addToCart = (value: number) => {
        const cartItem: Cart = {...product, qty: value}
        form.setFieldsValue({ qty: 1 });
        dispatch(addItemToCart(cartItem))
        messageApi.open({
            type: 'success',
            content: `${value} ${product.name} added to cart`,
          });
    }
    
    return (
        <div className='product-details'>
            <h1>Product Details</h1>
            {contextHolder}
            <div className={"product-details-container"} style={{display: 'grid'}}>
                <div>
                    <img src={product.image} alt="" width="500" />
                </div>
                <div>
                    <h3>{product.name}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloribus, asperiores consequatur consectetur pariatur itaque hic delectus nam veniam soluta. Odio tenetur labore at amet, esse repellendus quod voluptatibus nostrum!
                    </p>
                    <Rate 
                        tooltips={['terrible', 'bad', 'normal', 'good', 'wonderful']} 
                        onChange={() => {}} 
                        value={3} 
                    />
                    <br />
                    <span>Price: {formatCurrency(Number(product.price))}</span>
                    <br />
                    <span>Category: {product.category.value}</span>
                    <Form
                        form={form}
                        name={`form-qty`}
                        onFinish={(value) => addToCart(value.qty)}
                        style={{ maxWidth: 600, display: 'flex' }}
                    >
                        <Form.Item name="qty" label="" rules={[{ required: true }]}>
                            <InputNumber style={{width: 50}} />
                        </Form.Item>                                    
                        <Button style={{marginLeft: 10}} type="primary" htmlType="submit">Add to Cart</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsScreen

