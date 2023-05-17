import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    return (
      <>
        <input
          type="text"
          name="filter"
          className={css.input}
          value={this.props.stateFilter}
          onChange={this.props.renderOnChange}
          placeholder='Enter name'
        />
      </>
    );
  }
}

Filter.propTypes = {
  stateFilter: PropTypes.string,
  renderOnChange: PropTypes.func.isRequired,
};
