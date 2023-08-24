import useFetch from "./useFetch"
import { Link, Outlet, Routes } from "react-router-dom"

export default function Store({ handleAuth, handleAddCart }) {


    const DATA_URL = 'https://dummyjson.com/products'
    const data = useFetch(DATA_URL)



    return <>
        <div className="store" onClick={e => handleAuth(e)}>
            {data ?
                Object.keys(data.products).map((product, i) => (
                    <div key={product} className="product-quickview" >
                        {/*id, brand, title, thumbnail, stock, rating, price, description, discountPercentage, images, category */}
                        <Link to={'./' + data["products"][i].title} state={data["products"][i]}>
                            <img className="img-qv" src={`${data['products'][i].thumbnail}`} />
                        </Link>
                        <Outlet context={{ item : data["products"][i].id}} />
                        <div className="title-qv">{data["products"][i].title}</div>
                        <div className="discount-container">
                            <div className="price-qv">{data["products"][i].price}€</div>
                            <div className="disc-qv">-{(data["products"][i].discountPercentage).toFixed()}%</div>
                        </div>
                        <div className="disc-price-qv">{(data["products"][i].price - (((data["products"][i].price) * data["products"][i].discountPercentage) / 100)).toFixed(2)}€</div>
                        <div className="stock-qv">{data["products"][i].stock < 10 ? "only " + `${data["products"][i].stock}` + " available !" : null}</div>
                        <button className="add-cart-button" onClick={() => { handleAddCart(data["products"][i]) }}>Add to cart</button>
                        

                    </div>
                ))

                : null
            }
        </div>
    </>
}
