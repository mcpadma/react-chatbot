import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Icon } from "@iconify/react";
import robotIcon from "@iconify-icons/mdi/wechat";

function App() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div className="App">
      <div className="app-chatbot-container">
        <div style={{ maxWidth: "500px" }}>
          {showBot && (
            <Chatbot
              config={config}
              botAvator={
                <Icon
                  icon="bx:bot"
                  // icon={robotIcon}
                  className="app-chatbot-button-icon"
                  style={{ fontSize: "40", color: "white" }}
                />
              }
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              headerText={
                <div>
                  <span>Ask chatbot &nbsp;</span>
                  <span className="app-chatbot-close-span">
                    <a
                      className="app-chatbot-close"
                      href="#"
                      onClick={() => toggleBot((prev) => !prev)}
                    >
                      x
                    </a>
                  </span>
                </div>
              }
              placeholderText={"Type something..."}
              close="true"
            />
          )}
          <button
            className="app-chatbot-button"
            onClick={() => toggleBot((prev) => !prev)}
          >
            {/* <Tooltip
          className="app-chatbox"
          content={
            <div>
              <div className="app-chatbox">
                Chat with Sara <br />
              </div>
            </div>
          }
          direction="left"
          forceDirection
        > */}
            <div>
              {
                <Icon
                  icon="bx:bot"
                  // icon={robotIcon}
                  className="app-chatbot-button-icon"
                  style={{ fontSize: "40", color: "white" }}
                />
              }
            </div>
            {/* </Tooltip> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
