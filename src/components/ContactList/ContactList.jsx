import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from './ContactList.module.css'

const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      <ul >
        {filteredContacts && filteredContacts.length === 0 && (<li className={css.notContact}>You have not any contacts </li>)}
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
