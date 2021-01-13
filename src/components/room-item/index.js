import { EnterOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Image } from "antd";
import React from "react";
import moment from 'moment';
import "./index.css";
import { useHistory } from "react-router";
const { Meta } = Card;

const RoomItem = (props) => {
  // console.log(moment(props.info.isCreatedAt).startOf('day').fromNow());
  const history = useHistory();
  const handleToRoom = (roomId) => {
    history.push(`/room/${roomId}`)
  }
  return (
    <Col span={4}>
      <Card
        className="room-card"
        hoverable
        cover={<Image alt="placeholder" src="/room-item.jpg" />}
        actions={[<EyeOutlined key="watch" onClick={()=>{handleToRoom(props.info._id)}}/>]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={props.info.name ? props.info.name : "Username"}
          description={
            props.info.isCreatedAt ? moment(props.info.isCreatedAt).startOf('day').fromNow() : "Created 5 minutes ago"
          }
        />
      </Card>
    </Col>
  );
};

export default RoomItem;
