import React from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product_Sidebar.css'

const Product_Sidebar = () => {
  return (
    <div className='product-sidebar'>
        <CategorySidebar />
        <AllProduct />
    </div>
  )
}

export default Product_Sidebar