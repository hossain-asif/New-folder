

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import ValidationHelper from '../utility/ValidationHelper';
import ButtonSpinner from './ButtonSpinner';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

function VerifyForm() {

  let [submit,SetSubmit] = useState(false);
  // let navigate =new useNavigate();



  const onSubmit = async (e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let otp = formData.get('otp');

    if(ValidationHelper.isEmpty(otp)){
      toast.error("otp required");
    }
    else{
      SetSubmit(true);
      //API
      let email = sessionStorage.getItem('email');
      let res = await axios.post(`${ValidationHelper.API_BASE}/verify-login`,{UserEmail:email,OTP:otp});

      if(res.data['msg']==="success"){
        
        sessionStorage.setItem('token',res.data['data']);
        window.location.href="/";

        // navigate("/verify");

      }
      else{
        toast.error("Request fail");
        SetSubmit(false);

      }


      SetSubmit(false);
    }

  }



  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>

        <div className='col-md-4'>
          <div className='card'>
            <form className='p-4 form-label' onSubmit={onSubmit}>
              <label>OTP:</label>
              <input name="otp" type='text' className='form-control mt-1' />
         
              <button disabled={submit} type='submit' className='btn btn-dark w-100 mt-2'>
                {
                  submit?(<ButtonSpinner/>):("Submit")
                }
                </button>
            </form>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default VerifyForm