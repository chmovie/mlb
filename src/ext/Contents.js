import React from 'react'

function Contents() {
    // 비디오 볼륨 제어 스크립트
    function sound(){
        const video = document.getElementById('vid');
        if(video.muted == true){
            video.muted = false;
            video.volume = 0.7;
            document.getElementById('volume_icon').className = "fa fa-volume-up";
        }else{
            video.muted = true;
            document.getElementById('volume_icon').className = "fa fa-volume-off";
        }
    }
    return (
        <div className="contents">
            {/* Main Video */}
            <video autoPlay loop muted="muted" id="vid">
                <source src="./images/vote_for_your_mvp.mp4" type="video/mp4"/>
                해당 브라우저는 video 태그를 지원하지 않습니다.
            </video>
            {/* Sound Controll Button */}
            <div className="sound_btn" onClick={sound}>
                <i id="volume_icon"class="fa fa-volume-off" aria-hidden="true"></i>
            </div>
            {/* /Sound Controll Button */}
            {/* /Main Video */}
        </div>
    )
}

export default Contents
