import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'


function App() {
  return (
    <>
      <p className='bg-red-100'>My App</p>
      <Home></Home>
      <MyAccount></MyAccount>
      <MyOrders></MyOrders>
      <NotFound></NotFound>
      <SignIn></SignIn>
    </>
  )
}

export default App
