import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useShopyNexContext } from "../hooks/useShopyNexContext";

export default function Navbar() {
  const activeStyle = 'underline underline-offset-4';
  const { count, setFilteredByCategory } = useShopyNexContext();
  return (
    <nav className="w-full overflow-auto p-4 bg-slate-900 flex justify-between items-center">
      <ul className="flex justify-center items-center gap-4 text-lg">
        <li className="font-semibold">
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >ShopNex</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >All</NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setFilteredByCategory('clothes')}
          >Clothes</NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setFilteredByCategory('electronics')}
          >Electronics</NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setFilteredByCategory('furniture')}
          >Furnitures</NavLink>
        </li>
        <li>
          <NavLink
            to='/shoes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setFilteredByCategory('shoes')}
          >Shoes</NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setFilteredByCategory('others')}
          >Others</NavLink>
        </li>
      </ul>

      <ul className="flex justify-center items-center gap-4 text-lg">
        <li>
          gavcas@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >My Orders</NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >My Account</NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >Sign In</NavLink>
        </li>
        <li className='flex justify-between items-center'>
          <ShoppingCartIcon className='w-6 h-6 mr-2' /> {count}
        </li>
      </ul>
    </nav>
  );
}