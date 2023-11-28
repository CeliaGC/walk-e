import "../cell/Cell.css"


const Cell = ({id, className, text}) => {
   

    return(
        <div id={id} className={className}>
            <p className="cell-coordenates">{text}</p>
            </div>
    )
}

export default Cell