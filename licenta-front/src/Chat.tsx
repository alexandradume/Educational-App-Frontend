import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import Table from "./Table";
import { Form, FormControl, Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import "./Chat.css";
import "./ProfilePicture.css";
import Tooltip from "./Tooltip";

interface NavBarProps {
  username: string;
}

const Chat: React.FC<NavBarProps> = ({ username }) => {
  return (
    <div>
      {" "}
      <Form className="chat-input">
        <FormControl type="text" placeholder="Type a message" />
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Chat;
