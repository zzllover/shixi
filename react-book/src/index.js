// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import LikeBtn from './components/LikeButton'

class Header extends Component{
    render(){
        const s = 2;
        return (
            <div>
                { s>1? <span>{s}sss</span> :<span>ssss</span>}
                <LikeBtn words={{likedText:'取',unlikedText:'赞'}} />
            </div>
        )
    }
}

ReactDOM.render(<Header/>,document.getElementById('root'))