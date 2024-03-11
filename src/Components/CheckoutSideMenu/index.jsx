import { XMarkIcon } from '@heroicons/react/24/solid';
import { useShoppingCartProvider } from '../../Context';

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useShoppingCartProvider();

    return(
        <aside className={`${ isCheckoutSideMenuOpen ? 'flex' : 'hidden' } flex-col fixed right-0 border bg-white border-red-700 rounded-lg w-[360px] h-[calc(100vh-10px)] top-20`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My order</h2>
                <button className='w-6 h-6 text-red-700' onClick={ closeCheckoutSideMenu }>
                    <XMarkIcon></XMarkIcon>
                </button>
            </div>
            <div className='flex flex-col items-center'>
                
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;