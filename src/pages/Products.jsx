import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { URL } from "../App";
import { GlobalContext } from "../context";

const Products = () => {
    const { isLogin, setIsLogin } = useContext(GlobalContext);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let res = await axios.get(`${URL}/products`);
        setProducts(res.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])




    const addToCart = async (id) => {
        if (isLogin) {

            const newOrder = products.filter((product) => {
                return product._id === id
            })

            await axios.put(`${URL}/user/${isLogin._id}`, { newOrder });

            let result = await axios.get(`${URL}/user/${isLogin._id}`)

            setIsLogin(result.data)

        } else {
            alert("Please login to order")
        }

    }



    return (
        <section className="products">
            {
                products.map((product) => {
                    const { _id, image, name, price, description, dimensions, color } = product;

                    return (
                        <article key={_id} className='product'>
                            <img src={image} alt="" />
                            <div className="namePrice">
                                <p>{name}</p>
                                <p>{price}</p>
                            </div>

                            <p><u>Description:</u> {description}</p>

                            <p><u>Dimensions:</u> {dimensions}</p>

                            <p> <u>Color :</u> {color}</p>

                            <button type="button" onClick={() => { addToCart(_id) }}>Add to cart</button>
                        </article>
                    )

                })
            }
        </section >
    )
}
export default Products