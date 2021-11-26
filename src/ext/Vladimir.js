import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Vladimir() {
    function votePopup(e){
        e.preventDefault();
        alert('투표해 주셔서 감사합니다.');
    }
    return (
        <div id="wrap">
            {/* Header */}
            <header>
                <Header />
            </header>
            {/* /Header */}
            {/* Vladimir */}
            <article className="vladimir">
                {/* Left Area */}
                <div className="left_area">
                    <h1>Vladimir<br/><span>Guerrero Jr.</span></h1>
                    <div className="stats_box">
                        <ul className="stats">
                            <li>GAME</li>
                            <li>161</li>
                            <li>HIT</li>
                            <li>188</li>
                            <li>HR</li>
                            <li>48</li>
                            <li>AVG</li>
                            <li>.311</li>
                            <li>RBI</li>
                            <li>111</li>
                            <li>OBP</li>
                            <li>.401</li>
                            <li>OPS</li>
                            <li>1.002</li>
                        </ul>
                    </div>
                    {/* Vote Btn & Sns */}
                    <div className="vote">
                        <button className="vote_btn" onClick={votePopup}><a href="#">VOTE</a></button>
                        <div className="sns">
                            <p><a href="https://www.instagram.com/vladdyjr27/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></p>
                            <p><a href="https://twitter.com/MLB" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></p>
                            <p><a href="https://www.youtube.com/user/MLB" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></p>
                        </div>
                    </div>
                    {/* /Vote Btn & Sns */}
                    {/* Prev Btn */}
                    <div className="prev_btn">
                        <Link to="/">Prev</Link>
                    </div>
                    {/* /Prev Btn */}
                     {/* Background Image */}
                    <img id="bg" src="./images/bluejays.png" alt="배경"/>
                     {/* /Background Image */}
                </div>
                {/* /Left Area */}
                {/* Right Area */}
                <div className="right_area">
                    <div className="player_img">
                        <img src="./images/vladimir01.jpg" alt="블라디미르"/>
                    </div>
                </div>
                {/* /Right Area */}
            </article>
            {/* /Vladimir */}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Vladimir
