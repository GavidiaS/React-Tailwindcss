import { XMarkIcon } from '@heroicons/react/24/solid';
import { useLocation } from 'react-router-dom';
import { useShopyNexContext } from '../hooks/useShopyNexContext';

export default function OrderCard({ product }) {
  const location = useLocation();
  const { id, title, images, price } = product;
  const { deleteCartProducts } = useShopyNexContext();
  let renderXMarkIcon;
  if (location.pathname !== '/my-orders/last') {
    renderXMarkIcon = <XMarkIcon className='w-6 h-6 cursor-pointer' onClick={() => deleteCartProducts(id)} />
  }
  return (
    <article className="flex justify-between items-center gap-4 bg-slate-700 p-2 rounded-md">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={images?.[0]} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXMarkIcon}
      </div>
    </article>
  );
}