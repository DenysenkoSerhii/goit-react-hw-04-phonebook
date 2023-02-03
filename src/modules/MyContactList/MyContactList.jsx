import PropTypes from "prop-types";
 
import styles from "../my-contacts.module.scss";

const MyContactList = ({ removeContact, contacts }) => {

    const contactList = contacts.map(({ id, name, number }) => <li className={styles.formContact} key={id}>{name}. : {number}.
        <button onClick={() => removeContact(id)} type="button">Delete</button></li>);

    return (
        <ol>
            {contactList}
        </ol>
    )

}

export default MyContactList;

MyContactList.defaultProps = {
    contacts: []
}

MyContactList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number:  PropTypes.string.isRequired,
    }))
}