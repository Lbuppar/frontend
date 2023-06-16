import { useState } from 'react'
import axios from 'axios'
import profile from '../assets/profile.png'
import { URL } from '../App'
const SignUp = () => {

    const [message, setMessage] = useState("Create an Account")

    const [user, setUser] = useState({
        name: "", email: "", password: "", mobileNo: ""
    })


    const { name, email, password, mobileNo } = user;

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }


    const handleFocus = (event) => {

        if (event.target.name === "name") {
            setMessage("Allows Only Characters 3 To 20")
        }

        if (event.target.name === "email") {
            setMessage("Add Valid email id")
        }

        if (event.target.name === "password") {
            setMessage("Allows Num And Char 8 to 12")
        }

        if (event.target.name === "mobileNo") {
            setMessage("Allows Only 10 Number")
        }


    }

    const handleBlur = () => {
        setMessage("Create An Account")
    }



    const handleSignUp = async (event) => {

        event.preventDefault()


        const regExp = {
            regName: /^[a-zA-Z]{3,20}$/.test(name),
            regEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
            regPassword: /^[a-zA-Z0-9]{8,12}$/.test(password),
            regMobileNo: /^[0-9]{10}$/.test(mobileNo)
        }

        const { regName, regEmail, regPassword, regMobileNo } = regExp;

        let emailRes = await axios.post(`${URL}/email`, email);


        if (regName && regEmail && regPassword && regMobileNo) {

            if (emailRes.data.email !== email) {

                await axios.post(`${URL}/signup`, user);

                setMessage("Successfully You Created An Account")


                setUser({ name: "", email: "", password: "", mobileNo: "" })
            } else {
                setMessage("The email ID is already registered")
            }


        } else {
            setMessage("Fill the fields with valid data")
        }

    }





    return (
        <section className='login'>

            <img src={profile} alt="" />

            <h2>{message}</h2>

            <form onSubmit={handleSignUp}>


                <input type="text" name="name" id="name" placeholder='Name' onChange={(event) => { handleChange(event) }} value={user.name} onFocus={(event) => { handleFocus(event) }} onBlur={handleBlur} />



                <input type="email" name="email" id="email" placeholder='Email.Id' onChange={(event) => { handleChange(event) }} value={user.email} onFocus={(event) => { handleFocus(event) }} onBlur={handleBlur} />

                <input type="password" name="password" id="password" placeholder='Password' onChange={(event) => { handleChange(event) }} value={user.password} onFocus={(event) => { handleFocus(event) }} onBlur={handleBlur} />

                <input type="tel" name="mobileNo" id="mobileNo" placeholder='Mobile no' onChange={(event) => { handleChange(event) }} value={user.mobileNo} onFocus={(event) => { handleFocus(event) }} onBlur={handleBlur} />

                <button type="submit">Sign Up</button>

            </form>

        </section>
    )
}
export default SignUp