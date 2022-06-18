export default function BUtton({label, variant = 'default'}){
    return(
        <button className={variant}>{label}</button>
    )
}