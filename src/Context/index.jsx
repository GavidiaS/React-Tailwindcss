import { createContext, useState, useEffect } from 'react';

const initialState = {
  products: [],
  productsByFiltereds: [],
  isProductDetailOpen: false,
  isCheckoutSideMenuOpen: false,
  productToShow: {},
  cartProducts: [],
  orders: []
}
const routes = {
  clothes: 'clothes',
  electronics: 'electronics',
  furniture: 'furniture',
  shoes: 'shoes',
  others: 'others',
}

export const ShopyNexContext = createContext(initialState);

export function ShopyNexProvider({ children }) {
  const [store, setStore] = useState(initialState);
  const count = store.cartProducts.length;
  const totalPrice = store.cartProducts.reduce((total, product) => total + product.price, 0);

  function setFilteredByTitle(text, route) {
    if (route in routes) {
      setStore({...store, productsByFiltereds: store.products?.filter(product => product.title.toLowerCase().includes(text.toLowerCase()) && product.category.name.toLowerCase() === route)})
    } else {
      setStore({...store, productsByFiltereds: store.products?.filter(product => product.title.toLowerCase().includes(text.toLowerCase()))})
    }
  }
  function setFilteredByCategory(text) {
    setStore({...store, productsByFiltereds: store.products?.filter(product => product.category.name.toLowerCase() === text) });
  }
  function setIsProductDetailOpen(boolean) {
    setStore(prevState => ({...prevState, isProductDetailOpen: boolean}))
  }
  function setIsCheckoutSideMenuOpen(boolean) {
    setStore(prevState => ({...prevState, isCheckoutSideMenuOpen: boolean}))
  }
  function showToProduct(product) {
    setStore(prevState => ({ ...prevState, productToShow: product }));
  }
  function addCartProducts(product) {
    const newCartProducts = [...store.cartProducts];
    newCartProducts.push(product);
    setStore(prevState => ({ ...prevState, cartProducts: newCartProducts }));
  }
  function deleteCartProducts(id) {
    const newCartProducts = [...store.cartProducts];
    const indexProduct = newCartProducts.findIndex(product => product.id === id);
    newCartProducts.splice(indexProduct, 1);
    setStore(prevState => ({ ...prevState, cartProducts: newCartProducts }));
  }
  function addOrder(order) {
    const newOrder = [...store.orders];
    newOrder.push(order);
    setStore(prevState => ({ ...prevState, orders: newOrder, cartProducts: [] }));
  }

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setStore({...store, products: data}))
  }, []);

  return (
    <ShopyNexContext.Provider value={{
      ...store,
      count,
      totalPrice,
      setFilteredByTitle,
      setFilteredByCategory,
      setIsProductDetailOpen,
      setIsCheckoutSideMenuOpen,
      showToProduct,
      addCartProducts,
      deleteCartProducts,
      addOrder,
    }}>
      {children}
    </ShopyNexContext.Provider>
  );
}