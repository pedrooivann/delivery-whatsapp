//import './App.css'
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import './components/Global.css'
import { Route, Routes } from 'react-router-dom';

import Orders from './pages/Orders.jsx';
import Products from './pages/Products.jsx';
import Clients  from './pages/Clients/Clients.jsx';

import './components/Global.css'

function App() {

  return (
    <>
    <Header/>


    <div className='layout dark'>

    <Sidebar/>
    
      <main >
        <Routes>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/clients" element={<Clients/>}/>
        </Routes>
      </main>
      </div>
  </>
  )
}

export default App;
