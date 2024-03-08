import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {

    return(
        <aside className="flex flex-col fixed right-0 border bg-white border-red-700 rounded-lg w-[360px] h-[calc(100vh-80px)]">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button className='w-6 h-6 text-red-700'>
                    <XMarkIcon></XMarkIcon>
                </button>
            </div>
        </aside>
    );
}

export default ProductDetail;