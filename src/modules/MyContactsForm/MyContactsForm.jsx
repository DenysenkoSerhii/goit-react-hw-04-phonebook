import { useState } from "react";
import PropTypes from "prop-types";

import inititalState from "./initialState";

import styles from "../my-contacts.module.scss";

const MyContactsForm = ({ onSubmit }) => {
    const [state, setState] = useState({ ...inititalState })
    
    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        setState({...inititalState});
    }

    const { name, number } = state;
    
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.formGroup}>Name</label>
                    <input
                      className={styles.formInput}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      value={name}
                      onChange={handleChange}
                      placeholder="Name"
                     />
                </div>
                <div>
                    <label className={styles.formGroup}>Number</label>
                    <input
                      className={styles.formInput}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      value={number}
                      onChange={handleChange}
                      placeholder="+38011-111-11-11"
                      />
                </div>
                <button type="submit">Add contact</button>
            </form>
        )

}

export default MyContactsForm;

MyContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
// class MyContactsForm extends Component {
//     state = {...inititalState}

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const {onSubmit} = this.props;
//         const result = onSubmit({...this.state});
//         if(result) {
//             this.reset();
//         }
//     }

//     reset() {
//         this.setState({...inititalState})
//     }

//     handleChange = ({ target }) => {
//         const { name, value } = target;
//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         const {handleChange, handleSubmit} = this;
//         const {name, number} = this.state;

//         return (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label className={styles.formGroup}>Name</label>
//                     <input
//                       className={styles.formInput}
//                       type="text"
//                       name="name"
//                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                       required
//                       value={name}
//                       onChange={handleChange}
//                       placeholder="Name"
//                      />
//                 </div>
//                 <div>
//                     <label className={styles.formGroup}>Number</label>
//                     <input
//                       className={styles.formInput}
//                       type="tel"
//                       name="number"
//                       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                       required
//                       value={number}
//                       onChange={handleChange}
//                       placeholder="+38011-111-11-11"
//                       />
//                 </div>
//                 <button type="submit">Add contact</button>
//             </form>
//         )
//     }
// }


