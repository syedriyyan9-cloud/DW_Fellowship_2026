import { Link } from "react-router-dom"

function Nav(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <button>Products</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/cart'}>
                            <button>Cart</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav