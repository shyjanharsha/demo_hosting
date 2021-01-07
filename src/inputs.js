import React from 'react';
const students = [{name:"shyjan",age:"22",rollNo:"1111111"},
        			{name:"ratheesh",age:"23",rollNo:"2222222"}]
 class Input extends React.Component{
 	constructor(props){
 		super(props);
 		console.log(props)
        this.state = {
            name: ' ',
            age: ' ',
            rollNo:' '
        };
 	}
 	
 	
 	renderTableData() {
      return students.map((student, index) => {
      	// console.log(index)
      	// console.log(student)
         return (
            <tr key = {index}>
               <td>{student.name}</td>
               <td>{student.age}</td>
               <td>{student.rollNo}</td>
            </tr>
         )
      })
   }
 	renderHead()
 	{
 		let header = Object.keys(students[0])
 		// console.log(header)
 		return header.map((key,index) => {
 		return <th key={index}>{key}</th>
 		})
 	}

	render()
	{
		return(
				<div>
					<p>{this.state.name}</p>
					<p>{this.state.age}</p>
					<p>{this.state.rollNo}</p>
					<input type = "text" placeholder ="Enter the Name" />
					<input type = "text" placeholder = "Enter the Age"  />
					<input type = "text" placeholder = "Enter the RollNo" />
					<button type = "button" onClick={this.onSubmit}>click</button>
					<table>
					<thead>
						<tr>{this.renderHead()}</tr>
						</thead>
						<tbody>{this.renderTableData()}</tbody>
					</table>
				</div>
			)
	}
}
export default Input;