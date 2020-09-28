import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import { onFilterContact } from "../../redux/contactsActions";

const Filter = ({ filters, onFilterContact }) => {
  const handleOnFilter = (event) => {
    event.preventDefault();
    onFilterContact(event.target.value);
  };

  return (
    <div className={styles["filter-wrapper"]}>
      <label>Find contacts by name</label>
      <input
        value={filters}
        className={styles.input}
        placeholder="filter by name.."
        onChange={handleOnFilter}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.contacts.filters,
});

const mapDispatchToProps = {
  onFilterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
