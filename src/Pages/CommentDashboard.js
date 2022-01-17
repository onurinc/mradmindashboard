import React, { Component } from "react";
import axios from "axios";
// import "./Styling/CommentsDashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faGlassWhiskey,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = `https://localhost:4443/api/Comments/`;

class CommentDashBoard extends Component {
  state = {
    data: [],
    insertComment: false,
    commentDelete: false,
    form: {
      userId: "",
      movieId: "",
      body: "",
    },
  };

  commentsGet = () => {
    axios.get(url).then((response) => {
      this.setState({ data: response.data });
      console.log(response.data);
    });
  };

  commentsPost = async () => {
    delete this.state.form.id;
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.insertComment();
        this.commentsGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  insertCommment = () => {
    this.setState({ insertCommment: !this.state.insertCommment });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  commentDelete = () =>
    axios.delete(url + this.state.form.commentId).then((response) => {
      this.setState({ commentDelete: false });
      this.commentsGet();
    });

  componentDidMount() {
    this.commentsGet();
  }

  commentToSelect = (comment) => {
    this.setState({
      form: {
        commentId: comment.commentId,
        userId: comment.userId,
        movieId: comment.movieId,
        body: comment.body,
      },
    });
  };

  render() {
    // const { form } = this.state;
    const { form } = this.state;
    return (
      <div className="App">
        <h1>Comments Admin Dashboard</h1>
        {/* <button
          className="btn btn-success"
          onClick={() => {
            this.insertComment();
          }}
        >
          Add comment
        </button> */}
        <table className="table ">
          <thead>
            <tr>
              <th>Comment Guid</th>
              <th>User Guid</th>
              <th>Move Id</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((comments) => {
              return (
                <tr>
                  <td>{comments.commentId}</td>
                  <td>{comments.userId}</td>
                  <td>{comments.movieId}</td>
                  <td>{comments.body}</td>
                  <td>
                    {/* <button className="btn btn-primary">
                      <FontAwesomeIcon icon={faEdit} />
                    </button> */}
                    <button className="btn btn-danger">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => {
                          this.commentToSelect(comments);
                          this.setState({ commentDelete: true });
                        }}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal isOpen={this.state.insertComment}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right" }}
              onClick={() => this.insertComment()}
            >
              x
            </span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              {/* <label htmlFor="commentId">Comment Guid</label>
              <input
                className="form-control"
                type="text"
                name="commentId"
                id="commentId"
                onChange={this.handleChange}
                value={form.commentId}
              />
              <br /> */}

              <label htmlFor="userId">User Guid</label>
              <input
                className="form-control"
                type="text"
                name="userId"
                id="userId"
                onChange={this.handleChange}
                value={form.userId}
              />
              <br />

              <label htmlFor="movieId">Movie Id</label>
              <input
                className="form-control"
                type="text"
                name="movieId"
                id="movieId"
                onChange={this.handleChange}
                value={form.movieId}
              />
              <br />

              <label htmlFor="body">Body</label>
              <input
                className="form-control"
                type="text"
                name="body"
                id="body"
                onChange={this.handleChange}
                value={form.body}
              />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-succes"
              onClick={() => this.commentsPost}
            >
              Insert
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.insertComment()}
            >
              Cancel
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.commentDelete}>
          <ModalBody>
            Are you sure you want to delete this comment{" "}
            {form && form.commentId}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.commentDelete()}
            >
              Yes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => this.setState({ commentDelete: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default CommentDashBoard;
