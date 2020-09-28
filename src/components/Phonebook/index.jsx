import React from "react";
import Header from "../Header";
import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactsList";

const Phonebook = () => {
  return (
    <div>
      <Header />
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
