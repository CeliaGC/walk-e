import "../cell/Cell.css"


const Cell = ({id, className, text}) => {
   

    return(
        <div id={id} className={className}>{text}</div>
    )
}

export default Cell