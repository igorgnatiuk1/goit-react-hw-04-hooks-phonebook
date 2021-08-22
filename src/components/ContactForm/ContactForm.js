import {useState} from "react";
import styles from './ContactForm.module.css'



function ContactForm ({onSubmit}) {

const [name, setName] = useState('');
    const [number, setNumber] = useState('')


    const handleInputChahge = event =>{
        const {name, value} = event.currentTarget
        switch (name) {
            case 'name' :
                setName(value);
                break;
            case 'number' :
                setNumber(value);
                break;
            default:
                return;
        }
    }
    const handleSubmit = event => {
        event.preventDefault()
        onSubmit(name, number)
        setName ('')
        setNumber ('')
    }


        return (

            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}> Name
                    <input className={styles.input}
                           onChange={handleInputChahge}
                           value={name}
                           type="text"
                           name="name"
                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                           required
                    />
                </label>
                <label className={styles.label}> Number
                    <input className={styles.input}
                           onChange={handleInputChahge}
                           value={number}
                           type="tel"
                           name="number"
                           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                           required
                    />
                </label>
                <button type="Submit" className={styles.button}>Add</button>

            </form>
        )

}
export default ContactForm