import style from '../style/Button.module.css'

export default function Button({ label, onClick, type}){
    const buttonClass = `${style.button} ${type === 'operator' ? style.operator : ''}`
    return(
        <button className={buttonClass} onClick={() => onClick(label)}>
            {label}
        </button>
    )
}