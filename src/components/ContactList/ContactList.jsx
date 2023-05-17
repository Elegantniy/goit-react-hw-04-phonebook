import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, deleteClient } = this.props;
    return (
      <ul className={css.list}>
        {contacts.map(el => {
          return (
            <li key={el.id} className={css.listItem}>
              {el.name}: {el.number}
              <button
                type="button"
                className={css.deleteBtn}
                onClick={() => deleteClient(el.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  stateFilter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
