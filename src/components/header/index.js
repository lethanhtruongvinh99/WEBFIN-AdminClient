import { Button, Col, PageHeader, Row, Tabs } from "antd";
import React, { useState } from "react";
import { history } from "../../history";
import "./index.css";
const { TabPane } = Tabs;

const HeaderCustom = (props) => {
  const [activeKey, setActiveKey] = useState("users");

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const logout = [
    <Button danger onClick={handleLogoutClick}>
      Logout
    </Button>,
  ];

  return (
    <div>
      <PageHeader
        className="header"
        ghost={false}
        style={{ zIndex: "1" }}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Row gutter={45} align="middle">
            <Col>
              <Tabs
                style={{ marginTop: "15px" }}
                activeKey={activeKey}
                centered
                size="large"
                onTabClick={(key) => {
                  setActiveKey(key);
                  history.push("/" + key);
                }}
              >
                <TabPane tab="Người dùng" key="users" />
                <TabPane tab="Trận đấu" key="rooms" />
              </Tabs>
            </Col>
            <Col>{logout}</Col>
          </Row>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default HeaderCustom;
