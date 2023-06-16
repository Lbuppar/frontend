
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import profile from '../assets/profile.png'
import axios from 'axios';

import { GlobalContext } from "../context";
import { URL } from "../App";

const Login = () => {

    const { isLogin, setIsLogin } = useContext(GlobalContext);

    const [message, setMessage] = useState("Please Login");
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        if (user.email && user.password) {

            const loginResp = await axios.post(`${URL}/login`, user);

            if (loginResp.data.email === "The Email Address is Incorrect") {
                setMessage(loginResp.data.email)
            }
            else if (loginResp.data.password === "The Password is Incorrect") {
                setMessage(loginResp.data.password)
            } else {

                setIsLogin(loginResp.data)

            }

        } else {
            setMessage("Please Fill The Fields")
        }

    }


    return (
        <section className='login'>

            <img src={profile} alt={profile} />

            {isLogin ? <div>
                <h2 style={{ textAlign: 'center' }}>Hi <u style={{ textTransform: "capitalize" }}>{isLogin.name}</u> Happy Shopping</h2>
            </div> :


                <article>

                    <h2>{message}</h2>


                    <form onSubmit={handleSubmit}>

                        <input type="email" name="email" id="email" placeholder='Email-Id' value={user.email} onChange={(event) => { handleChange(event) }} />

                        <input type="password" name="password" id="password" placeholder='Password' value={user.password} onChange={(event) => { handleChange(event) }} />

                        <button type="submit">Login</button>

                    </form>

                    <Link to="/signup">Click Here To An Create Account</Link>

                </article>



            }



        </section>
    )
}
export default Login