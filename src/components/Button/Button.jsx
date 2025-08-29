import styles from './button.module.css'

function Button(props) {

    return(
        <button onClick={props.clickEvent}>{props.text}</button>
    )

}

export default Button