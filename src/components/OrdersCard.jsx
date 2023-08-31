import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function OrdersCard({ order }) {
  const { date, totalPrice, totalProducts } = order;
  return (
    <article className="w-72 h-20 flex justify-between items-center p-4 mb-4 bg-slate-700 hover:scale-110 transition-all duration-500 rounded-md">
      <p className="flex flex-col gap-2 text-white">
        <span>📅 {new Date(date).toLocaleDateString()}</span>
        <span>🛍 {totalProducts}</span>
      </p>
      <p className="flex items-center text-white text-2xl font-semibold gap-2">
        <span>${totalPrice}</span>
        <ChevronRightIcon className='w-h-7 h-7' />
      </p>
    </article>
  );
}