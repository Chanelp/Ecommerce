import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useShoppingCartProvider } from '../../Context';

const Navbar = () => {
  const activeStyle = "underline underline-offset-8 decoration-white font-bold";
  const { cartProducts } = useShoppingCartProvider();

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full bg-red-800 text-white py-5 px-8 text-base">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg mr-4">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-white/50">chanel@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center bg-red-800/90 py-1.5 px-3 rounded-full text-white">
          <div className='w-5 h-5 mr-2'><ShoppingBagIcon></ShoppingBagIcon></div>
          <div>{ cartProducts.length }</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
