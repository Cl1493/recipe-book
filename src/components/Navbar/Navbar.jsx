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
            <button className='add-recipe-button'>
               <Link to='/add-recipe'> Añadir receta</Link> 
            </button>
            {location.pathname !== '/' &&  <button className='favorite-button'>
                 <Link to='/favorites'>
                    <img src={heart} width={20} height={20}/>
                 </Link>
           </button>}
           
           </nav>
        </header>  
    )
}
export default Navbar;