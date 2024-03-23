import React from 'react'

const AllUsers = () => {
  return (
    <div>
      <div className="justify-content-center">
        <div className="">
          <h1 className="text-center">AllUser</h1>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <td>Rahul</td>
                  <td>9851456285</td>
                  <td>rahul45@gmail.com</td>
                  <td className='text-success'>.Active</td>

                </tr>
                <tr>
                  <td>Ruchi</td>
                  <td>8514056285</td>
                  <td>ruchi45@gmail.com</td>
                  <td className='text-secondary'>.Offline</td>
                </tr>
                <tr>
                  <td>Giraf</td>
                  <td>7851456285</td>
                  <td>girafl45@gmail.com</td>
                  <td className='text-success'>.Active</td>
                </tr>
                <tr>
                  <td>kuku</td>
                  <td>6851456285</td>
                  <td>kuku45@gmail.com</td>
                  <td className='text-secondary'>.Offline</td>
                </tr>
                <tr>
                  <td>Aalu</td>
                  <td>9851456285</td>
                  <td>alul45@gmail.com</td>
                  <td className='text-success'>.Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsers

