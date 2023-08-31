import './index.css';
import { useShopyNexContext } from '../../hooks/useShopyNexContext';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function ProductDetail() {
  const { isProductDetailOpen, setIsProductDetailOpen, productToShow } = useShopyNexContext();
  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 rounded-lg bg-slate-700 p-6`}
    >
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => setIsProductDetailOpen(false)}>
          <XMarkIcon className='w-6 h-6 text-white cursor-pointer'></XMarkIcon>
        </div>
      </div>
      <figure className='mt-6'>
        <img
          className='w-full h-full rounded-lg'
          src={productToShow.images?.[0]}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  );
}