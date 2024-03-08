import { XMarkIcon } from '@heroicons/react/24/solid';
import { useShoppingCartProvider } from '../../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail } = useShoppingCartProvider();
    return(
        <aside className={`${ isProductDetailOpen ? 'flex' : 'hidden' } flex-col fixed right-0 border bg-white border-red-700 rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button className='w-6 h-6 text-red-700' onClick={ closeProductDetail }>
                    <XMarkIcon></XMarkIcon>
                </button>
            </div>
        </aside>
    );
}

export default ProductDetail;