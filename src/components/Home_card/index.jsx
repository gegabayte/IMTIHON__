import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useContext, useState, useEffect} from "react"
import { ThemeContext } from '../../App'
import img1 from '../../assets/Home__imge.webp'
import img2 from '../../assets/Home__imge1.webp'
import img3 from '../../assets/Home__imge2.webp'
import img4 from '../../assets/Home__imge3.webp'
import styles from './index.module.css'

function Home_card() {
  const [t, i18n] = useTranslation();
  const [lang , setLang] = useState('uz')

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      i18n.changeLanguage(localStorage.getItem('lang'))
      setLang(localStorage.getItem('lang'))
    } else {
      i18n.changeLanguage('uz')
      setLang('uz')
    }
  }, [])
  const dataTheme = useContext(ThemeContext)

  const navigate = useNavigate();
  function handleClick () {
    navigate('/products');
  }
  return (
    <>
        <div className={styles.card}>
            <div className={styles.block1}>
                <h1  className={dataTheme.theme == 'light' ? styles.sar : styles.sr}>{t('we are changing the way people shop')}</h1>
                <p className={dataTheme.theme == 'light' ? styles.text : styles.textDark}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                <button className={dataTheme.theme == 'light'  ? styles.btn : styles.btnl} onClick={handleClick}>{t('our products')}</button>
            </div>
            <div className={styles.block2}>
                <img className={styles.img1} width={500} height={440} src={img1} alt="" />
                <img  width={500} height={440} src={img2} alt="" />
                <img width={350} height={440} src={img3} alt="" />
                <img className={styles.img2} width={350} height={440} src={img4} alt="" />
            </div>
        </div>
    </>
  )
}

export default Home_card