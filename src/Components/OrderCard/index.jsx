import { TrashIcon } from '@heroicons/react/24/solid';
import './style.css'
import { useShoppingCartProvider } from '../../Context';

const OrderCard = props => {

    const { id, title, price, imgUrl} = props;
    const { cartProducts, setCartProducts } = useShoppingCartProvider();

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filteredProducts);
    }

    return(
        <div className="order flex justify-between items-center w-full mb-3 rounded-lg p-2">
            <div className="flex items-center gap-2">
                <figure className='w-20 h-20'>
                    <img className='w-full h-full object-cover rounded-lg' src={imgUrl} alt={title} />
                </figure>
                <p className='font-light text-sm'> {title} </p>
            </div>
            <div className="flex items-center gap-2">
                <p className='font-medium text-base'>${price}</p>
                <button onClick={() => handleDelete(id)} className='w-6 h-6 text-gray-300 hover:text-red-600'>
                    <TrashIcon></TrashIcon>
                </button>
            </div>
        </div>
    );
}

export default OrderCard;