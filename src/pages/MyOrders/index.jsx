import { useShopyNexContext } from '../../hooks/useShopyNexContext';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import OrdersCard from '../../components/OrdersCard'

export default function MyOrders() {
  const { orders } = useShopyNexContext();
  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-6'>
        <h1 className='text-3xl font-bold'>My Orders</h1>
      </div>
      {
        orders?.map((orden) => (
          <Link to={`/my-orders/${orden.id}`} key={orden.id}>
            <OrdersCard order={orden} />
          </Link>
        ))
      }
    </Layout>
  );
}