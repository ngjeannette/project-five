import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.js";

class App extends Component {
  constructor(props) {
    super(props);
    //this.state is the initial values
    this.state = {
      messages: [],
      userInput: "",
      userMessage: "",
      userName: "",
      placeHolder: "e.g. JeannetteNg5",
      color: "",
      theme: "rgb(43, 40, 45)",
      themeColor: { border: "white", chatMessage: "rgb(40, 44, 52)" },
      text: "Light Mode"
    };
    this.myRef = React.createRef();
    console.log("constructor() this.myRef", this.myRef);
  }

  componentDidMount() {
    //getting entire database.When the value changes on the database, it will get response value
    const dbRef = firebase.database().ref("messages");
    dbRef.on("value", response => {
      if (response.val() === null) {
        return;
      }
      let data = Object.values(response.val());
      this.setState(
        {
          messages: data
        },
        this.scroll
      );
      console.log(data);
    });
  }
  //handleChange it will store the information on firebase. When I'm typing, it will be added to firebase
  handleChange = e => {
    e.preventDefault();
    this.setState({ userInput: e.target.value });
  };
  handleMessageChange = e => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ userMessage: value });
  };

  handleInput = () => {
    if (this.state.name === "") {
      this.setState({ placeHolder: "Type Username" });
    } else {
      this.setState({ userName: "Message" });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        name: this.state.userInput
      },
      () => {
        this.handleInput();
      }
    );
  };

  handleSubmitMessageForm = e => {
    e.preventDefault();
    //go to database, add the this.state userinput into the database. change the userinput as blank
    const dbRef = firebase.database().ref("messages");
    dbRef.push({
      content: this.state.userMessage,
      name: this.state.userInput,
      dateCreated: new Date().toLocaleString("en-US"),
      color: this.state.color
    });
    this.setState({ userMessage: "" });
  };
  componentDidUpdate() {
    this.scroll();
  }
  scroll = () => {
    const node = this.myRef.current;
    node.scrollTop = node.scrollHeight;
  };

  handleColor = event => {
    this.setState({ color: event.target.value });
  };
  handleTheme = () => {
    this.setState(prevState =>
      prevState.theme === "white"
        ? {
            theme: "rgb(43, 40, 45)",
            themeColor: { border: "lightgray", chatMessage: "rgb(40, 44, 52)" },
            text: "Light Mode"
          }
        : {
            theme: "white",
            themeColor: { border: "lightgray", chatMessage: "#575757" },
            text: "Dark Mode"
          }
    );
  };
  render() {
    return this.state.userName === "" ? (
      <div className="firstPage">
        <div className="formContainer">
          <form
            action="submit"
            onSubmit={this.handleSubmit}
            ref={this.myRef}
            className="firstPageForm"
          >
            <h1>ChatTime</h1>
            <p>Join HackerYou Chat room</p>
            <p>Enter Username</p>
            <div className="enterUserName">
              <label htmlFor="userName" className="visuallyHidden">
                UserName
              </label>
              <input
                value={this.state.userInput}
                type="text"
                id="userName"
                placeholder={this.state.placeHolder}
                onChange={this.handleChange}
                maxLength="15"
              />
            </div>
            <p>Select Username Color</p>
            <div className="themeColorSelection">
              <label htmlFor="orange">
                <input
                  type="radio"
                  value="#f09665"
                  name="color"
                  id="orange"
                  onClick={this.handleColor}
                  required
                />
              </label>
              <label htmlFor="purple">
                <input
                  type="radio"
                  value="#ab9df2"
                  name="color"
                  id="purple"
                  onClick={this.handleColor}
                />
              </label>
              <label htmlFor="PaleVioletRed">
                <input
                  type="radio"
                  value="#ea5d86"
                  name="color"
                  id="PaleVioletRed"
                  onClick={this.handleColor}
                />
              </label>
              <label htmlFor="lightGreen">
                <input
                  type="radio"
                  value="#a9dc76"
                  name="color"
                  id="lightGreen"
                  onClick={this.handleColor}
                />
              </label>
            </div>
            <button type="submit" className="cta-1">
              <p>Let's Chat</p>
              <FontAwesomeIcon icon={faCommentAlt} />
            </button>
          </form>
        </div>
        <footer>
          <p>&copy; Jeannette Ng 2019</p>
        </footer>
      </div>
    ) : (
      <div className="App" style={{ background: this.state.theme }}>
        <Header text={this.state.userInput} color={this.state.color} />
        <button
          onClick={this.handleTheme}
          style={{ background: this.state.themeColor.border }}
          className="cta-2"
        >
          {this.state.text}
        </button>
        <div className="container">
          <div
            className="chatMessages"
            ref={this.myRef}
            style={{ border: `1px solid ${this.state.themeColor.border}` }}
          >
            {this.state.messages.map((message, i) => {
              return (
                <div className="chatmessages" key={i}>
                  <div
                    className="chat"
                    style={{ background: this.state.themeColor.chatMessage }}
                  >
                    <p className="name" style={{ color: message.color }}>
                      <div
                        className="circle"
                        style={{ background: message.color }}
                      />
                      {message.name}
                    </p>
                    <p className="content">{message.content}</p>
                    <p className="dateCreated">{message.dateCreated}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            action="submit"
            onSubmit={this.handleSubmitMessageForm}
            id="messageInputArea"
          >
            <textarea
              value={this.state.userMessage}
              type="text"
              placeholder="messages"
              onChange={this.handleMessageChange}
              id="messageInput"
              data-gramm_editor="false"
              style={{ border: `1px solid ${this.state.themeColor.border}` }}
            />
            <button
              type="submit"
              className="cta-messageInputArea"
              style={{ border: `1px solid ${this.state.themeColor.border}` }}
            >
              <FontAwesomeIcon icon={faCommentAlt} />
            </button>
          </form>
        </div>
        <footer style={{ background: this.state.color }}>
          <p>&copy; Jeannette Ng 2019</p>
        </footer>
      </div>
    );
  }
}
export default App;
