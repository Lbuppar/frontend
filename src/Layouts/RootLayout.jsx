
import { NavLink, Outlet, Link } from "react-router-dom"

import { GlobalContext } from "../context";
import { useContext } from "react"
// import logo from "../assets/logo.png"

const RootLayout = () => {
    const { isLogin, setIsLogin } = useContext(GlobalContext);

    return (
        <div className="container">

            <header>
                <Link to="/" className="logo">Digital Life</Link>
                <nav>

                    <NavLink to="/">Products</NavLink>

                    <NavLink to="/cart">Cart</NavLink>

                    <NavLink to="/aboutus">About Us</NavLink>

                    <NavLink to="/contactus">Contact Us</NavLink>

                </nav>

                {isLogin ? <NavLink to="/" onClick={() => { setIsLogin("") }}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
            </header>

            <main>
                <Outlet />
            </main>

        </div>
    )
}


export default RootLayout