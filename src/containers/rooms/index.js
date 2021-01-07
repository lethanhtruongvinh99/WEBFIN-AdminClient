import React, { useState, useEffect } from "react";
import { Row, Typography, Layout, Spin } from "antd";
import RoomItem from "./../../components/room-item/index";
import { callServer, callServerGET } from "../../utils/NetworkUtils";

const Rooms = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listRooms, setListRooms] = useState([]);

  useEffect(()=>{
    const getListRoom = async () => {
      const response = await callServerGET(process.env.REACT_APP_HOST_NAME + '/rooms/');
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setListRooms(data.data);
      setIsLoading(false);
    }
    getListRoom();
  },[])
  return (
    <>
      <Layout.Content style={{ padding: "150px 50px", position: "relative" }}>
        <Row justify="center" align="middle">
          <Typography.Title level={2}>Đã lưu trữ</Typography.Title>
        </Row>

        <Row
          justify="center"
          align="middle"
          gutter={[30, 30]}
          style={{ margin: "30px 0px" }}
        >
          {listRooms.length > 0 ? listRooms.map(item => (<RoomItem info={item}/>)): null}
        </Row>
      </Layout.Content>
    </>
  );
};

export default Rooms;
