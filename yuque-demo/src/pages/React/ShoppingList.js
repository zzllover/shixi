import React from 'react'
//自定义的组件必须继承React.Component这个基类，然后必须有一个render方法，给出组件的输出。
class ShoppingList extends React.Component{
    render(){
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Orange</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList;