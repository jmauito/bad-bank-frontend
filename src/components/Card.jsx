function Card(props) {
  return (
    <div className="card border-dark mb-3" >
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.text}</div>
      </div>
      <div className="card-footer">
        {props.footer}
      </div>
    </div>
  );
}

export default Card;