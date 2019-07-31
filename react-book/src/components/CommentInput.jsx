import React from 'react'
import './commentInput.scss'

export default class CommentInput extends React.Component{

    constructor(){
        super();
        this.state = {
            name:'',
            comment:''
        }
    }

    handleName(e){
        this.setState({
            name:e.target.value
        })
    }

    handleComment(e){
        this.setState({
            comment:e.target.value
        })
    }

    render(){
        return (
            <div className='comment-input'>
                <div className='comment-item'>
                    <span className='comment-text'>用户名:</span>
                    <input className='comment-user' value={this.state.name} onChange={(e)=>{this.handleName(e)}} />
                </div>
                <div className='comment-item'>
                    <span className='comment-text'>评价:</span>
                    <textarea className='comment-content' value={this.state.comment} onChange={(e)=>{this.handleComment(e)}}/>
                </div>
                <div class='btn'>
                    <button>发表评论</button>
                </div>
            </div>
        )
    }
}