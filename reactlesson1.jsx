// React components
//
// Function Components
// class Components
//
// Function components is the simpliest form of react component
//
// class compomnents more complex



class Button extends React.Component {
state = { counter: 0 };

handleClick = () => {
this.setState({
	counter: this.state.counter + 1

})

};

render() {
  return (
  <button onClick={this.handleClick}>{this.state.counter}</button>

  );


  }
}


ReactDOM.render(<Button />, mountNode);
