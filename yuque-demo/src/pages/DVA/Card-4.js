import React, { Component } from 'react';
import { Card ,Button } from 'antd';
import { connect } from 'dva';

const namespace = 'cards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data4;//相当于上一级传来的数据
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      //console.log(action);
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Card_4 extends Component {
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
        <div>
          {/*如果直接写成 this.props.onClickAdd({})，就变成 render 函数执行到此处时直接调用 onClickAdd 函数了。*/}
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit111111',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}