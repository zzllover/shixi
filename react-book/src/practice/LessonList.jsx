import React, { Component } from 'react'
class Lesson extends Component {
    /* TODO */
    render(){
      return (
        <div onClick={()=>{console.log(`${this.props.index} - ${this.props.lesson.title}`)}}>
          <h1>{this.props.lesson.title}</h1>
          <p>{this.props.lesson.description}</p>
        </div>
        )
    }
  }
  
 export default class LessonsList extends Component {
    /* TODO */
    render(){
      return (
        <div>
          {this.props.lessons.map((item,i)=>{
            return <Lesson key={i}  lesson={item} index={i} />
          })}
        </div>
        )
    }
}
