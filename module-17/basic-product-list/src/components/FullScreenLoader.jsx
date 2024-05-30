

import React from 'react'

function FullScreenLoader() {
  return (
    <div className='container mt-5'>

      <div className="row d-flex justify-content-center">

        <div className='col-md-2 mt-5 loader'>

        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

        </div>

      </div>



    </div>
  )
}

export default FullScreenLoader