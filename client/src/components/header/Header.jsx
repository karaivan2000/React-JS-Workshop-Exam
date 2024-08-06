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
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link to="#" title="Pages">
                                <span>Pages</span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="left_sidebar.html" title="Left sidebar page">
                                        Left sidebar page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="right_sidebar.html" title="Right sidebar page">
                                        Right sidebar page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="two_sidebars.html" title="Both sidebars page">
                                        Both sidebars page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="full_width.html" title="Full width page">
                                        Full width page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="login.html" title="Login page">
                                        Login page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="register.html" title="Register page">
                                        Register page
                                    </Link>
                                </li>
                                <li>
                                    <Link to="error404.html" title="Error page">
                                        Error page
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" title="Features">
                                <span>Features</span>
                            </Link>
                            <ul>
                                <li>
                                    <Link to="icons.html" title="Icons">
                                        Icons
                                    </Link>
                                </li>
                                <li>
                                    <Link to="grid.html" title="Grid">
                                        Grid
                                    </Link>
                                </li>
                                <li>
                                    <Link to="shortcodes.html" title="Shortcodes">
                                        Shortcodes
                                    </Link>
                                </li>
                                <li>
                                    <Link to="pricing.html" title="Pricing tables">
                                        Pricing tables
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/register" title="Register page">
                                Register 
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
                        <li className="medium">
                            <Link to="my_profile.html" title="My account">
                                <i className="icon icon-themeenergy_chef-hat" />{" "}
                                <span>My account</span>
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