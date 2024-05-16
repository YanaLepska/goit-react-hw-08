import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { FaUserAstronaut } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import EditContactModal from "../EditContactModal/EditContactModal";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  const [showEditModal, setShowEditModal] = useState(false);
  
  
  const onEditContact = () => {
    setShowEditModal(true);
  };
  
  return (
    <div className={css.contactCard}>
      <div>
        <p className={css.contactName}>
          <FaUserAstronaut color="#d3c7ed" size={20} />
          <span>{contact.name}</span>
        </p>
        <p className={css.contactNumber}>
          <FaPhone color="#d3c7ed" size={20} />
          <span>{contact.number}</span>
        </p>
      </div>
      <div className={css.contactBtnConteiner}>
        <button className={css.contactBtn} onClick={onDeleteContact}>
          <ImBin color=" #da699c" size={25} />
        </button>
        <button className={css.contactBtn} onClick={onEditContact}>
          <MdOutlineEdit color=" #da699c" size={25} />
        </button>
      </div>
      {showEditModal && (
        <EditContactModal
          contact={contact}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default Contact;
