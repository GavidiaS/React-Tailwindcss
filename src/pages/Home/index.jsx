import { useShopyNexContext } from '../../hooks/useShopyNexContext';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail';

export default function Home() {
  const location = useLocation();
  const { productsByFiltereds, products, setFilteredByTitle } = useShopyNexContext();
  return (
    <Layout>
      <h1 className='font-bold text-3xl mb-4'>Exclusive Products</h1>
      <input
        type="text"
        placeholder='Search a product'
        className='bg-slate-600 rounded-lg w-80 p-4 mb-4 focus:outline-none'
        onChange={(e) => setFilteredByTitle(e.target.value, location.pathname.slice(1))}
      />
      <section className='grid gap-4 grid-cols-1 w-full lg:grid-cols-4 max-w-screen-lg mx-auto justify-items-center'>
        {
          productsByFiltereds.length !== 0
          ? productsByFiltereds.map(item => (
            <Card key={item.id} product={item} />
          ))
          : products?.map(item => (
            <Card key={item.id} product={item} />
          ))
        }
      </section>
      <ProductDetail />
    </Layout>
  );
}