import { Table, Input, Button, Tag, Avatar, Row, Typography, Col } from "antd";
import { history } from "../../history";
import { useState, useEffect } from "react";
import { callServer} from './../../utils/NetworkUtils';
const columns = [
  {
    title: "Người dùng",
    dataIndex: "username",
    key: "username",
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
    key: "isActivate",
    dataIndex: "isActivate",
    render: (text) => (
      <>
        <Tag color={text ? "green" : "red"} key={text}>
          {text ? 'Hoạt động' : 'Bị chặn'}
        </Tag>
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Button
        danger={record.isActivate ? true : false}
        onClick={(e) =>
        {
          e.stopPropagation();
        }}
      >
        {record.isActivate ? "Chặn" : "Bỏ chặn"}
      </Button>
    ),
  },
];

const Users = (props) =>
{
  const [userList, setUsetList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() =>
  {
    const getUserList = async () =>
    {
      const result = await callServer(process.env.REACT_APP_HOST_NAME + '/users/', 'GET', {});
      console.log(result.accounts)
      setUsetList(result.accounts)
      setFilteredData(result.accounts);
    }

    getUserList();


  }, [])

  const handleFilter = async (event) =>
  {
    const value = event.target.value;
    console.log(userList);
    let newFilteredData = await userList.filter(
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
        onRow={(record, rowIndex) =>
        {
          return {
            onClick: (event) =>
            {
              history.push("/user/" + record._id);
            },
          };
        }}
      />
    </>
  );
};
export default Users;
