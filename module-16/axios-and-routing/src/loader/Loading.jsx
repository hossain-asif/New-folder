

import React from 'react'
import spinner from '../assets/img/spinner.svg'

const Loading = () => {
  return (
    <div className="container" style={{zIndex:100,position:"fixed",marginTop:"100px"}}>
        <div className="row d-flex justify-content-center">
            <div className='col-md-3'>
                <img src={spinner} alt="" />
            </div>

        </div>

    </div>
  )
}

export default Loading;