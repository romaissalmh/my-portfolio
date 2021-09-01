import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import '../styles/global.css'
import Navbar from './Navbar'

export default function Layout({children}) {
    return (
        <div className="layout">
             <Helmet>
                 <script src={withPrefix('script.js')} type="text/javascript" />
                 <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                 <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

             </Helmet>
             <div class="loader-wrapper">
                <span class="loader"><span class="loader-inner"></span></span>
            </div>
             <Navbar/>
             <div className="content">
                {children}
            </div>
            <footer className="footer">
            <p> Made with ♥ Copyrights 2021 @Rome.K  </p>
            </footer>
        </div>
    )
}
