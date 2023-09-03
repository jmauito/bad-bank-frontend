function Card(props) {
  
  const setTypeAlert = () => {
    if (props.status === 'ready') return 'alert alert-primary';
    if (props.status === 'success') return 'alert alert-success';
    if (props.status === 'fail') return 'alert alert-danger';
    return 'alert-secondary'
  }

  return (
    <div className="card border-dark mb-3" >
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.text}</div>
      </div>
      <div className="card-footer">
      {props.statusMessage && 
          <div className={setTypeAlert() + " alert alert-dismissible fade show mt-2"} role="alert">
                {props.statusMessage}
          </div>}
      </div>
    </div>
  );
}

export default Card;