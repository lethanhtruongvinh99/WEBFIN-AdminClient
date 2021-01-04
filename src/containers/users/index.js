import { Table, Input, Button, Tag, Avatar, Row, Typography, Col } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const columns = [
  {
    title: "Người dùng",
    dataIndex: "avatar",
    key: "avatar",
    render: () => (
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    ),
  },
  {
    title: "Họ và tên",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    render: (text) => (
      <>
        <Tag color={text === "Hoạt động" ? "green" : "red"} key={text}>
          {text}
        </Tag>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Button danger={record.status === "Hoạt động" ? true : false}>
        {record.status === "Hoạt động" ? "Chặn" : "Bỏ chặn"}
      </Button>
    ),
  },
];

const data = [
  {
    key: "1",
    fullName: "Phan Nhật Vinh",
    email: "vinh@gmail.com",
    status: "Hoạt động",
  },
  {
    key: "2",
    fullName: "Phan Nhật Vinh",
    email: "vinh@gmail.com",
    status: "Bị chặn",
  },
  {
    key: "3",
    fullName: "Phan Nhật Vinh",
    email: "vinh@gmail.com",
    status: "Bị chặn",
  },
  {
    key: "4",
    fullName: "Phan Nhật Vinh",
    email: "vinh@gmail.com",
    status: "Hoạt động",
  },
  {
    key: "5",
    fullName: "Phan Nhật Y",
    email: "vinh@gmail.com",
    status: "Hoạt động",
  },
  {
    key: "6",
    fullName: "Phan Nhật X",
    email: "vinh@gmail.com",
    status: "Hoạt động",
  },
  {
    key: "7",
    fullName: "Phan Nhật Vinh",
    email: "vinh@gmail.com",
    status: "Hoạt động",
  },
];

const Users = (props) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (event) => {
    const value = event.target.value;
    let newFilteredData = data.filter(
      (item) =>
        item.fullName.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Row justify="center" align="middle" style={{ marginTop: "100px" }}>
        <Typography.Title level={2}>Danh sách người dùng</Typography.Title>
      </Row>
      <Row
        justify="end"
        style={{ marginTop: "45px", width: "80%" }}
        align="middle"
      >
        <Col>
          <Input
            onChange={handleFilter}
            placeholder="Tìm kiếm theo tên, email"
          />
        </Col>
      </Row>
      <Table
        pagination={{
          defaultPageSize: 5,
          position: "bottomCenter",
        }}
        scroll
        style={{ width: "80%", marginTop: "15px" }}
        columns={columns}
        dataSource={filteredData}
      />
    </>
  );
};
export default Users;
