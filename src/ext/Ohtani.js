import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Ohtani() {
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
            {/* Ohtani */}
            <article className="othani">
                {/* Left Area */}
                <div className="left_area">
                    <h1>Shohei<br/><span>Ohtani</span></h1>
                    <div className="stats_box">
                        <ul className="stats">
                            <li>WIN</li>
                            <li>9</li>
                            <li>ERA</li>
                            <li>3.18</li>
                            <li>HR</li>
                            <li>46</li>
                            <li>AVG</li>
                            <li>.257</li>
                            <li>RBI</li>
                            <li>100</li>
                            <li>OBP</li>
                            <li>.372</li>
                            <li>OPS</li>
                            <li>.965</li>
                        </ul>
                    </div>
                    {/* Vote Btn & Sns */}
                    <div className="vote">
                        <button className="vote_btn" onClick={votePopup}><a href="#">VOTE</a></button>
                        <div className="sns">
                            <p><a href="https://www.instagram.com/shoheiohtani/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></p>
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
                    <img id="bg" src="./images/angels.png" alt="배경"/>
                     {/* /Background Image */}
                </div>
                {/* /Left Area */}
                {/* Right Area */}
                <div className="right_area">
                    <div className="player_img">
                        <img src="./images/shohei01.jpg" alt="오타니"/>
                    </div>
                </div>
                {/* /Right Area */}
            </article>
            {/* /Ohtani */}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Ohtani
