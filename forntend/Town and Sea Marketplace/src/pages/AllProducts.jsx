import React from 'react'
import { decorsdata } from '../data'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
const AllProducts = () => {
  const navigate = useNavigate()
  const handleButtonClick = (product)=>{
    navigate('/offerform',{state:product})
  }
  
  return (
    <div>
        <Navbar/>

       <div className="product-container">
        {
          decorsdata.map((product)=>{
            return(
              <div key={product.id} className="product-card">
                <img src={product.image} alt="no  image found" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button>ADD TO CART</button>
                <button onClick={()=>handleButtonClick(product)}>MAKE AN OFFER</button>
              </div>
            )
          })
        }
       </div>

        
    </div>
  )
}

export default AllProducts