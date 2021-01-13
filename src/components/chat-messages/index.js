import { Avatar, Comment, Tooltip } from "antd";
import moment from "moment";
import React from "react";

const ChatMessage = (props) => {
  return (
    <Comment
      author={<a>{props.info.username}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{props.info.content}</p>}
      datetime={
        <Tooltip title={moment(props.info.isCreatedBy).format("DD-MM-YYY HH:mm:ss")}>
          <span>{moment().format("DD-MM-YYYY HH:mm:ss")}</span>
        </Tooltip>
      }
    />
  );
};

export default ChatMessage;
