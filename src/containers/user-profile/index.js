import { Row, Col, Typography, Avatar, Button, Layout, Spin } from "antd";
import RoomItem from "./../../components/room-item/index";
import { useState, useEffect } from "react";
import { callServer } from "./../../utils/NetworkUtils";
import { useHistory } from "react-router";
import moment from "moment";
const UserProfile = (props) => {
  const history = useHistory();
  const urlToken = history.location.pathname.split("/");
  const accountId = urlToken[urlToken.length - 1];

  const [userProfile, setUserProfile] = useState({});
  const [listHistory, setListHistory] = useState([]);
  const [isActivate, setIsActivate] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async (accountId) => {
      const result = await callServer(
        process.env.REACT_APP_HOST_NAME + "/users/profile",
        "POST",
        { accountId: accountId }
      );
      // console.log(result);
      // console.log(result.account);
      setUserProfile(result.account);
      setIsActivate(result.account.isActivate);
      // console.log(moment(result.account.isCreatedAt).format("DD-MM-YYYY"));
      // console.log(userProfile);
    };

    const fetchListHistory = async (accountId) => {
      const result = await callServer(
        process.env.REACT_APP_HOST_NAME + "/rooms/user",
        "POST",
        { accountId: accountId }
      );
      // console.log(result);
      setListHistory(result.data);
      // console.log(result.data);
      setIsLoading(false);
    };

    fetchUserProfile(accountId);

    fetchListHistory(accountId);
  }, []);

  const handleBlockButton = async (accountId) => {
    const result = await callServer(
      process.env.REACT_APP_HOST_NAME + "/users/deactivate",
      "POST",
      { accountId: accountId }
    );
    console.log(result);
    if (result.status === 200) {
      userProfile.isActivate = false;
      setIsActivate(!isActivate);
    }
  };

  const handleUnblockButton = async (accountId) => {
    const result = await callServer(
      process.env.REACT_APP_HOST_NAME + "/users/activate",
      "POST",
      { accountId: accountId }
    );
    console.log(result);
    if (result.status === 200) {
      userProfile.isActivate = true;
      setIsActivate(!isActivate);
    }
  };
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
              isActivate
                ? handleBlockButton(accountId)
                : handleUnblockButton(accountId);
              // console.log(userProfile);
              console.log(isActivate);
            }}
          >
            {isActivate ? "Chặn" : "Bỏ chặn"}
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }} justify="center" gutter={60}>
        <Col style={{ textAlign: "center" }}>
          <Typography.Title style={{ fontWeight: "300" }} level={5}>
            Họ và tên
          </Typography.Title>
          <Typography.Title level={4}>
            {userProfile.fullName ? userProfile.fullName : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Typography.Title style={{ fontWeight: "300" }} level={5}>
            Tài khoản
          </Typography.Title>
          <Typography.Title level={4}>
            {userProfile.username ? userProfile.username : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Typography.Title style={{ fontWeight: "300" }} level={5}>
            Email
          </Typography.Title>
          <Typography.Title level={4}>
            {userProfile.email ? userProfile.email : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Typography.Title style={{ fontWeight: "300" }} level={5}>
            Ngày sinh
          </Typography.Title>
          <Typography.Title level={4}>
            {userProfile.dob
              ? moment(userProfile.dob).format("DD-MM-YYYY")
              : "Phan Nhật Vinh"}
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Typography.Title style={{ fontWeight: "300" }} level={5}>
            Ngày tham gia
          </Typography.Title>
          <Typography.Title level={4}>
            {userProfile.isCreatedAt
              ? moment(userProfile.isCreatedAt).format("DD-MM-YYYY")
              : "Phan Nhật Vinh"}
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
        {isLoading ? <Spin /> : null}
        {listHistory.length > 0
          ? listHistory.map((item) => <RoomItem info={item} />)
          : null}
      </Row>
    </Layout.Content>
  );
};

export default UserProfile;
