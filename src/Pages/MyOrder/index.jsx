import OrderCard from '../../Components/OrderCard';
import { useShoppingCartProvider } from '../../Context';

function MyOrder() {

  const { order } = useShoppingCartProvider();

    return (
      <>
        <p>My Order</p>
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
  