var Links = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <a href="http://salmonofcapistrano.com/">Puppy</a>
        </li>
        <li>
          <a href="../web-tech">Back</a>
        </li>
      </ul>
    );
  }
});

var Pictures = React.createClass({
  render: function() {
    return (
      <div className="ui centered link cards">
        <Picture title={"Elephant"} url={"assets/elephant.jpg"} description={"This is an elephant"} />
        <Picture title={"Charmander"} url={"assets/charmander.png"} description={"Rawer"} />
      </div>
    );
  }
});

var Picture = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.url}/>
        </div>
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
    <Links/>,
    document.getElementById('list')
);
ReactDOM.render(
    <Pictures/>,
    document.getElementById('pictures')
);
