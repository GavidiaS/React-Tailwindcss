import { useShopyNexContext } from '../../hooks/useShopyNexContext';
import { useLocation, useParams, Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Layout from '../../components/Layout';
import OrderCard from '../../components/OrderCard';

export default function MyOrder() {
  const location = useLocation();
  const { id } = useParams();
  const { orders } = useShopyNexContext();
  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <section className='flex flex-col flex-1 mt-4 gap-2 overflow-y-auto'>
        {
          location.pathname === '/my-orders/last'
          ? orders?.at(-1).products.map(product => (
            <OrderCard key={product.id} product={product} />
          ))
          : orders?.at(+id).products.map(product => (
            <OrderCard key={product.id} product={product} />
          ))
        }
      </section>
    </Layout>
  );
}