import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import MyContactsForm from "./MyContactsForm/MyContactsForm";
import MyContactList from "./MyContactList/MyContactList";
import MyContactsFilter from "./MyContactsFilter/MyContactsFilter";

import styles from "./my-contacts.module.scss";

const MyContacts = () => {
    const [contacts, setContacts] = useState(() => {
        const contacts = JSON.parse(localStorage.getItem("my-contacts"));
        return contacts ? contacts : [];
    });
    const [filter, setFilter] = useState("");

    useEffect(()=> {
        localStorage.setItem("my-contacts", JSON.stringify(contacts));
    }, [contacts]);

  

   const isDublicate = (name, number) => {
        const normalizedTitle = name.toLowerCase();
        const normalizedAuthor = number.toLowerCase();
        const result = contacts.find(({name, number}) => {
            return (name.toLowerCase() === normalizedTitle && number.toLowerCase() === normalizedAuthor)
        })

        return Boolean(result)
    }
    const addContact = ({ name, number }) => {
        if (isDublicate(name, number)) {
            alert(`${name}. : ${number} is already in contacts`);
            return false;
        }

        setContacts(prevContacts => {
            const newContact = {
                id: nanoid(),
                name,
                number,
                
            }
         
            return [newContact, ...prevContacts]
        })
        return true;
    }
    
       const removeContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
    }
    const handleFilter = ({ target }) => setFilter(target.value);

    const getFilteredContacts = () => {
         if(!filter) {
            return contacts;
        }
        
        const normalizedFilter = filter.toLowerCase()
        const result = contacts.filter(({name, number})=> {
            return (name.toLowerCase().includes(normalizedFilter) ||  number.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }
    const filteredContacts = getFilteredContacts();
    const isContacts = Boolean(contacts.length);
    
    return (
        <div>
               <h1>Phonebook</h1>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <h4>Add contact</h4>
                        <MyContactsForm onSubmit={addContact} />
                     </div>
                     <h2>Contacts</h2>
                    <div className={styles.block}>
                         <MyContactsFilter handleChange={handleFilter} />
                         {isContacts && <MyContactList removeContact={removeContact} contacts={filteredContacts} />}
                         {!isContacts && <p>No books in list</p>}
                     </div>
                 </div>
             </div>
        
    )
}

export default MyContacts;
// class MyContacts extends Component {

//     state = {
//         contacts: [],
//         filter: "",
//     }

//     componentDidMount() {
//         const contacts = JSON.parse(localStorage.getItem("my-contacts"));
//         if(contacts?.length) {
//             this.setState({contacts})
//         }
//     }

//     componentDidUpdate(prevProps, prevState){
     
//         const {contacts} = this.state;
//         if(prevState.contacts.length !== contacts.length) {
//            localStorage.setItem("my-contacts", JSON.stringify(contacts));
//         }
//     }

//     removeContact = (id) => {
//         this.setState(({contacts}) => {
//             const newContacts = contacts.filter(contact => contact.id !== id);
//             return {contacts: newContacts}
//         })
//     }

//     addContact = ({name, number}) => {
//         if(this.isDublicate(name, number)) {
//             alert(`${name}. : ${number} is already in contacts`); 
//             return false;
//         }

//         this.setState(prevState => {
//             const {contacts} = prevState;

//             const newContact = {
//                 id: nanoid(),
//                 name,
//                 number,
//             }

//             return {contacts: [newContact, ...contacts]}
//         })
//         return true;
//     }

//     handleFilter = ({target})=> {
//         this.setState({filter: target.value})
//     }

//     isDublicate(name, number) {
//         const normalizedTitle = name.toLowerCase();
//         const normalizedAuthor = number.toLowerCase();
//         const {contacts} = this.state;
//         const result = contacts.find(({name, number}) => {
//             return (name.toLowerCase() === normalizedTitle && number.toLowerCase() === normalizedAuthor)
//         })

//         return Boolean(result)
//     }

//     getFilteredContacts() {
//         const {filter, contacts} = this.state;
//         if(!filter) {
//             return contacts;
//         }
        
//         const normalizedFilter = filter.toLowerCase()
//         const result = contacts.filter(({name, number})=> {
//             return (name.toLowerCase().includes(normalizedFilter) ||  number.toLowerCase().includes(normalizedFilter))
//         })

//         return result;
//     }

//     render() {
//         const {addContact, removeContact, handleFilter} = this;
//         const contacts = this.getFilteredContacts();
//         const isContacts = Boolean(contacts.length);
  
//         return (
//             <div>
//                 <h1>Phonebook</h1>
//                 <div className={styles.wrapper}>
//                     <div className={styles.block}>
//                         <h4>Add contact</h4>
//                         <MyContactsForm onSubmit={addContact} />
//                     </div>
//                     <h2>Contacts</h2>
//                     <div className={styles.block}>
//                         <MyContactsFilter handleChange={handleFilter} />
//                         {isContacts && <MyContactList removeContact={removeContact} contacts={contacts} />}
//                         {!isContacts && <p>No books in list</p>}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

