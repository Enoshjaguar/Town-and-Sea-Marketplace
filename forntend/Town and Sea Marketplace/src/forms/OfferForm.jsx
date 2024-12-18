import React,{useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const OfferForm = () => {
  const [makeanoffer,setmakeanoffer] = useState('')
  const [reason,setReason] = useState('')
  const [mobile,setMobile] = useState('')
  const [responseMessage,setresponseMessage] = useState('')
  const location = useLocation()
  const product = location.state

  const handlesubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3400/offers/offer',{
        productName: product.name,
        productPrice : product.price,
        mobile,
        makeanoffer,reason,
        
      })
      setresponseMessage(response.data.message)
    } catch (error) {
      console.log(error)
      
    }
  }
  
  return (
    <div className='offerform'>
        
        
        <form action="" onSubmit={handlesubmit} className='offerformform'>
        <marquee behavior="" direction=""><h2>MAKE AN OFFER</h2></marquee>
       <h2>{product.name}</h2>
            <label htmlFor="">Actual Price :{product.price} </label><br />
            <label htmlFor="">Make an offer : </label>
            <input type="text" value={makeanoffer} onChange={(e)=>setmakeanoffer(e.target.value)}  placeholder='enter your desirable price'/><br />
            <label htmlFor="">Reason : </label>
            <input type="text" value={reason} onChange={(e)=>setReason(e.target.value)} placeholder='why this price'/><br />
            <label htmlFor="">Mobile : </label>

            <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='enter your mobile number'/>
            <button type='submit'>SUBMIT</button>
        </form>
        {responseMessage && <p className='respnseMessage'>{responseMessage}😇</p>}
    </div>
  )

}
export default OfferForm