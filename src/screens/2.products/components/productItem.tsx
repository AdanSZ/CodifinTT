import { Button, Form, InputNumber, Rate } from "antd";
import { Product } from "../../../utils/types";
import { useEffect } from "react";

const ProductItem = ({item, onAddToCart, onGoToDetails}: 
    {
        item: Product, 
        onAddToCart: (item: Product, value: number) => void, 
        onGoToDetails: (item: Product) => void
    }) => {
    
        const [form] = Form.useForm();
        useEffect(() => {
            form.setFieldsValue({ qty: 1 });
        }, [form])
    return (
        <div key={item.id} className='product-container'>
            <div className='product-item'>
                <div onClick={() => onGoToDetails(item)}>  
                    <div className='product-image' style={{backgroundImage: `url(${item.image})`}} />
                        {/* <img src={item.image} alt="" /> */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span className='txt-name'>{item.name}</span>
                        <span className='txt-sku'>SKU: {item.id.split('-')[0]}</span>
                        <span className='txt-price'>Price: ${item.price}</span>
                        <Rate 
                            tooltips={['terrible', 'bad', 'normal', 'good', 'wonderful']} 
                            onChange={() => {}} 
                            value={3} 
                        />
                        <span className='txt-category'>Category: {item.category.value}</span>
                    </div>
                </div>
                <div>
                    <Form
                        form={form}
                        name={`form-qty-${item.id}`}
                        onFinish={(value) => onAddToCart(item, value.qty)}
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

export default ProductItem