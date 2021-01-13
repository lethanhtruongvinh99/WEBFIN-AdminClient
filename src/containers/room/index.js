import { Col, Row, Statistic } from "antd";
import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import ChatMessage from "../../components/chat-messages/index";
import Game from "../../components/game/index";
import { callServer } from "../../utils/NetworkUtils";
import Move from "./../../components/move/index";
import "./index.css";

const Room = (props) =>
{
    // const token = localStorage.getItem("token");
    const [messages, setMessages] = useState([]);
    const roomId = props.match.params.id;
    console.log(roomId);

    useEffect(()=> {
        const getRoomDetail = async (roomId) => {
            const result = await callServer(process.env.REACT_APP_HOST_NAME + '/rooms/detail', "POST", {roomid: roomId});
            console.log(result.data.messages);
            setMessages(result.data.messages);
        }
        getRoomDetail(roomId);
    }, [])
    return (
        <div style={{ padding: "200px 50px" }}>
            <Row justify="center" align="middle">
                <Col className="chat-box" span={6}>
                    <Row id="chatBox" style={{ height: "70vh", overflowY: "scroll" }} className="message-container">
                        {messages.map((item) => (
                            <ChatMessage
                                key={item._id}
                                info={item}
                            />
                        ))}
                    </Row>

                </Col>
            </Row>
        </div>
    );
};

export default Room;
