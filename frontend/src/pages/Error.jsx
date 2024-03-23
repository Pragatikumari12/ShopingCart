import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='text-center'>
        <h1 className='mt-5'>Error 404 Not Found</h1>
        <Link className='btn btn-lg btn-secondary shadow rounded-4 mt-3' to='/'>Back to HomePage</Link>
    </div>
  )
}

export default Error