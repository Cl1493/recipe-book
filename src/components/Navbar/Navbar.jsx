import './Navbar.css';
import heart from '../../assets/heart.svg';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header className='navbar'>
            <div>
                <h1 className='navbar-title'>
                     <Link to='/'>Recetario</Link>
                </h1>
            </div>
           <nav className='buttons'>
            {location.pathname !== '/add-recipe' && 
            <Link to='/add-recipe'> 
            <button className='add-recipe-button'>
               Añadir receta
            </button>
            </Link> 
            }
            {location.pathname !== '/' &&  
            <Link to='/favorites'>
            <button className='favorite-button'>
                    <img src={heart} width={20} height={20}/>
           </button>
           </Link>}
           
           
           </nav>
        </header>  
    )
}
export default Navbar;