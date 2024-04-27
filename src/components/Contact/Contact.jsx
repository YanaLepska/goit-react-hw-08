
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css'
import { useDispatch } from 'react-redux';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  
  return (
      <div className={css.contactCard}>
          <div>
              <p className={css.contactName}>👤 {contact.name}</p>
          <p  className={css.contactNumber}>📞 {contact.number}</p>
          </div>
          <div><button className={css.contactDelete} onClick={onDeleteContact}>❌</button></div>
    </div>
  )
}

export default Contact