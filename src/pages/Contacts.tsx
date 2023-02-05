import React, { FC } from "react";
import Address from "../components/contacts/Address/Address";
import ContactsMap from "../components/contacts/ContactsMap/ContactsMap";
import "../styles/dist/Contacts.css";

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <Address />
      <ContactsMap />
    </div>
  );
};

export default Contacts;
