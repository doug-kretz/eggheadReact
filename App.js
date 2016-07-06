import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	render(){
	let txt = this.props.txt;
	return <h1>{txt}</h1>
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this i sthe default txt'
}

ReactDOM.render(
	<App txt="what" cat={5} />,
	document.getElementById('app')
	);

export default App
