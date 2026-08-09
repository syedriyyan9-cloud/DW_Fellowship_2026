import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <h2>
                <NavLink to={"/"}>FoodRecipe</NavLink>
            </h2>
            <form>
                <input type="text" name="search" placeholder="Enter Items..." />
                <button>Search</button>
            </form>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'}>Favorites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar