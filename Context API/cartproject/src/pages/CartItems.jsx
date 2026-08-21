
import Nav from "../components/Nav.jsx"
import { CartContext } from "../components/CartProvider.jsx";
import { useContext } from "react";

function CartItems() {

    const { cart, removeFromCart } = useContext(CartContext);
    return (
        <div>
            <Nav />
            {cart.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>

                    <button onClick={() => removeFromCart(product.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CartItems