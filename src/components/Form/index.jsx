import React, { useState } from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { onAddContact } from "../../redux/contactsActions";

const Form = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    event.target.name === "name"
      ? setName(event.target.value)
      : setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !number) {
      return;
    }
    props.onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div className={styles["form-wrapper"]}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="name.."
          value={name}
          onChange={handleInputChange}
        />
        <label>Number</label>
        <input
          className={styles.input}
          type="number"
          name="number"
          placeholder="number.."
          value={number}
          onChange={handleInputChange}
        />
        <button className={styles.button}>Add contact</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
