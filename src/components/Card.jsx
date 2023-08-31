import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useShopyNexContext } from '../hooks/useShopyNexContext';

export default function Card({ product }) {
  const { setIsProductDetailOpen, setIsCheckoutSideMenuOpen, showToProduct, addCartProducts, cartProducts } = useShopyNexContext();
  const { id, title, price, images, category } = product;
  function showProduct() {
    setIsProductDetailOpen(true);
    setIsCheckoutSideMenuOpen(false);
    showToProduct(product);
  }
  function addProducts(event) {
    event.stopPropagation();
    addCartProducts(product);
    setIsCheckoutSideMenuOpen(true);
    setIsProductDetailOpen(false);
  }
  function renderIcon() {
    const isInCart = cartProducts.filter(item => item.id === id).length > 0;
    if (isInCart) {
      return (
      <div
          className="absolute top-0 right-0 flex justify-center items-center bg-green-700 w-6 h-6 rounded-full m-2 text-xl font-bold"
        >
          <CheckIcon className='w-4 h-4 text-white' />
      </div>
    );
    } else {
      return (
      <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-xl font-bold"
          onClick={addProducts}
        >
          <PlusIcon className='w-4 h-4 text-black' />
      </div>
    );
    }
  }
  return (
    <article
      className="bg-slate-600 cursor-pointer w-56 h-60 rounded-lg overflow-hidden"
      onClick={showProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category?.name}</span>
        <img className="w-full h-full rounded-lg" src={images[0]} alt={title} />
        {renderIcon()}
      </figure>
      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </article>
  );
}