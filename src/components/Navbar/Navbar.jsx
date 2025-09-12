import './Navbar.css';
import heart from '../../assets/heart.svg';

function Navbar() {

    return (
        <header className='navbar'>

            <div>
                <h1 className='navbar-title'>Recetario</h1>
            </div>

           <nav className='buttons'>

            <button className='add-recipe-button'>
               <a href='/'>Añadir receta</a> 
            </button>

            <button className='favorite-button'>
                <a href='/'> 
                    <img src={heart} width={20} height={20}/>
                </a>
           </button>

           </nav>
       
        </header>
    )
}
export default Navbar;