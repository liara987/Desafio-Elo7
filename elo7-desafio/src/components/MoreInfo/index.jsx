import "./styles.scss";

function MoreInfo(props) {
  return (
    <div className="more-info">
      <hr className="more-info-line" />
      <a className="more-info-title" href={props.url}>
        {props.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#39a4b2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m13 16 4-4-4-4m-6 8 4-4-4-4"
          />
        </svg>
      </a>
    </div>
  );
}

export default MoreInfo;
