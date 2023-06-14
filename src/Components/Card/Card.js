import './Card.css';

function Card(props) {
  return (
    <div className={"card-wrapper " +(props.selected?"selected":"")}>
      <div className={"card  top "+(props.color?props.color:"")}>
        <p className='name'>{props.name}</p>
      </div>
      <div className={"card "+(props.color?props.color:"")}>
      <p className='small left'>руб</p>
        <p className='price'>{props.price}</p>
        <p className='small right'>/мес</p>
      </div>
      <div className="card">
        <p className='desc'>{props.speed}</p>
      </div>
      <div className="card">
        <p className='desc'>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export default Card;
