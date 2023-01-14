import "./styles.scss";

function ColumnText(props) {
  return (
    <div className="column-text">
      <img className="column-text-icon" src={props.icon} alt={props.iconAlt} />
      <h2 className="column-text-title">{props.title}</h2>
      <p className="column-text-content">{props.text}</p>
    </div>
  );
}

export default ColumnText;
