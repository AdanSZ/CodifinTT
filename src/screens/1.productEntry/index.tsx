import { useState } from 'react';
import './productEntry.css'
import { Button, Form, Input, Select, Space, message, InputNumber } from 'antd';
import { Category, Product } from '../../utils/types';
import { getRandImg } from '../../utils/utils';
import { useDispatch, useSelector} from 'react-redux';
import { addNewProduct, removeProduct } from '../../store/products/productsSlice';
import {v4 as uuidv4} from 'uuid';
import { RootState } from '../../store/store';
import CardItem from '../4.cart/compoents/cardItem';


const categoriesList: Category[] = [
  {
    key: 'phones',
    value: 'Mobile phones',
  },
  {
    key: 'consoles',
    value: 'Game consoles',
  },
  {
    key: 'furniture',
    value: 'Household furniture',
  },
  {
    key: 'homeAppliances',
    value: 'Home appliances',
  },
  {
    key: 'clothing',
    value: 'Clothing',
  },
  {
    key: 'other',
    value: 'Other',
  },
]

function ProductEntryScreen() {
  const dispatch = useDispatch()
  const {items} = useSelector((state: RootState) => state.products)
  const [isLoading, setIsLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onSuccess = () => {
    setIsLoading(false)
    onReset()
    messageApi.open({
      type: 'success',
      content: 'Product added correctly',
    });
  };

  const onSubmit = (values: Product) => {
    // simulating fetch
    setIsLoading(true)
    setTimeout(() => {
      dispatch(addNewProduct({...values, id: uuidv4()}))
      onSuccess()
    }, 1000)
  };

  const onReset = () => {
    form.resetFields();
  };

  const onRandomImage = () => {
    form.setFieldsValue({ image: getRandImg() });
  }
  return (
    <div className='product-entry'>
      {contextHolder}
      <h1>Product Entry</h1>
      <div>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onSubmit}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item 
          name="price" 
          label="Price" 
          rules={[
            {
              required: true,
            },
            () => ({
              validator(_, value) {
                if(value > 0){
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Incorrect Price '));
              },
            }),
          ]}
          >
          <InputNumber />
        </Form.Item>
        <Form.Item name="image" label="Image Url" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select
            placeholder="Category"
            allowClear
          >
            {
              categoriesList.map((opt) => (
                <Select.Option key={opt.key} value={opt.key}>{opt.value}</Select.Option>
              ))
            }
            
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button htmlType="button" onClick={onRandomImage}>
              Set Random Img
            </Button>
          </Space>
        </Form.Item>
      </Form>
      </div>
      <br />
      {
        items.map((item) => (
          <CardItem  key={item.id} onDelete={(id) => {dispatch(removeProduct(id))}} item={item} showQty={false}/>
        ))
      }
    </div>
  )
}

export default ProductEntryScreen
