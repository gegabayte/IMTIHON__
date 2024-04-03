import { NavLink ,useNavigate} from "react-router-dom"
import { useTranslation } from "react-i18next";
import { useState, useContext, useEffect } from "react"
import { ThemeContext } from "../../App";
import styles from './index.module.css'

function Header() {
  const [t, i18n] = useTranslation();
  const [lang , setLang] = useState('uz')
  const [bars , setBars] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      i18n.changeLanguage(localStorage.getItem('lang'))
      setLang(localStorage.getItem('lang'))
    } else {
      i18n.changeLanguage('uz')
      setLang('uz')
    }
  }, [])

  function handleHome () {
    navigate('/')
  }

  const dataTheme = useContext(ThemeContext)

  const navigate = useNavigate();

  function handleChangeTheme (e) {
    dataTheme.setTheme(e.target.value)
    localStorage.setItem('theme', e.target.value)
  }
  function handleCart () {
    navigate('/cart')
  }

  function handleBar () {
    setBars(!bars);
  }
  function handleChangeLang (e) {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang', e.target.value);
  }
  return (
    <>
      <header className={styles.heade_r}>
        <div className={styles.header__block1}>
          <h1 onClick={handleHome}><a className={dataTheme.theme == 'light' ? styles.logo: styles.logoDark} href="#">C</a></h1>
        </div>
        <div className={styles.header__barr}>
          <span className={dataTheme.theme == 'light' ? styles.bar : styles.barDark} onClick={handleBar}><i class="fa-solid fa-bars-staggered"></i></span>
        </div>
        <div className={styles.header__block2}>
          <NavLink to='/' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('home')}</NavLink>
          <NavLink to='/about' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('about')}</NavLink>
          <NavLink to='/products' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('products')}</NavLink>
          <NavLink to='/cart' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('cart')}</NavLink>
        </div>
        <div className={bars ? dataTheme.theme == 'light' ? styles.header__block2__responsive : styles.header__block2__responsiveDark : styles.header__block2__responsiveNone}>
          <NavLink to='/' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('home')}</NavLink>
          <NavLink to='/about' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('about')}</NavLink>
          <NavLink to='/products' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('products')}</NavLink>
          <NavLink to='/cart' className={dataTheme.theme == 'light' ? styles.href: styles.hrefl}>{t('cart')}</NavLink>
        </div>
        <div className={styles.header__block3}>
          <select className={dataTheme.theme == 'light' ? styles.select : styles.selectDark}  value = {dataTheme.theme} onChange={handleChangeTheme}>
            <option value="light">{t('light')}</option>
            <option value="dark">{t('dark')}</option>
          </select>
          <select value={lang} onChange={handleChangeLang} className={dataTheme.theme == 'light' ? styles.select : styles.selectDark}>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
          <a onClick={handleCart} className={dataTheme.theme == 'light' ? styles.shop: styles.shopDark} href="#"><i className="fa-solid fa-cart-shopping"></i><span className={dataTheme.theme == 'light' ? styles.one : styles.oneDark}>1</span></a>
        </div>
      </header>
    </>
  )
}

export default Header