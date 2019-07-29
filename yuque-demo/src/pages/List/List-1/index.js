import React from 'react'
import { Table } from 'antd'
import { connect } from 'dva'

//简单表格的数据展示
class List extends React.Component {

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render(value) {
        return (
          <a href={value}>{value}</a>
        );
      },
    }
  ]

  componentDidMount() {
    this.props.dispatch({
      type: 'myCards/queryList',
    });
  }

  render() {
    const { cardsList, cardsLoading } = this.props;
    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardsList: state['myCards'].cardsList,
    cardsLoading: state.loading.effects['myCards/queryList'],
    //statistic: state.cards.statistic,
  };
}

export default connect(mapStateToProps)(List);