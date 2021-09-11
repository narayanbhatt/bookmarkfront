import React from 'react'
import "./post.css"
import DehazeIcon from '@material-ui/icons/Dehaze';

export default function Post() {
    return (
        <div className="post">
            {/* <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="public/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postProfileText">
                            <span className="postProfileName">Narayan Bhatt</span>
                            <span className="isReading"> is reading</span>
                            <div className="postBookName">The Hero With A Thousand Faces</div>
                        </span>
                    </div>
                    <div className="postTopRight">
                        <DehazeIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postCenterText">A must read on mythologies</div>
                    <div className="postCenterImage">
                        <img src="public/assets/person/2.jpeg" alt="" className="postImg" />
                    </div>
                </div>
                <div className="postBottom"></div>
            </div> */}
            <img src="public/assets/person/5.jpeg" alt="" className="" />
        </div>
    )
}
