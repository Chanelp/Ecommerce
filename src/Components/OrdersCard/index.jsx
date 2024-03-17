import { ShoppingCartIcon, CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const OrdersCard = (props) => {
    const { date, totalPrice, quantityProducts } = props;

    return(
        <div className="flex justify-between items-center mb-3 p-6 border-2 border-zinc-300 rounded-lg">
            <p className="flex justify-between w-96">
                <span className='flex justify-center items-center gap-2'><ShoppingCartIcon width="20px" height="20px" /> {quantityProducts} products</span>
                <span className='flex justify-center items-center gap-2'><CurrencyDollarIcon width="20px" height="20px" /> ${totalPrice}</span>
                <span className='flex justify-center items-center gap-2'><CalendarDaysIcon width="20px" height="20px" />{date}</span>
            </p>
        </div>
    );
}

export default OrdersCard;