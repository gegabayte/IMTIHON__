import { useContext , useState , useEffect} from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../App";

import styles from "./index.module.css";
function ProductsForm() {
    const dataTheme = useContext(ThemeContext)
    const [t, i18n] = useTranslation();
    const [lang , setLang] = useState('uz');

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
            <div className={dataTheme.theme == "light" ? styles.filter : styles.filterDark }>
                <div className={styles.filter_top}>
                    <div className={styles.filter_search}>
                        <label htmlFor="search" className={dataTheme.theme == 'light' ? styles.label : styles.labelDark}>search</label>
                        <input type="text" id="search" className={styles.search_input} />
                    </div>
                    <div className={styles.filter_top_select}>
                        <label  htmlFor="in"  className={dataTheme.theme == 'light' ? styles.label : styles.labelDark}>category</label>
                        <select id="in">
                            <option value="all">all</option>
                            <option value="tables">tables</option>
                            <option value="chairs">chairs"</option>
                            <option value="kids">kids</option>
                            <option value="sofas">sofas</option>
                            <option value="beds">beds</option>
                        </select>
                    </div>
                    <div className={styles.filter_top_select}>
                        <label className={dataTheme.theme == 'light' ? styles.label : styles.labelDark}>company</label>
                        <select>
                            <option value="all">all</option>
                            <option value="modenza">Modenza</option>
                            <option value="luxora">Luxora</option>
                            <option value="artifex">Artifex</option>
                            <option value="comfora">Comfora</option>
                            <option value="homestead">Homestead</option>
                        </select>
                    </div>

                    <div className={styles.filter_top_select}>
                        <label  className={dataTheme.theme == 'light' ? styles.label : styles.labelDark}>sort</label>
                        <select>
                            <option value="all">all</option>
                            <option value="a-z">a-z</option>
                            <option value="z-a">z-a</option>
                            <option value="high">high</option>
                            <option value="low">low</option>
                        </select>
                    </div>
                </div>

                <div className={styles.filter_buttom}>
                    <div className={styles.sum}>
                        <label  className={dataTheme.theme == 'light' ? styles.label : styles.labelDark}>price</label>
                        <input type="range" className="form-range" />
                    </div>

                    <div className={styles.checkbox}>
                        <label  className={dataTheme.theme == 'light' ? styles.label : styles.labelDark} htmlFor="flexCheckChecked">
                            {t("free")}
                        </label>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="flexCheckChecked"
                        />
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.search}>searchBtn</button>
                        <button className={styles.reset}>reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsForm