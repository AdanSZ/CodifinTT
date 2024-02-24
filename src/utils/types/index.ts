export type CategoryType = 
  'phones' | 
  'consoles' | 
  'furniture' | 
  'homeAppliances' | 
  'clothing' | 
  'other'

export type Category = {
  key: CategoryType
  value: string
}

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: Category
}