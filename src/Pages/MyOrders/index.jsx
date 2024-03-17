import { Link } from 'react-router-dom';
import { useShoppingCartProvider } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

const MyOrders = () => {

    const { order } = useShoppingCartProvider();

    return(
        <>
            { order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                      totalPrice={order.totalPrice}
                      quantityProducts={order.quantityProducts} 
                      date={order.date}/>
                </Link>
            )) }
        </>
    );
}

export default MyOrders;