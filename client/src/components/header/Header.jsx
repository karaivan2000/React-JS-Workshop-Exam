import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="head" role="banner">
            {/*wrap*/}
            <div className="wrap clearfix">
                <Link to="index.html" title="SocialChef" className="logo">
                    <img src="images/ico/logo.png" alt="SocialChef logo" />
                </Link>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li className="current-menu-item">
                            <Link to="index.html" title="Home">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="recipes" title="Recipes">
                                <span>All Recipes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" title="Login page">
                                <span>Login</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/register" title="Register page">
                                <span>Register</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/logout">
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="user-nav" role="navigation">
                    <ul>
                        <li className="light">
                            <Link to="find_recipe.html" title="Search for recipes">
                                <i className="icon icon-themeenergy_search" />{" "}
                                <span>Search for recipes</span>
                            </Link>
                        </li>

                        <li className="dark">
                            <Link to="/recipes/submit" title="Submit a recipe">
                                <i className="icon icon-themeenergy_fork-spoon" />{" "}
                                <span>Submit a recipe</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/*//wrap*/}
        </header>

    );
}