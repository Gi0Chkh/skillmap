import styles from './input.module.css'

function Input(props) {

    return(
        <input type={props.type} placeholder={props.placeholder}/>
    )

}

export default Input