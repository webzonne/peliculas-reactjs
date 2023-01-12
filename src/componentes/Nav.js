import React from 'react'
import logo from '../img/logo.png'
import style from '../componentes/styles/Nav.module.css'
import BuscarPeliculasNav from './BuscarPeliculasNav'
export default function Nav() {
    return (
        <div>
            <div className={style.contentNav}>
                <div className='row'>
                    <div className={style.subContent}>
                        <div className='col-12 text-center text-lg-start col-lg-6'>
                            <div className={style.contentImage}>
                                <img src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className={style.boxSearch}>
                                <BuscarPeliculasNav />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
