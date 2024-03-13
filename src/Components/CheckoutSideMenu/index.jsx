import { XMarkIcon } from '@heroicons/react/24/solid';
import { useShoppingCartProvider } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder } = useShoppingCartProvider();

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filteredProducts);
    }
    
    const handleCheckout = () => {
        const orderToAdd = {
            date: '13.03.2023',
            products: cartProducts,
            quantityProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        };

        setOrder([...order, orderToAdd]);
        setCartProducts([]);
    }

    return(
        <aside className={`${ isCheckoutSideMenuOpen ? 'flex' : 'hidden' } flex-col fixed right-0 w-[500px] h-[calc(100vh-90px)] top-20 border bg-white border-red-700 rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My order</h2>
                <button className='w-6 h-6 text-red-700' onClick={ closeCheckoutSideMenu }>
                    <XMarkIcon></XMarkIcon>
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    cartProducts.map(product => (
                        <OrderCard 
                            key={product.id} 
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            imgUrl={product.images} 
                            handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center mb-3'>
                    <span className='text-base font-light'>Total:</span>
                    <span className='font-medium text-lg'>${ totalPrice(cartProducts) }</span>
                </p>
                <button onClick={() => handleCheckout()} className='w-full mb-6 p-3 bg-black text-white rounded-lg'>
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;