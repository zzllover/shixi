import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Link from 'umi/link';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    <div style={{ height: '32px', background: '#cccccc', margin: '16px' }} />
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Link to="/hello">
                                <Icon type='pie-chart' />
                                <span>Hello</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
                            <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/dashboard/workplace">工作页</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"
                            title={<span><Icon type="car" /><span>React组件语法</span></span>}>
                            <Menu.Item key="5"><Link to="/react/react-props">props用法之一</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/react/react-state">state用法之一</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/react/react-controller-component">受控组件</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"
                            title={<span><Icon type="car" /><span>前端基础知识</span></span>}>
                            <Menu.Item key="8"><Link to="/basic/css-1">CSS之一</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4"
                            title={<span><Icon type="car" /><span>DVA</span></span>}>
                            <Menu.Item key="9"><Link to="/dva/card-1">Card-1</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/dva/card-2">Card-2</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/dva/card-3">Card-3</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/dva/card-4">Card-4</Link></Menu.Item>
                            <Menu.Item key="13"><Link to="/dva/card-5">Card-5</Link></Menu.Item>
                        </SubMenu>
                    </Menu>

                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>欢迎来到海贼王人物事件管理后台</Header>
                    {/*<Content>Content</Content>*/}
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 10, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;