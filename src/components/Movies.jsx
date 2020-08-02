import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies
  };

  render() {
    return (
      <React.Fragment>
        {this.state.movies().length >= 1 ? (
          <div>
            <h5 className="mb-4">
              Showing {this.state.movies().length} Movies in the database
            </h5>

            <table className="mt-3 table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies().map(mov => (
                  <tr key={mov._id}>
                    <td>{mov.title}</td>
                    <td>{mov.genre["name"]}</td>
                    <td>{mov.numberInStock}</td>
                    <td>{mov.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleDelete(mov._id);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h5 className="mb-4">They are no movies in the database</h5>
        )}
      </React.Fragment>
    );
  }
  handleDelete = id => {
    const deleteMov = deleteMovie(id);
    this.setState(deleteMov);
  };
}

export default Movies;
