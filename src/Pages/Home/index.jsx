import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Card from "../../Components/Card";
import ProductDetail from '../../Components/ProductDetail';
import { useShoppingCartProvider } from '../../Context';

function Home() {
  const { items, setSearchByTitle } = useShoppingCartProvider();

    return (
      <>
      <div>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
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
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
              ))
          }
        </section>
        <ProductDetail />
      </>
    )
  }
  
  export default Home
  