import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const { itemCount, pageSize } = this.props;
    const pagesCount = Math.ceil(itemCount / pageSize)
    if(pagesCount === 1) return null
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                page === this.props.currentPage
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a
                onClick={() => this.props.onPageChange(page)}
                className="page-link"
                href="#a"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
