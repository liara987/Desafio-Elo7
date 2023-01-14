import './styles.scss'

function Cover(props) { 
  return (
    <div className="cover">
      <h1 className='cover-title'>{props.title}</h1>
      <img className='cover-image' src={props.image} alt={props.imageAlt} />
    </div>
  )
}

export default Cover
