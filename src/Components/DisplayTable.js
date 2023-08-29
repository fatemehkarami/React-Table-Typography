import React, { Component } from "react";
import axios from "axios";
import "./DisplayTable.css";

export class DisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    const { data } = this.state;
    const columnNames = data.length > 0 ? Object.keys(data[0]) : [];

    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              {columnNames.map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                {columnNames.map((columnName) => (
                  <td key={columnName}>
                    {columnName === "address"
                      ? `${user.address.street}, ${user.address.city}`
                      : columnName === "geo"
                      ? `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`
                      : columnName === "company"
                      ? user.company.name
                      : user[columnName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
