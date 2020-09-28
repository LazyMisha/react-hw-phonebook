import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import ContactItem from "../ContactItem";
import { onDeleteContact } from "../../redux/contactsActions";

const ContactList = ({ items, filters, onDeleteContact }) => {
  const filteredItems = items.filter((filterItem) =>
    filterItem.name.toLowerCase().includes(filters.toLowerCase())
  );

  const list = filteredItems.map((item) => (
    <ContactItem key={item.id} item={item} onDeleteContact={onDeleteContact} />
  ));

  return list.length > 0 ? (
    <ul className={styles.contacts}>{list}</ul>
  ) : (
    <div className={styles.contacts}>No contacts found</div>
  );
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
  filters: state.contacts.filters,
});

const mapDispatchToProps = {
  onDeleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
