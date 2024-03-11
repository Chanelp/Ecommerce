import { XMarkIcon } from '@heroicons/react/24/solid';
import { useShoppingCartProvider } from '../../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useShoppingCartProvider();
    console.log("PRODUCTO A MOSTRAR: ", productToShow);
    return(
        <aside className={`${ isProductDetailOpen ? 'flex' : 'hidden' } flex-col fixed right-0 border bg-white border-red-700 rounded-lg w-[360px] h-[calc(100vh-80px)] top-20`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button className='w-6 h-6 text-red-700' onClick={ closeProductDetail }>
                    <XMarkIcon></XMarkIcon>
                </button>
            </div>
            <div className='flex flex-col items-center'>
                <figure className='px-6 h-[200px]'>
                    <img 
                        className='w-full h-full rounded-lg'
                        src={productToShow.images[0]} 
                        alt="Producto seleccionado" />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${ productToShow.price } </span>
                    <span className='font-medium text-md'> { productToShow.title } </span>
                    <span className='font-sm text-sm'> { productToShow.description } </span>
                </p>
            </div>
        </aside>
    );
}

export default ProductDetail;