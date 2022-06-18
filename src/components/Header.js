import { memo, useState} from "react";
import {useSite} from "../context/SiteContext";
import {useAuth} from "../context/AuthContext";

const Header = () => {
    const {theme, setTheme, language, setLanguage} = useSite()
    const {user, setUser} = useAuth()

    const loginHandle = () =>{
        setUser({
            username:'ecemöztekin',
            email:'ecemöztekin@gmail.com'
        })
    }

    const logoutHandle = () =>{
        setUser(false)
    }

    console.log(user)
    return(
        <header>
            Mevcut tema = {theme}
            <button onClick={() => setTheme( theme=> theme === 'light' ? 'dark' : 'light') }>Temayı Değiştir</button>
            <hr/>
            Mevcut dil = {language}
            <button onClick={() => setLanguage( theme=> theme === 'tr' ? 'en' : 'tr') }>Dili Değiştir</button>
            <hr/>
            {!user && <button onClick={loginHandle}>Giriş Yap</button> || user && <button onClick={logoutHandle}>Çıkış Yap</button>}
        </header>
    )
}

export default memo(Header)