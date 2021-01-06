import { Row, Col, Typography, Avatar, Button, Layout } from "antd";
import RoomItem from "./../../components/room-item/index";
import { useState, useEffect } from 'react';
import { callServer } from './../../utils/NetworkUtils';
const UserProfile = (props) =>
{
  const [userProfile, setUserProfile] = useState({});
  useEffect(() =>
  {
    const fetchUserProfile = async (accountId) =>
    {
      const result = await callServer('/users/profile', 'POST', { accountId });
      console.log(result);
      setUserProfile(result.account);
    }

    fetchUserProfile(props.match.params.id);

  }, [])
  return (
    <Layout.Content
      style={{ padding: "150px 50px", width: "100vw", overflowX: "hidden" }}
    >
      <Row style={{ marginTop: "30px" }} justify="center">
        <Col>
          <Typography.Title level={2}>Thông tin người chơi</Typography.Title>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }} justify="center">
        <Col>
          <Avatar
            size={64}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "15px" }} justify="center">
        <Col>
          <Button
            size="small"
            danger={props.status === "Hoạt động" ? true : false}
            onClick={(e) =>
            {
              e.stopPropagation();
            }}
          >
            {props.status === "Hoạt động" ? "Chặn" : "Bỏ chặn"}
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }} justify="center" gutter={60}>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Title style={{ fontWeight: '300' }} level={5}>
            Họ và tên
          </Typography.Title>
          <Typography.Title level={4}>
            {props.fullname ? props.fullname : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Title style={{ fontWeight: '300' }} level={5}>
            Tài khoản
          </Typography.Title>
          <Typography.Title level={4}>
            {props.fullname ? props.fullname : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Title style={{ fontWeight: '300' }} level={5}>
            Email
          </Typography.Title>
          <Typography.Title level={4}>
            {props.fullname ? props.fullname : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Title style={{ fontWeight: '300' }} level={5}>
            Ngày sinh
          </Typography.Title>
          <Typography.Title level={4}>
            {props.fullname ? props.fullname : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Title style={{ fontWeight: '300' }} level={5}>
            Ngày tham gia
          </Typography.Title>
          <Typography.Title level={4}>
            {props.fullname ? props.fullname : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
      </Row>


      <Row style={{ marginTop: "30px" }} justify="center">
        <Col>
          <Typography.Title level={3}>Lịch sử chơi</Typography.Title>
        </Col>
      </Row>

      <Row
        justify="center"
        align="middle"
        gutter={[30, 30]}
        style={{ margin: "30px 0px" }}
      >
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </Row>
    </Layout.Content>
  );
};

export default UserProfile;
