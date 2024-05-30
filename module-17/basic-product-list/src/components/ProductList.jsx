/* eslint-disable react/jsx-key */


import React, { useEffect,useState } from 'react'
import ValidationHelper from '../utility/ValidationHelper'
import axios from 'axios'
import FullScreenLoader from './FullScreenLoader';
import { toast } from 'react-hot-toast';




function ProductList() {


  let [data,SetData] = useState(null);

  useEffect(()=>{
    (async ()=>{
      await CallProductList()
    })()
  },[]);
  
  
  
  
  
  const CallProductList =async ()=>{
    let res = await axios.get(`${ValidationHelper.API_BASE}/product-list`);

    let productList = res.data['data'];
    SetData(productList);

  }



  const AddToCart = async(id)=>{

    try{
      
      let res = await axios.get(`${ValidationHelper.API_BASE}/create-cart/${id}`,ValidationHelper.tokenHeader());

      if(res.data['msg'] === "success"){
        toast.success("Done");
      }
      else{
        toast.error("Fail");

      }

    }
    catch(err){
      
      ValidationHelper.Unauthorized(err.response.status);
    }

  }




  return (
    <div>
      {
        data==null?(<FullScreenLoader/>)
        :(
          <div className='container mt-3'>
            <div className='row'>
              {
                data.map((item,i)=>{
                  return(
                    <div className='col-md-3 p-1'>
                      <div className='card p-3'>

                        <img className='w-100' src={item['image']} alt="" />

                        <h5> PRICE:
                        {
                          item['discount']==0?(<span>{item['price']}</span>)
                          :(<span><strike>{item['price']}</strike> {item['discount_price']}</span>)
                        }

                        </h5>

                        <h6>{item['title']}</h6>

                        <button onClick={async()=>{await AddToCart(item['id'])}} className='btn btn-outline-danger'>ADD to card</button>

                      </div>

                    </div>
                  )
                })
              }
              

            </div>

          </div>
        )
      }

    </div>  
  )
}

export default ProductList