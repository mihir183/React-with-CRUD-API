import logo from '../assets/images/mv.png'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Header = () => {
  return (
    <>
      <section id='navbar'>
        <div className="container-fluid px-5 py-3 shadow">
            <div className="row align-items-center">
                <div className="col">
                    <Link to=''>
                        <img src={logo} alt="" width={50} className='rounded-2' />
                    </Link>
                </div>
                {/* <div className="col">
                  <div className="row">
                    <div className="col">
                      <input type="search" name="" id="" className='form-control' />
                    </div>
                    <div className="col">
                      <button className='btn btn-outline-primary text-capitalize'>
                        add
                      </button>
                    </div>
                  </div>
                </div> */}
            </div>
        </div>
      </section>
    </>
  )
}

export default Header
