import { Component } from "react";
import { Button } from "reactstrap";
import noimg from "../images/noimg.jpeg";

class SingleStudent extends Component {
  handleStudentDelete = (id) => {
    const url = `https://6285fcd196bccbf32d6c8036.mockapi.io/StudentList/${id}`;

    fetch(url, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((s) => {
        this.props.updateDelMessage();
        this.props.refetchData();
      })
      .catch((err) => console.log("Something went wrong"));
  };

  render() {
    const {
      student: { id, fname, lname, age, phone, avatar },
      toggle
    } = this.props;
    const imgContent = avatar.indexOf("http") === 0 ? avatar : noimg;
    return (
      <>
        <tr>
          <td>{id}</td>
          <td className="avatar">
            <img src={imgContent} alt="" />
          </td>
          <td className="full-name">
            {fname} {lname}
          </td>
          <td>{age}</td>
          <td>{phone}</td>
          <td className="actions">
            <Button color="secondary" onClick={() => toggle(id, "info")}>
              Info
            </Button>
            <Button onClick={() => toggle(id, "edit")} color="primary">
              Edit
            </Button>
            <Button onClick={() => this.handleStudentDelete(id)} color="danger">
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  }
}

export default SingleStudent;
