import React, { Component } from 'react';
import '../styles/SortDropdown.css';

class SortDropdown extends Component {
  state = {
    showMenu: false,
    menuStatus: 'menuClosed',
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true, menuStatus: 'menuOpen' }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false, menuStatus: 'menuClosed' }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const { sortBy, handleSortChange, handleOrderChange, order } = this.props;
    let sortByDisplay;
    let orderDescription;

    if (sortBy === 'created_at') {
      sortByDisplay = 'CREATED AT 🕒';
      orderDescription = 'newest';
      if (order === 'asc') orderDescription = 'oldest';
    } else if (sortBy === 'votes') {
      sortByDisplay = 'VOTES 🗳'
      orderDescription = 'most';
      if (order === 'asc') orderDescription = 'fewest';
    } else if (sortBy === 'comment_count') {
      sortByDisplay = 'COMMENT COUNT 💬'
      orderDescription = 'most';
      if (order === 'asc') orderDescription = 'fewest';
    }

    return (
      <>
        <div className="dropdown-label">
          Sort by...
        </div>

        <div className={`container ${this.state.menuStatus}`} onClick={this.showMenu}>
          {sortByDisplay}
          <div className={`overlay-${this.state.menuStatus}`}>

            <div class="btn-group">
              <button onClick={handleSortChange} value='created_at' id={`button-${this.props.sortBy === 'created_at'}`} index='0'>Created At 🕒</button>
              <button onClick={handleSortChange} key='2' value='votes' id={`button-${this.props.sortBy === 'votes'}`} index='1'>Votes 🗳</button>
              <button onClick={handleSortChange} key='3' value='comment_count' id={`button-${this.props.sortBy === 'comment_count'}`} index='2'>Comment Count 💬</button>
            </div>

          </div>
        </div>

        <div onClick={handleOrderChange} className={`order-arrow-container-${order}`} value='asc'><i class="fas fa-caret-down fa-2x" id={`order-arrow`}></i></div>

        <div className="order-description">{orderDescription}</div>
      </>
    );
  }
}

export default SortDropdown;