import { useEffect, useState } from "react"


function Items(){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=30")
        .then((res) =>{
            if(!res.ok){
                throw new Error("Cannot fetch data")
            }
            return res.json()
        })
        .then((res) => {
            setData(res)
            setLoading(false)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])

    if(loading){
        return <div>Loading ...</div>
    }

    return(
        <div>
            {data.products.map((item, index) =>
                <div>
                    <img src={item.images} alt={item.images} />
                    <p>{item.description}</p>
                    {/* <button onClick={() => addToCart(item.id)}>Add item to cart</button> */}
                </div>
            )}
        </div>
    )
}

export default Items