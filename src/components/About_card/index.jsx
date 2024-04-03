import styles from './index.module.css'
import { ThemeContext } from '../../App'
import { useContext , useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';
function About_card() {
  const dataTheme = useContext(ThemeContext);
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

  return (
    <>
      <div className={styles.card}>
        <div className={styles.Btn}>
          <h1 className={dataTheme.theme == 'light' ? styles.texth1 : styles.texth1Dark}>{t('we love')}</h1>
          <button className={dataTheme.theme == 'light' ? styles.btn : styles.btnDark}>{t('comfy')}</button>
        </div>
        <p className={dataTheme.theme == 'light' ? styles.textp : styles.textpDark}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam <br /> blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis <br /> ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique <br /> eos minima sit porro, ratione aspernatur!</p>
      </div>
    </>
  )
}

export default About_card