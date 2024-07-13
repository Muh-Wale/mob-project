import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import PropertyListing from './Property-List/PropertyListing'
import PropertyDetail from './Property-detail/PropertyDetail'
import About from './About/About'

function App() {

  return (
    <>
      <div className='max-w-[1640px] mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/propertylisting" element={<PropertyListing/>}/>
            <Route path="/propertydetail" element={<PropertyDetail/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
