import './index.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import { useShopyNexContext } from '../../hooks/useShopyNexContext';
import OrderCard from '../OrderCard';

let id = 0;

export default function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen, cartProducts, totalPrice, count, addOrder } = useShopyNexContext();
  function handleCheckout() {
    const orderToAdd = {
      id: id++,
      date: new Date(),
      products: cartProducts,
      totalProducts: count,
      totalPrice
    }
    addOrder(orderToAdd);
    setIsCheckoutSideMenuOpen(false);
  }
  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 rounded-lg bg-slate-700 p-6`}
    >
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => setIsCheckoutSideMenuOpen(false)}>
          <XMarkIcon className='w-6 h-6  cursor-pointer' />
        </div>
      </div>
      <section className='flex flex-col flex-1 mt-4 gap-2 overflow-y-auto'>
        {
          cartProducts?.map(product => (
            <OrderCard key={product.id} product={product} />
          ))
        }
      </section>
      <div className='px-6'>
        <p className='flex justify-between items-center text-lg font-light mb-2'>
          <span>Total:</span>
          <span className='text-xl font-bold'>${totalPrice}</span>
        </p>
        <NavLink to='/my-orders/last'>
          <button className='bg-slate-950 py-3 text-white w-full rounded-lg' onClick={handleCheckout}>Checkout</button>
        </NavLink>
      </div>
    </aside>
  );
}