import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import Route from 'react-router-dom/Route'
import Routes from 'react-router-dom/Route'
import { BrowserRouter } from "react-router-dom"
import National from './components/common/header/navbar/National'
import International from './components/common/header/navbar/International'
import Entertainment from './components/common/header/navbar/Entertainment'
import Sports from './components/common/header/navbar/Sports'
import Reviews from './components/common/header/navbar/Reviews'
import Notes from './components/common/header/navbar/Notes'
import SinglePage from "./components/singlePage/SinglePage"

export default function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Header />
          <Route exact path='/' component={Homepages} />
          <Route exact path='/singlepage/:id'  component={SinglePage} />
          <Route path="/national" element={<National />} />
          <Route path="/international" element={<International />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/notes" element={<Notes />} />
      </Routes>
      </BrowserRouter>
    <Footer /> 
    </>
  )
}

