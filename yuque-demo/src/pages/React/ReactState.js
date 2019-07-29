import React from 'react'

export default class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:null,
        }
    }

    render(){
        return (
            <div>
                <h1>关于state</h1>
                <button
                    className="square"
                    onClick={()=>this.setState({value:'XXXX'})}
                >
                    {this.state.value}
                </button>
            </div>
        )
    }
}