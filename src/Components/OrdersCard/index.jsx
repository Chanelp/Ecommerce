const OrdersCard = (props) => {
    const { totalPrice, quantityProducts } = props;

    return(
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>13.03.2023</span>
                <span>{quantityProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

export default OrdersCard;