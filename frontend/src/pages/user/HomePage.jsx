import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
// import { productdata } from '../../util/util'
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const fetchproducts = async () => {
    const {data} = await axios.get("http://localhost:5000/allproducts")
    setProducts(data)
  }
  useEffect(() => {
    fetchproducts()
  }, [])
  
  // console.log(productdata);
  console.log(products);
  return (
    <div>
      <div className="row g-3">
        {products.map((item) => (
          // data=attribute {data}=value react functional component perameter
          <ProductCard data={item} />
        ))}
      </div>
    </div>
  )
}

export default HomePage