const OrdersCard = (props) => {
    const { date, totalPrice, quantityProducts } = props;

    return(
        <div className="flex justify-between items-center mb-3 p-6 border border-black rounded-lg">
            <p className="flex justify-between w-80">
                <span>{date}</span>
                <span>{quantityProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

export default OrdersCard;