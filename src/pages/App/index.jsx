import { ShopyNexProvider } from '../../Context';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import Navbar from '../../components/Navbar';
import Home from '../Home';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import MyAccount from '../MyAccount';
import Signin from '../Signin';
import NotFound from '../NotFound';

function AppRoutes() {
  const routes = useRoutes([
    {path: '/', Component: Home},
    {path: '/clothes', Component: Home},
    {path: '/electronics', Component: Home},
    {path: '/furniture', Component: Home},
    {path: '/shoes', Component: Home},
    {path: '/others', Component: Home},
    {path: '/my-account', Component: MyAccount},
    {path: '/my-orders', Component: MyOrders},
    {path: '/my-orders/last', Component: MyOrder},
    {path: '/my-orders/:id', Component: MyOrder},
    {path: '/signin', Component: Signin},
    {path: '/*', Component: NotFound},
  ]);
  return routes;
}

function App() {
  return (
    <ShopyNexProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShopyNexProvider>
  )
}

export default App
