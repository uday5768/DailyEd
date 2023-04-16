import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
// import { BrowserRouter } from "react-router-dom"
// import {
//   Route,
//   Routes,
//   BrowserRouter
// } from 'react-router-dom'
import National from './components/common/header/navbar/National'
import International from './components/common/header/navbar/International'
import Entertainment from './components/common/header/navbar/Entertainment'
import Sports from './components/common/header/navbar/Sports'
import Reviews from './components/common/header/navbar/Reviews'
import Notes from './components/common/header/navbar/Notes'
import SinglePage from "./components/singlePage/SinglePage"

const App = () => {
  return (
    <>
    {/* <BrowserRouter> */}
    <Header />
      <Routes>
      
          <Route exact path='/' element={<Homepages/>} />
          <Route exact path='/singlepage/:id'  element={<SinglePage/>} />
          <Route path="/national" element={<National />} />
          <Route path="/international" element={<International />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/notes" element={<Notes />} />
      </Routes>
      {/* </BrowserRouter> */}
    <Footer /> 
    </>
  )
}


export default App
