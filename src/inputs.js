import React from 'react';

 class Input extends React.Component{
 	constructor(props){
 		super(props);
 		console.log(this.props)
 	}
	render(){
		return(
				<div>
					<input type = 'text' class = {this.props.class} name = {this.props.name} placeholder = {this.props.placeholder} />

				</div>

			)
	}
}
export default Input;