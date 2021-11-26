import React from 'react'
import Header from '../ext/Header'
import Contents from '../ext/Contents'
import Footer from '../ext/Footer'
import './Mvp.css'

function Mvp() {
    return (
        <div id="wrap">
            {/* Header */}
            <header>
                <Header />
            </header>
            {/* /Header */}
            {/* Contents */}
            <article>
                <Contents />
            </article>
            {/* /Contents */}
            {/* Footer */}
            <footer>
                <Footer />
            </footer>
            {/* /Footer */}
        </div>
    )
}
export default Mvp