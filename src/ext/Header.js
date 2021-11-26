import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <h1 className="logo"><Link to="/"><img src="./images/mlb_logo.png"/></Link></h1>
            {/* Gnb */}
            <nav>
                <ul className="gnb">
                    <li><Link to="/ohtani">Shohei&nbsp;Ohtani</Link></li>
                    <li><Link to="/vladimir">Vladimir&nbsp;Guerrero&nbsp;Jr.</Link></li>
                </ul>
            </nav>
            {/* Gnb */}
        </div>
    )
}

export default Header
