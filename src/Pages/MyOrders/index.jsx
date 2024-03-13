import { Link } from 'react-router-dom';
import { useShoppingCartProvider } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

const MyOrders = () => {

    const { order } = useShoppingCartProvider();

    return(
        <>
            { order.map((order, index) => {
                <Link key={index} to={`/my-orders/${order.id}`}>
                    <OrdersCard
                      totalPrice={order.totalPrice}
                      quantityProducts={order.quantityProducts} />
                </Link>
            }) }
        </>
    );
}

export default MyOrders;