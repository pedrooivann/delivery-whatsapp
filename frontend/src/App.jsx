
import './components/Global.css'
import { Route, Routes } from 'react-router-dom';

import Orders from './pages/Orders/Orders.jsx';
import Products from './pages/Products/Products.jsx';
import Clients  from './pages/Clients/Clients.jsx';

import './components/Global.css'

function App() {

  return (
    <>


    <div className='layout dark'>

    
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
