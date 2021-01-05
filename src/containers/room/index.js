import { Col, Row, Statistic } from "antd";
import { React, useState } from "react";
import { useHistory } from "react-router";
import ChatMessage from "../../components/chat-messages/index";
import Game from "../../components/game/index";
import Move from "./../../components/move/index";
import "./index.css";

const Room = (props) =>
{
    const token = localStorage.getItem("token");
    const [username, setUsername] = useState("");
    const [turnName, setTurnName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const history = useHistory();
    const urlToken = history.location.pathname.split("/");


    const handleClick = (i) => { };
    return (
        <div style={{ padding: "200px 50px" }}>
            <Row justify="space-between" align="middle">
                <Col span={5}>
                    <Row
                        style={{ height: "10vh" }}
                        justify="space-between"
                        align="middle"
                    >
                        <Col>
                            <Statistic title="Player turn" value="nhatvinh43" />
                        </Col>
                        <Col>
                            <Statistic title="Symbol" value="X " />
                        </Col>
                        <Col>
                            <Statistic title="Time left" value="00:15" />
                        </Col>
                    </Row>
                    <Row style={{ overflowY: "scroll", height: "60vh" }}>
                        <Move />
                        <Move />
                        <Move />
                        <Move />
                        <Move />
                        <Move />
                        <Move />
                        <Move />
                    </Row>
                </Col>

                <Col className="playing-area">
                    <Game Username={username} size={20} TurnName={turnName}></Game>
                </Col>

                <Col className="chat-box" span={6}>
                    <Row className="message-container">
                        {messages.map((item) => (
                            <ChatMessage
                                key={item.message}
                                content={item.message}
                                username={item.username}
                            />
                        ))}
                    </Row>

                </Col>
            </Row>
        </div>
    );
};

export default Room;
