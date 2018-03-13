import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Headers(){
  var style= {
    display :"flex"
  }
  return(
    <div style={style}>
      <th> Remove </th>
      <th> First Name </th>
      <th> Last Name </th>
      <th> Activity </th>
      <th> Restrictions </th>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      selectName:"Science Lab",
      dietChecked: false,
      physicalChecked: false,
      medicalChecked:false,
      items : []
    }
  }
  render() {
    var array = ["Science Lab","Cooking","Painting","Swimming"]
  var options = array.map( (item) =>
  <option value = {item}>{item}</option>
)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Built with React</h1>
        </header>
        <p className="App-intro">
          Fill in the form
        </p>
        <form>
          First Name
          <input value={this.state.firstName} type="input" name="firstName" onChange={this.handleChange}/>
          Last Name
          <input value={this.state.lastName} type="input" name="lastName" onChange={this.handleChange} />
          Select Activity
          <select name = "selectName" value={this.state.selectName} onChange={this.handleChange}>
            {options}
          </select>
          Check all that apply:
          <span>
            <input type = "checkbox" checked = {this.state.dietChecked} name="dietChecked" onChange = {this.handleChange}/>     a) Dietary Restrictions
          </span>
          <span>
            <input type = "checkbox" checked = {this.state.physicalChecked} name="physicalChecked" onChange = {this.handleChange}/>     a) Physical Disabilities
          </span>
          <span>
            <input type = "checkbox" checked = {this.state.medicalChecked} name="medicalChecked" onChange = {this.handleChange}/>     a) Medical Restricitons
          </span>
        </form>
      </div>
    );
  }
}

export default App;
