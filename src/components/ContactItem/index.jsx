import React from "react";
import styles from "./styles.module.scss";

const ContactItem = ({ item, onDeleteContact }) => {
  return (
    <li className={styles.contact} key={item.id}>
      <span>{item.name}</span>
      <span>{item.number}</span>
      <button onClick={() => onDeleteContact(item.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
