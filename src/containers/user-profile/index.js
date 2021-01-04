import { Row, Col, Typography, Avatar, Button, Layout } from "antd";
import RoomItem from "./../../components/room-item/index";
const UserProfile = (props) => {
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
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {props.status === "Hoạt động" ? "Chặn" : "Bỏ chặn"}
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }} justify="center">
        <Col>
          <Typography.Title level={4}>
            {props.fullname ? props.fullname : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
      </Row>

      <Row justify="center">
        <Col>
          <Typography.Title level={5} style={{ fontWeight: "300" }}>
            Tham gia ngày {props.joinedAt ? props.joinedAt : "23/06/2077"}
          </Typography.Title>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }} justify="center" gutter={60}>
        <Col>
          <Row justify="center">
            <Typography.Title level={4}>Số cúp</Typography.Title>
          </Row>
          <Row justify="center">
            <Typography.Title level={4} style={{ fontWeight: "300" }}>
              {props.cups ? props.cups : "200"}
            </Typography.Title>
          </Row>
        </Col>
        <Col>
          <Row justify="center">
            <Typography.Title level={4}>Trận đã chơi</Typography.Title>
          </Row>
          <Row justify="center">
            <Typography.Title level={4} style={{ fontWeight: "300" }}>
              {props.totalMatches ? props.totalMatches : "200"}
            </Typography.Title>
          </Row>
        </Col>

        <Col>
          <Row justify="center">
            <Typography.Title level={4}>Tỉ lệ thắng</Typography.Title>
          </Row>
          <Row justify="center">
            <Typography.Title level={4} style={{ fontWeight: "300" }}>
              {props.winRate ? props.winRate : "200"}
            </Typography.Title>
          </Row>
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
