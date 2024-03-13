import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../Components/OrderCard';
import { useShoppingCartProvider } from '../../Context';

function MyOrder() {

  const { order } = useShoppingCartProvider();

    return (
      <>
      <div className='flex justify-center items-center relative w-96 mb-6'>
                <Link to="/my-orders" className='absolute left-0'>
                    <ArrowLeftIcon className='w-6 h-6 text-black cursor-pointer'></ArrowLeftIcon>
                </Link>
                <h1>My Order</h1>
            </div>
        <div className='flex flex-col w-96'>
                {
                    order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id} 
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            imgUrl={product.images} />
                    ))
                }
            </div>
      </>
    )
  }
  
  export default MyOrder;
  