import React from "react";
import ReactDom from "react-dom";
import profile1 from './images/photo1.jpeg';
import profile2 from './images/photo2.jpeg';
import profile3 from './images/photo3.jpeg';

import SingleComment from "./singleComment";
import UserCard from "./userCard";


const App = () => {

    return (
        <div className="ui comments">
            <UserCard>
            <SingleComment name='Akhil PS' date='Today at 5:00 pm' text='its amazing' picture={profile1}/>
            </UserCard>
            <UserCard>
            <SingleComment name='Ramanan' date='Today at 5:30 pm'  text='nice pic'  picture={profile2}/>  </UserCard>
            <UserCard>
            <SingleComment name='Donli' date='Today at 11:00 pm'  text='super'  picture={profile3}/>  </UserCard>


        </div>


    )
}

ReactDom.render(
    < App />,
    document.querySelector('#root')

)
