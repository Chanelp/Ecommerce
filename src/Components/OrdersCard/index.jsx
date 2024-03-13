const OrdersCard = (props) => {
    const { date, totalPrice, quantityProducts } = props;

    return(
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>{date}</span>
                <span>{quantityProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

export default OrdersCard;