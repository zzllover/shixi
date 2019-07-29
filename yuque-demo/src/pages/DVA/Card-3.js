/**

    React 中最基本的两个概念 props 和 state，
    一定知道 props 和 state 对于一个组件来讲都是数据的来源，
    而 state 又可以通过 props 传递给子组件，这像是一个鸡生蛋蛋生鸡
    的问题：到底谁是数据的源头 ？答案是 state，而且是广义的 state：
    它可以是 react 组件树中各级组件的 state，也可以是 react 组件树
    外部由其他 js 数据结构表示的 state，而 dva 管理的就是 react 组件
    树之外的 state: Redux。归根结底，props 是用来传导数据的，而 state
    是数据改变的源泉。
 */

//使用 connect 对接静态的 dva model
import React, { Component } from 'react';
import { Card /* ,Button */ } from 'antd';
import { connect } from 'dva';

const namespace = 'cards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data3;
  return {
    cardList
  };
};

//@ 装饰器语法
@connect(mapStateToProps)//connect 是连接 dva 和 React 两个平行世界的关键
export default class Card_3 extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        {/* <div>
          <Button onClick={this.addNewCard}> 添加卡片 </Button>
        </div> */}
      </div>
    );
  }
}