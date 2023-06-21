import meals from '../Assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';
function Header(){
    return<>
        <header className='header'>
            <h2>FoodPanda</h2>
            <HeaderCartButton />
        </header>
        
        <div className='main-image'>
            <img src={meals} alt="meals-img" />
        </div>
    </>
}

export default Header;