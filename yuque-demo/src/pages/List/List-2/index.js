import React from 'react'
import { Table, Modal, Button, Form, Input } from 'antd'
import { connect } from 'dva'
import SampleChart from '../../../components/SampleCharts'

const FormItem = Form.Item;

class List_2 extends React.Component {
	state = {
		visible: false,
		statisticVisible: false,
		id: null
	}

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
		},
		{
			title: '',
			dataIndex: 'statistic',
			render: (_, { id }) => {
				return (
					<Button onClick={() => {  console.log(id); this.showStatistic(id); }}>图表</Button>
				);
			},
		},
	];

	componentDidMount() {
		console.log("触发挂载")
		this.props.dispatch({
			type: 'list2/queryList',
		});
	}

	showModal = () => {
		this.setState({ visible: true });
	};
	handleCancel = () => {
		this.setState({ visible: false, });
	}

	showStatistic = (id) => {
		this.props.dispatch({
			type: 'list2/getStatistic',
			payload: id,
		});
		this.setState({ id, statisticVisible: true });
	};

	handleStatisticCancel = () => {
		this.setState({ statisticVisible: false, });
	}

	handleOk = () => {
		const { dispatch, form: { validateFields } } = this.props;

		validateFields((err, values) => {
			if (!err) {
				dispatch({
					type: 'list2/addOne',
					payload: values,
				});
				this.setState({ visible: false });
			}
		});
	}

	render() {
		const { visible, statisticVisible, id } = this.state;
		const { cardsList, cardsLoading, form: { getFieldDecorator }, statistic } = this.props;

		return (
			<div>
				<Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />

				<Button onClick={this.showModal}>新建</Button>

				{/** 对话框 */}
				<Modal
					title="新建项"
					visible={visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<Form>
						<FormItem label="名称">
							{getFieldDecorator('name', {
								rules: [{ required: true }],
							})(
								<Input />
							)}
						</FormItem>
						<FormItem label="描述">
							{getFieldDecorator('desc')(
								<Input />
							)}
						</FormItem>
						<FormItem label="链接">
							{getFieldDecorator('url', {
								rules: [{ type: 'url' }],
							})(
								<Input />
							)}
						</FormItem>
					</Form>

				</Modal>

				<Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
					<SampleChart data={statistic[id]} />
				</Modal>
			</div>
		)
	}


}

function mapStateToProps(state) {
	//console.log(state)
	return {
		cardsList: state.list2.cardsList,
		cardsLoading: state.loading.effects['list2/queryList'],
		statistic: state.list2.statistic
	};
}

//Form.create()(List)这段代码的作用是创建一个高阶组件，为页面组件 List 提供表单所需要的内容(this.props.form)。
export default connect(mapStateToProps)(Form.create()(List_2));