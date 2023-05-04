import { useContext } from 'react'; 
// Import useContext hook from React
import { CartContext } from '../contexts/CartContext'; 
// Import CartContext from CartContext.js file
function ShoppingCart() {
    const { cart } = useContext(CartContext); 
    // Use useContext
    return (
        <div>
          {cart.map((product) => ( // Render shopping cart items using map function
            <div key={product.id}>
              <h3>{product.title}</h3> // Render product title
              <p>{product.price}</p> // Render product price
            </div>
          ))}
        </div>
      );
    }
   