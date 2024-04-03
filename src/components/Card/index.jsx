import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import styles from './index.module.css'

function Card(props) {
    { }
    const dataTheme = useContext(ThemeContext)
    const { price, image, title } = props.card;
    const { id } = props.card;
    const navigate = useNavigate();


    function handleRedirect() {
        navigate(`/data/${id}`)
    }
    return (
        <>
            <div  onClick={handleRedirect}>
                <div className={dataTheme.theme == 'light' ? styles.card : styles.cardDark}>
                    <img className={styles.cardImge} width={300} height={180} src={image} alt="" />
                    <h1 className={dataTheme.theme == 'light' ? styles.cardTitle : styles.cardTitleDark}>{title}</h1>
                    <h2 className={dataTheme.theme == 'light' ? styles.price : styles.priceDark}>${price}</h2>
                </div>
            </div>
        </>
    )
}

export default Card