import React from 'react'

const AllProductList = () => {
  const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col">
          <h1 className='text-center'>AllProductList</h1>

            <table class="table table-image table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Option</th>
                  <th scope="col">Price</th>
                  <th scope="col">Availability</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {a.map((i) =>(
                <tbody class="table">
                <tr>
                  <td>
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt='img' height={100} />
                  </td>
                  <td>Watch</td>
                  <td>9 option</td>
                  <td>5000</td>
                  <td>20 in stock</td>
                  <td>Draft</td>
                </tr>
                <tr>
                  <th>
                    <img src="data:image/jpeg;base64,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" alt='img' height={100} />
                  </th>
                  <td>jam</td>
                  <td>8 option</td>
                  <td>250</td>
                  <td>80 in stock</td>
                  <td>Draft</td>
                </tr>
                <tr>
                  <th>
                    <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" alt='' height={100} />
                  </th>
                  <td>Shampoo</td>
                  <td>7 option</td>
                  <td>300</td>
                  <td>10 in stock</td>
                  <td>Draft</td>
                </tr>
                <tr>
                  <th>
                    <img src="https://www.nescafe.com/gb/sites/default/files/2023-09/UK_uk_NES_3.0_Website_Functional-and-Homepage_IMG_All-Products_2636by1214px_230717_1_1690873199573.jpg" alt='img' height={100} />
                  </th>
                  <td>coffee</td>
                  <td>5 option</td>
                  <td>500</td>
                  <td>2 in stock</td>
                  <td>Draft</td>
                </tr>
                <tr>
                  <th>
                    <img src="https://londonorganicbeauty.com/cdn/shop/articles/Natural_Beauty_Products_2.jpg?v=1650521620" alt='img' height={100} />
                  </th>
                  <td>cream</td>
                  <td>6 option</td>
                  <td>900</td>
                  <td>out of stock</td>
                  <td>Draft</td>
                </tr>
              </tbody>
              ))}
              
            </table>
        </div>

      </div>
    </div>
  )
}

export default AllProductList
