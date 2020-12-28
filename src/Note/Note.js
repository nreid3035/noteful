export default function Note(props) {
    return (
        <div className="note__container" key={props.key}>
            <h3>{props.note.name}</h3>
            <p>{props.note.modified}</p>
            <button>Delete</button>
        </div>
    )
}