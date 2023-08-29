import React, { Component } from "react";
import { EditOutlined } from "@ant-design/icons";
import "./Typography.css";

export class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editableStr: "This is an editable text.",
      isEditing: false,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  handleInputChange = (event) => {
    this.setState({
      editableStr: event.target.value,
    });
  };

  handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      this.setState({
        isEditing: false,
      });
    }
  };

  render() {
    const { editableStr, isEditing } = this.state;

    return (
      <div className="typography-container">
        {isEditing ? (
          <input
            className="input-text"
            type="text"
            value={editableStr}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
          />
        ) : (
          <p className="editable-text">{editableStr}</p>
        )}
        <EditOutlined className="edit-icon" onClick={this.toggleEdit} />
      </div>
    );
  }
}

export default Typography;
