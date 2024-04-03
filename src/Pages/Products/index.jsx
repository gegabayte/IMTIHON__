import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import {PuffLoader} from 'react-spinners'
import ProductsForm from '../../components/ProductsForm';
import { useNavigate } from 'react-router-dom';
import './index.css'

function Products () {
    const navigate = useNavigate()
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
useEffect(() => {
        setLoading(true)
        fetch(`https://strapi-store-server.onrender.com/api/products`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then(data => {
                setCards(data.data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
return (
        <>

            <div className='container'>
                <ProductsForm></ProductsForm>
                <div className='section__container'>
                    {
                        loading && <PuffLoader color="#FFC94A"size={150}/>
                    }
                    {
                        !loading && cards.map((el, index) => {
                            return (
                                <Card key={index} card={el.attributes}></Card>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Products; 