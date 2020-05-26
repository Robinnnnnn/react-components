// TODO
const App = () => (
  <div>
    <h1>Robins Grocery List</h1>
    <GroceryList items={['Chicken', 'Potatoes', 'Milk']}/>
  </div>
);

const GroceryList = (props) => (
  <ul>
    {props.items.map((item, index) => <GroceryListItem item={item} key={index}/>)}
  </ul>
);


class GroceryListItem extends React.Component {

  //gets passes all props from parent function
  constructor(props){
    //binds this in a way
    super(props);

    this.state = {
      done : false
    }
  }

  handleClick()  {
    this.setState({done: !this.state.done})
  }

  render(){

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return(
      <li style={style} onClick={this.handleClick.bind(this)}>{this.props.item}</li>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'))


// <li style={style} onClick={this.handleClick.bind(this)}>{this.props.items[0]}</li>
//         <li style={style} onClick={this.handleClick.bind(this)}>{this.props.items[1]}</li>
//         <li style={style} onClick={this.handleClick.bind(this)}>{this.props.items[2]}</li>