import React from 'react'

const AllOrder = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className='text-center'>AllOrder</h1>
          <div>
          <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Date</th>
      <th scope="col">Prize</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">234</th>
      <td>piku</td>
      <td>shrinivas colony road, building no. 345</td>
      <td>03 jun 2022</td>
      <td>678</td>
      <td className='text-danger'>.pending</td>
    </tr>
    <tr>
      <th scope="row">004</th>
      <td>priya</td>
      <td>shrinivas colony road, building no. 345</td>
      <td>01 may 2023</td>
      <td>1000</td>
      <td className='text-success'>.Dispatch</td>
    </tr>
    <tr>
    <th scope="row">111</th>
      <td>pragati</td>
      <td>shrinivas colony road, building no. 345</td>
      <td>20 aug 2021</td>
      <td>9000</td>
      <td className='text-secondary'>.Completed</td>
    </tr>
    <tr>
    <th scope="row">202</th>
      <td>chotti</td>
      <td>shrinivas colony road, building no. 345</td>
      <td>09 feb 0223</td>
      <td>60000</td>
      <td className='text-danger'>.Pending</td>
    </tr>
    <tr>
    <th scope="row">999</th>
      <td>abc</td>
      <td>shrinivas colony road, building no. 345</td>
      <td>30 apl 2022</td>
      <td>450</td>
      <td className='text-success'>.Dispatch</td>
    </tr>
  </tbody>
  </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllOrder