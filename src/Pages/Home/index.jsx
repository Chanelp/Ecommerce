/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Card from "../../Components/Card";
import ProductDetail from '../../Components/ProductDetail';
import { useShoppingCartProvider } from '../../Context';

function Home() {
  const { items, searchByTitle, setSearchByTitle, filteredItems } = useShoppingCartProvider();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(window.location.pathname.slice(1));

    return () => setSearchByTitle(null);
  }, [window.location.pathname]);

  const filterByCategory = (items, category) => {
    if(category){
      return items?.filter(item => 
        item.category.name.toLowerCase() === category.toLowerCase());
      } else {
      return items;
    }
  };

  const renderView = () => {
    const itemsToRender = searchByTitle?.length > 0 ? filteredItems : filterByCategory(items, category);

    if(itemsToRender?.length > 0){
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
        ));
    } else {
      return(
        <div className='text-xl text-gray-400'>
          No matches found 🪁
        </div>
      )
    }
  }

    return (
      <>
      <div>
        <h1 className='font-medium text-xl'>Acquire exclusive products</h1>
      </div>
      <div className="relative my-6 w-80">
        <input className="w-full p-1.5 mb-4 outline-1 outline-red-800 border-2 border-black/50 rounded-lg" 
              type="text" 
              placeholder="Search a product"
              onChange={(event) => setSearchByTitle(event.target.value)}
        />
        <span className='absolute right-3 top-2 cursor-pointer'><MagnifyingGlassIcon className='w-5 h-5 text-red-700'/></span>
      </div>
        <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          { renderView()}
        </section>
        <ProductDetail />
      </>
    )
  }
  
  export default Home
  