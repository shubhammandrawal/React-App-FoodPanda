import CartIcon from "../Cart/CartIcon";
import './HeaderCartButton.css'
export default function HeaderCartButton(){
    return <button className='button'>
        <span className='icon'>
            <CartIcon />
        </span>
        <span>
           Add Your Cart
        </span>
        <span className='badge'>
            2
        </span>
    </button>
}