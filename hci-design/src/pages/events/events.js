import {Col, Row, Space, Tabs} from "antd";
import SearchOutlined from "@ant-design/icons/es/icons/SearchOutlined";
import {Content} from "antd/es/layout/layout";
import './events.css'
import {useState} from "react";

export default function EventsPage(props) {

    const [tab,setTab] = useState("1")

    const {TabPane} = Tabs

    return(
        <Content style={{padding:16}}>
            <Row justify={'space-between'} align={'center'} >
                <Col>
            <div className={'title'}>
                Events
            </div>
                </Col>
                <Col>
                <SearchOutlined style={{fontSize: 24}} className={'primary'} />
                </Col>

            </Row>
            <Tabs defaultActiveKey="1" activeKey={tab} onChange={(val)=>setTab(val)}>
                <TabPane tab={<span className={'tab-text'}>Upcoming</span>} key="1" >
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab={<span className={'tab-text'}>Your Events</span>} key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </Content>
    )

}