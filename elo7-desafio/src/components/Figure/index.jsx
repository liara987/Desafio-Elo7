import "./styles.scss";

function Figure(props) {
  return (
    <div className="figure">
      <img className="figure-image" src={props.image} alt={props.imageAlt} />
    </div>
  );
}

export default Figure;
