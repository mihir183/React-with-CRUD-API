import React, { Suspense } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { lazy } from 'react'
import Routing from './Layout'
import Loading from './Component/Loading.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading/>}>
          <Routes>
            {
              Routing.map((ele,index)=>(
                <Route path={ele.path} element={<ele.element/>}/>
              ))
            }
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
