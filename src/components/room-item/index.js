import { EnterOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Image } from "antd";
import React from "react";
import "./index.css";
const { Meta } = Card;

const RoomItem = (props) => {
  const today = new Date();
  const createdDate = new Date(props.info.isCreatedAt);
  const diffTime = today - createdDate;
  const diffTimeByMin = Math.round(((diffTime % 86400000) % 3600000) / 60000);
  return (
    <Col span={4}>
      <Card
        className="room-card"
        hoverable
        cover={<Image alt="placeholder" src="/room-item.jpg" />}
        actions={[<EyeOutlined key="watch" />]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={props.info.name ? props.info.name : "Username"}
          description={
            props.info.isCreatedAt ? diffTimeByMin + " minutes ago" : "Created 5 minutes ago"
          }
        />
      </Card>
    </Col>
  );
};

export default RoomItem;
