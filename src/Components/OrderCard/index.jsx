import { TrashIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {

    const { title, price } = props;

    return(
        <div className="flex justify-between items-center w-full mb-3">
            <div className="flex items-center gap-2">
                <figure className='w-20 h-20'>
                    <img className='w-full h-full object-cover rounded-lg' src="https://i.imgur.com/cHddUCu.jpeg" alt={title} />
                </figure>
                <p className='font-light text-sm'> {title} </p>
            </div>
            <div className="flex items-center gap-2">
                <p className='font-medium text-base'>${price}</p>
                <button className='w-6 h-6 text-red-600'>
                    <TrashIcon></TrashIcon>
                </button>
            </div>
        </div>
    );
}

export default OrderCard;