import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './index.css'

function Data() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`https://strapi-store-server.onrender.com/api/products/${id}`,{
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.data);
          setProduct(data.data)
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      navigate("/")
    }
  }, [id])


  return (
    <>
       
    </>
  )
}

export default Data