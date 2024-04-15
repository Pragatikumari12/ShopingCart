import { Link } from "react-router-dom"

const AllCategory = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="text-center">All Category</h1>
          <div>
            <div class="dropdown-center">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                smartphone
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item">Top&Jeans</Link></li>
                <li><Link class="dropdown-item">Saree</Link></li>
                <li><Link class="dropdown-item">Kurtti</Link></li>
              </ul>
            </div>
            <div class="dropdown-center">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                television
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item">Top&Jeans</Link></li>
                <li><Link class="dropdown-item">Saree</Link></li>
                <li><Link class="dropdown-item">Kurtti</Link></li>
              </ul>
            </div>
            <div class="dropdown-center">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                headphones
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item">Top&Jeans</Link></li>
                <li><Link class="dropdown-item">Saree</Link></li>
                <li><Link class="dropdown-item">Kurtti</Link></li>
              </ul>
            </div>
            <div class="dropdown-center">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                tablet
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item">Top&Jeans</Link></li>
                <li><Link class="dropdown-item">Saree</Link></li>
                <li><Link class="dropdown-item">Kurtti</Link></li>
              </ul>
            </div>
            <div class="dropdown-center">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              camera
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item">Top&Jeans</Link></li>
                <li><Link class="dropdown-item">Saree</Link></li>
                <li><Link class="dropdown-item">Kurtti</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCategory