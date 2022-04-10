import React from "react";
import ReactDom from "react-dom";
import profile1 from './images/photo1.jpeg';
import profile2 from './images/photo2.jpeg';
import profile3 from './images/photo3.jpeg';



const App = () => {

    return (
        <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile1} alt="proile picture" />
                </a>
                <div className="content">
                    <a href="/ " className="author">
                        Sarah
                    </a>

                    <div className="metadata">
                        <span className="Date">Today at 5:00 PM</span>
                    </div>
                    <div className="text">
                        It's amazing
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile2} alt="proile picture" />
                </a>
                <div className="content">
                    <a href="/ " className="author">
                        John
                    </a>

                    <div className="metadata">
                        <span className="Date">Today at 5:00 PM</span>
                    </div>
                    <div className="text">
                     da ramana..
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile3} alt="proile picture" />
                </a>
                <div className="content">
                    <a href="/ " className="author">
                        Ramanan
                    </a>

                    <div className="metadata">
                        <span className="Date">Today at 8:00 PM</span>
                    </div>
                    <div className="text">
                       ya boii
                    </div>
                </div>
            </div>

        </div>
    )
}

ReactDom.render(
    < App />,
    document.querySelector('#root')

)
