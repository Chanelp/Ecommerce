const Card = ({ data }) => {
    return(
        <article className='w-56 h-60 bg-white cursor-pointer rounded-lg'>
            <figure className='relative w-full h-4/5'>
                <figcaption className='absolute bottom-0 left-0 bg-white/60 m-2 px-3 py-0.5 text-xs text-black font-semibold rounded-lg'> {data?.category} </figcaption>
                <img className='w-full h-full object-contain rounded-2xl' src={data?.images[0]} alt={data?.description} loading="lazy" />
                <button className="flex justify-center w-6 h-6 items-center absolute top-0 right-0 bg-white m-2 rounded-full font-bold">+</button>
            </figure>
            <p className="flex justify-between m-3 text-white">
                <span className="text-sm font-light"> { data?.title } </span>
                <span className="text-lg font-medium">${ data?.price } </span>
            </p>
        </article>
    );
}

export default Card;