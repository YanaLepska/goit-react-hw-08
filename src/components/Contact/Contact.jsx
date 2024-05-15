import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import spriteUrl from "../../assets/symbol-defs.svg"
import { FaUserAstronaut } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImBin } from "react-icons/im";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactCard}>
      <div>
        <p className={css.contactName}>
          <FaUserAstronaut color="#d3c7ed" size={20} />
          {" "}
          {contact.name}
        </p>
        <p className={css.contactNumber}>
          <FaPhone color="#d3c7ed" size={20} />{" "}{contact.number}</p>
      </div>
      <div>
        <button className={css.contactDelete} onClick={onDeleteContact}>
         <ImBin color=" #da699c" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
