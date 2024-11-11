// Main.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Main() {
    const memberName = ["준선", "채훈", "원진", "정훈", "재상", "연희", "효림", "동준", "태진", "승택"];
    const [CurrentMember, setCurrentMember] = useState(0);

    const changeMember = () => {
        setCurrentMember((prevMember) => (prevMember + 1) % memberName.length);
    };


    return (
        <div className='mainBlock'>
            <aside className='aside'>
                <a style={{ margin: 0, color: 'white' }}>Member of Web_Study</a>
                <ul className='list'>
                    <li><button className='button'>박준선</button></li>
                    <li><button className='button'>한채훈</button></li>
                    <li><button className='button'>이원진</button></li>
                    <li><button className='button'>장정훈</button></li>            <li><button className='button'>윤재상</button></li>
                    <li><button className='button'>박연희</button></li>
                    <li><button className='button'>오효림</button></li>
                    <li><button className='button'>정동준</button></li>            <li><button className='button'>박태진</button></li>
                    <li><button className='button'>오승택</button></li>
                </ul>
            </aside>
            <body className='body'>
                <h3>This is Body</h3>
            </body>
        </div>


    );
}
