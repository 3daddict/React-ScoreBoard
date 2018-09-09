function Application(props) {
return (
<div className="scoreboard">
  <div className="header">
    <h1>{props.title}</h1>
  </div>

  <div className="players">
    <div className="player">
      <div className="player-name">
        Michael Salvati
      </div>
      <div className="player-score">
        <div className="counter">
        <button className="counter-action decrement">-</button>
          <div className="counter-score">30</div>
          <button className="counter-action increment">+</button>
        </div>
      </div>
    </div>

    <div className="player">
      <div className="player-name">
        Scoobie Harris
      </div>
      <div className="player-score">
        <div className="counter">
          <button className="counter-action decrement">-</button>
          <div className="counter-score">20</div>
          <button className="counter-action increment">+</button>
        </div>
      </div>
    </div>

  </div>
</div>
);
}


Application.propTypes = {
  title: React.PropTypes.string,
};

Application.defaultProps = {
  title: "Scoreboard",
}
ReactDOM.render(<Application />, document.getElementById('container'));