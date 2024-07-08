import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from './redux/CartSlice';


function App() {
    const items = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();
    
  return (
    <div className='wrapper'>
    <div className='leftside'>
    <h1>Shopping Cart</h1>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>&nbsp;&nbsp;
                <th>Rating</th>&nbsp;&nbsp;
                <th>Quantity</th>&nbsp;&nbsp;
                <th>Subtotal</th>&nbsp;&nbsp;
                <th>Actions</th>&nbsp;&nbsp;
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <td>
                        <img src={item.thumbnail} alt={item.name } width="50" />
                        <p>{item.name || item.title}</p>
                    </td>
                    <td>${item.price.toFixed(2)}</td>&nbsp;&nbsp;&nbsp;
                    <td>{item.rating}</td>&nbsp;&nbsp;&nbsp;
                    <td>{item.quantity}</td>&nbsp;&nbsp;
                    <td>${(item.quantity * item.price).toFixed(2)}</td>&nbsp;&nbsp;
                    <td>
                        <button onClick={() =>dispatch(decrementQuantity(item.id)) }>-</button>&nbsp;&nbsp;
                        <button onClick={() => dispatch(incrementQuantity (item.id))}>+</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table></div>
    <hr></hr>
    <div className='rightside'>
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
    </div>
  )
}

export default App