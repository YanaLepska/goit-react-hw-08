import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import spriteUrl from "../../assets/symbol-defs.svg"

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactCard}>
      <div>
        <p className={css.contactName}>
          <svg className={css.contactSVG} width="20" height="20">
            <use href={`${spriteUrl}#icon-user`}></use>
          </svg>{" "}
          {contact.name}
        </p>
        <p className={css.contactNumber}><svg className={css.contactSVG} width="20" height="20">
            <use href={`${spriteUrl}#icon-phone`}></use>
          
          </svg> {contact.number}</p>
      </div>
      <div>
        <button className={css.contactDelete} onClick={onDeleteContact}>
          <svg className={css.contactBin} width="24" height="24">
            <use href={`${spriteUrl}#icon-bin`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;
