import React, { Component } from "react";
import axios from "axios";
// import "./Styling/ReviewsDashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faGlassWhiskey,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = `https://localhost:4443/api/Reviews/`;

class ReviewsDashboard extends Component {
  state = {
    data: [],
    reviewDelete: false,
    form: {
      userId: "",
      movieId: "",
      body: "",
      rating: "",
    },
  };

  reviewToSelect = (review) => {
    this.setState({
      form: {
        reviewId: review.reviewId,
        userId: review.userId,
        movieId: review.movieId,
        body: review.body,
        review: review.rating,
      },
    });
  };

  reviewDelete = () =>
    axios.delete(url + this.state.form.reviewId).then((response) => {
      this.setState({ reviewDelete: false });
      this.reviewsGet();
    });

  reviewsGet = () => {
    axios.get(url).then((response) => {
      this.setState({ data: response.data });
      console.log(response.data);
    });
  };

  componentDidMount() {
    this.reviewsGet();
  }

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

  render() {
    const { form } = this.state;
    return (
      <div className="ReviewsDashboard">
        <h1>Reviews Admin Dashboard</h1>
        <table className="table ">
          <thead>
            <tr>
              <th>Review Guid</th>
              <th>User Guid</th>
              <th>Move Id</th>
              <th>Body</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((reviews) => {
              return (
                <tr>
                  <td>{reviews.reviewId}</td>
                  <td>{reviews.userId}</td>
                  <td>{reviews.movieId}</td>
                  <td>{reviews.body}</td>
                  <td>{reviews.rating}</td>
                  <td>
                    {/* <button className="btn btn-primary">
                      <FontAwesomeIcon icon={faEdit} />
                    </button> */}
                    <button className="btn btn-danger">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => {
                          this.reviewToSelect(reviews);
                          this.setState({ reviewDelete: true });
                        }}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal isOpen={this.state.reviewDelete}>
          <ModalBody>
            Are you sure you want to delete this review {form && form.reviewId}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={() => this.reviewDelete()}
            >
              Yes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => this.setState({ reviewDelete: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ReviewsDashboard;
