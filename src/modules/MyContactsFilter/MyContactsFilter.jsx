import PropTypes from "prop-types";

import styles from "../my-contacts.module.scss";

const MyContactsFilter = ({handleChange}) => {
    return (
        <div>
            <label className={styles.formGroup}>Find contacts by name</label>
            <input
              className={styles.formInput}
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              />
        </div>
    )
}

export default MyContactsFilter;

MyContactsFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}