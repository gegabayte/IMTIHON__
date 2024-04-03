import { Route, Routes } from 'react-router-dom'
import { createContext, useState, useEffect} from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/Error'
import Header from './components/Header'
import Data from './Pages/Data'

export const ThemeContext = createContext();
import './App.css'

function App() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            setTheme(localStorage.getItem('theme'))
        }
    }, [])

    
    {
        theme == 'light' ? document.body.style.background = '#fff' : document.body.style.background = '#272935'
    }
    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <header className={theme == 'light' ? 'header' : 'headerDark'}>
                    <div className="container header__contaiener">
                        <Header></Header>
                    </div>
                </header>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/cart' element={<Cart></Cart>}></Route>
                    <Route path='/products' element={<Products></Products>}></Route>
                    <Route path='/data/:id' element={<Data></Data>}></Route>
                    <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
                </Routes>
            </ThemeContext.Provider>
        </>
    )
}

export default App 
