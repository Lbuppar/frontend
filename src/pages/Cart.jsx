
import { useContext } from "react"
import { GlobalContext } from "../context";
import axios from 'axios'
import { URL } from "../App";

const Cart = () => {

    const { isLogin, setIsLogin } = useContext(GlobalContext);

    const handleRemove = async (orderId) => {

        let updatedUser = await axios.put(`${URL}/user/${isLogin._id}/order/${orderId}`);

        setIsLogin(updatedUser.data);
    }



    if (isLogin) {

        return (

            <section className="cart">
                <div className="one">
                    <table>

                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Take Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {


                                isLogin?.orders?.map((order, index) => {

                                    const { _id, image, name, price } = order;

                                    return <tr key={index + 1}>
                                        <td>
                                            <img src={image} alt={image} />
                                        </td>
                                        <td>{name}</td>
                                        <td>{price}</td>

                                        <td className="remove">
                                            <button type="button" onClick={() => { handleRemove(_id) }}>Remove</button>
                                        </td>

                                    </tr>

                                })
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th> {isLogin?.orders?.length} Items</th>
                                <th>Price {

                                    isLogin.orders.map((order) => {

                                        return order.price.split("").filter((char) => {

                                            return /[0-9]/.test(char)


                                        }).join("")


                                    }).reduce((pv, cv) => {

                                        return pv + Number(cv)
                                    }, 0)



                                }</th>

                                <th>
                                    <button className="order" type="button" onClick={() => {

                                        alert("Sorry, your orders will never be placed because this website was created for learning purposes")
                                    }}>Place Order</button>
                                </th>
                            </tr>
                        </tfoot>

                    </table >

                </div>


            </section >)
    } else {
        return (
            <section className="no-cart">

                <p>
                    Please Login To See Your Cart Items
                </p>

            </section >
        )
    }

}

export default Cart

