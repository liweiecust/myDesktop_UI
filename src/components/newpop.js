// 鼠标移入自动弹出菜单，移出菜单自动消失，移出但移入菜单，菜单保持弹出状态，移出菜单，菜单消失
import React, { Component } from "react";
import "./index.css";

type EventFunc = () => {};

type Props = {
  menuList: string[];
  eventList: EventFunc[];
  btnContent: string;
};

type State = {
  showMenu: boolean;
};

export default class RightPopBtn extends Component<Props, State> {
  timeout: number | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  btnMouseEnterEvent() {
    this.setState({
      showMenu: true,
    });
  }

  btnMouseLeaveEvent() {
    // 设置延迟
    this.timeout = window.setTimeout(() => {
      this.setState({
        showMenu: false,
      });
    }, 150);
  }

  menuMouseEnterEvent() {
    clearTimeout(this.timeout!);
    this.timeout = undefined;
    this.setState({
      showMenu: true,
    });
  }

  menuMouseLeaveEvent() {
    this.setState({
      showMenu: false,
    });
  }

  render() {
    return (
      <div style={{ position: "relative", textAlign: "center" }}>
        <button
          className="base-btn"
          onMouseEnter={this.btnMouseEnterEvent.bind(this)}
          onMouseLeave={this.btnMouseLeaveEvent.bind(this)}
        >
          {this.props.btnContent}
        </button>
        {this.state.showMenu ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "100%",
              minWidth: 100,
              color: "#000000",
              backgroundColor: "#f4f4f4",
              zIndex: 10,
              textAlign: "center",
            }}
            onMouseEnter={this.menuMouseEnterEvent.bind(this)}
            onMouseLeave={this.menuMouseLeaveEvent.bind(this)}
          >
            {this.props.menuList.map((item, index) => {
              return (
                <div key={item} onClick={this.props.eventList[index]}>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

