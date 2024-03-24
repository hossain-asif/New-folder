

import React, { useEffect,useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../loader/Loading'

const readPage = () => {

    const [ProductList,SetProductList] = useState([])
    const [Refresh,SetRefresh] = useState(0);
    const [Load,SetLoad] = useState(true);

    useEffect(()=>{
        GetAPI();
    },[Refresh]);


    const GetAPI = async ()=>{

        let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct");

        // console.log(res);

        let product = res.data['data'];
        SetProductList(product);
        SetLoad(false);
        // console.log(product);
    }


    const DeleteAPI = async(id)=>{
        SetLoad(true);
        let res = await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`);
        let deleteItem = res.data['status'];
        if(deleteItem==='success'){
            toast.success("delete successfully");
            SetRefresh(Refresh+1);
        }
        else{
            toast.error("delete failed");
            SetLoad(false);

        }

    }





  return (
    <>
    {Load && <Loading/>}

    <div className='container'>
        <div className='row'>
            <div className="col-12">
                <h1>Product List</h1>
                <hr />
                <button className='btn btn-outline-dark'   onClick={()=>SetRefresh(Refresh+1)}>REFRESH</button>
                <br />
                <div className='table-responsive'>
                <table className="table table-striped">
                    <tbody>
                    {
                        ProductList.length>0 && 
                        ProductList.map((item,i)=>{
                            return(
                                <tr>
                                    <td>{item['_id']}</td>
                                    <td>{item['ProductName']}</td>
                                    <td><img src={item['Img']} alt="..." style={{width:"60px",margin:"auto"}} /></td>
                                    <td>{item['UnitPrice']}</td>
                                    <td>{item['Qty']}</td>
                                    <td>{item['TotalPrice']}</td>
                                    <td><button onClick={()=>{DeleteAPI(item['_id'])}} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <Toaster/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default readPage;