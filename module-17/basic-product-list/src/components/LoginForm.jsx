
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import ValidationHelper from '../utility/ValidationHelper';
import ButtonSpinner from './ButtonSpinner';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function LoginForm() {


  let [submit,SetSubmit] = useState(false);
  let navigate =new useNavigate();

  const onSubmit = async (e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get('email');

    if(ValidationHelper.isEmpty(email)){
      toast.error("email required");
    }
    else{
      SetSubmit(true);
      //API

      let res = await axios.post(`${ValidationHelper.API_BASE}/user-login`,{UserEmail:email});

      if(res.data['msg']==="success"){
        toast.success(res.data['data']);
        sessionStorage.setItem('email',email);

        navigate("/verify");

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
              <label>Email:</label>
              <input name="email" type='email' className='form-control mt-1' />
         
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

export default LoginForm;