import React from 'react'

export default class LikeButton extends React.Component{
    constructor(){
        super();
        this.state = {
            isLike:false
        }
    }

    handleClick(){
        this.setState({
            isLike:!this.state.isLike
        })
    }

    render(){

        const words = this.props.words || {
            likedText:'取消',
            unlikedText:'点赞'
        }
        return (
            
            <button onClick={()=>{this.handleClick()}}>
                {this.state.isLike? words.likedText:words.unlikedText}
            </button>
        )
    }
}