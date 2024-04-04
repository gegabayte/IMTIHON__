import { useState, useEffect, useContext } from 'react'
import Home_card from "../../components/Home_card"
import { ThemeContext } from '../../App'
import Card from '../../components/Card'
import {PuffLoader} from 'react-spinners'
import './index.css'

function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const dataTheme = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true)
    fetch('https://strapi-store-server.onrender.com/api/products?featured=true', {
      method: 'GET'
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
      <div className='hero'>
        <div className='container hero__container'>
          <Home_card></Home_card>
          <div className="hero__block">
            <h1 className={dataTheme.theme == 'light' ? 'texth1' : 'texth1Dark'} >Featured Products</h1>
          </div>
          <div className="card__wrraper">
            {
              loading && <PuffLoader color="#FFC94A"size={150}/>
            }
            {
              !loading && cards.map((el, index) => {
                return (
                  <Card elId = {el.id}  key={index} card={el.attributes}></Card>
                )
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Home