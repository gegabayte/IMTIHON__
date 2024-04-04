import img from '../../assets/error.jpg'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../App';
import './index.css'

function Data() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dataTheme = useContext(ThemeContext);


  useEffect(() => {
    if (id) {
      fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data.data.attributes);
          setProduct(data.data.attributes)
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
      
      <div className='containerr'>
      <div className="block1">
        <img width={480} height={300} src={product.image} alt="" />
      </div>
      <div className="block2">
        <h1 className={dataTheme.theme == 'light' ? 'texth1' : 'texth1Dark' }>{product.company}</h1>
        <span>Modenza</span>
        <h6 className={dataTheme.theme == 'light' ? 'price' : 'priceDark'}>${product.price}</h6>
        <p className={dataTheme.theme == 'light' ? 'desc' : 'descDark'}>{product.description}</p>
        <div className="colors">
        <p className={dataTheme.theme == 'light' ? 'color' : 'colorDark'}>colors</p> <br />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <label className={dataTheme.theme == 'light' ? 'label' : 'labelDark'} htmlFor="select" >Amount</label> <br />
        <select id="select">

          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
          <option value="">13</option>
          <option value="">14</option>
          <option value="">15</option>
          <option value="">16</option>
          <option value="">17</option>
          <option value="">18</option>
          <option value="">19</option>
          <option value="">20</option>
        </select>
        <br />
        <button className='btn'>ADD TO BAG</button>
      </div>
    </div>
    </>
  )
}

export default Data