type OrderProps = {
    pizza: {
        base: string;
        toppings: string[];
    };
};

const Order = ({ pizza }: OrderProps) => {
    return (
        <div className="text-center max-w-200 mx-auto">
            <h2>Thank you for your order :)</h2>
            <p className="my-5 mx-auto">
                You ordered a {pizza.base} pizza with:
            </p>
            {pizza.toppings.map((topping) => (
                <div key={topping}>{topping}</div>
            ))}
        </div>
    );
};

export default Order;
