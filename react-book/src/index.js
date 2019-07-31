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

import React  from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import LessonsList from './practice/LessonList'
import CommentApp from './practice/CommentApp'

//import LikeBtn from './components/LikeButton'

// class Header extends Component{

//     handleClickOnTitle(word,e){ //不传参数
//         console.log(word,this,e.target.innerHTML)
//     }

//     render(){
//         const s = 2;
//         return (
//             <div>
//                 { s>1? <span>{s}sss</span> :<span>ssss</span>}
//                 <div>
//                      <LikeBtn words={{likedText:'取',unlikedText:'赞'}} />
//                 </div>
//                <h1 onClick={this.handleClickOnTitle.bind(this,'aaaaa')}>绑定事件监听</h1>
//             </div>
//         )
//     }
// }


// const lessons = [
//     { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//     { title: 'Lesson 2: title', description: 'Lesson 2: description' },
//     { title: 'Lesson 3: title', description: 'Lesson 3: description' },
//     { title: 'Lesson 4: title', description: 'Lesson 4: description' }
//   ];

ReactDOM.render(<CommentApp />,document.getElementById('root'))