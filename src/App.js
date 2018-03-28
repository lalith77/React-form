import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ListItem extends Component{
  constructor(props){
    super(props);
    this.formatRestrictions = this.formatRestrictions.bind(this);
    this.restrictions= this.formatRestrictions(this.props.diet, this.props.physical, this.props.medical);
  }

  formatRestrictions(diet, physical, medical){
    var letters="";
    if(diet)
    letters+="a";
    if(physical)
    letters+="b";
    if(medical)
    letters+="c";

    return letters;
  }

  render(){
    return(
      <tr>
        <td> <button onClick={this.props.removeItem}> X</button></td>
        <td> {this.props.firstname}</td>
        <td> {this.props.lastname} </td>
        <td> {this.props.activity}</td>
        <td>{this.restrictions} </td>
      </tr>
    )
  }
}





class StudentList extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div >
        <table className="studentTable">
          <tbody className="item">
            <tr>
              <th> Remove </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Activity </th>
              <th> Restrictions </th>
            </tr>

            {
              this.props.mylist.map((item,index) =>
              <ListItem key = {index}
                firstname = {item.firstName}
                lastname = {item.lastName}
                activity = {item.selectName}
                diet = {item.dietChecked}
                physical ={item.physicalChecked}
                medical ={item.medicalChecked}
                removeItem = {() => this.props.removeItem(index)}
              />
            )
          }
        </tbody>
      </table>
    </div>

  )
}
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
    this.handleChange= this.handleChange.bind(this);
    //  this.selectChange= this.selectChange.bind(this);
    this.removeItem= this.removeItem.bind(this);

  }
  addItem(){
    var itemsCopy = this.state.items.slice()
    itemsCopy.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      selectName: this.state.selectName,
      dietChecked:  this.state.dietChecked,
      physicalChecked:  this.state.physicalChecked,
      medicalChecked: this.state.medicalChecked
    })
    this.setState({items:itemsCopy}, function(){
      console.log("After submit, the state is:"+JSON.stringify(this.state.items));
    });
    this.resetForm();
  }

  resetForm(){
    this.setState ({
      firstName: "",
      lastName: "",
      selectName: "",
      dietChecked:  "",
      physicalChecked:  "",
      medicalChecked: ""
    });
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value}, function(){
      //console.log(this.state);
    })
  }

  removeItem(index){
    var itemsCopy= this.state.items.slice();
    itemsCopy.splice(index,1);
    this.setState({items:itemsCopy});
  }

  // selectChange(event){
  //   this.setState({selectName : event.target.value});
  // }

  render() {
    //     var array =[
    //   {id: 1, activity:"Science Lab"},
    //   {id: 2, activity:"Cooking"},
    //   {id: 3, activity:"Painting"},
    //   {id: 4, activity:"Swimming"}
    // ]
    // var options= array.map( (item) => {
    // return <option key={item.id} value={item.activity}> {item.activity} </option>
    // })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Built with React</h1>
        </header>
        <div className="App-intro">
          <div id="formHeader">Fill in the form</div>
        </div>
          <form className="formelements">
            <input value={this.state.firstName} type="input" name="firstName" onChange={this.handleChange} className="boxes" placeholder="First Name"/>
            <input value={this.state.lastName} type="input" name="lastName" onChange={this.handleChange} className="boxes" placeholder="Last Name"/>
            <br/>
            <label>Select Activity</label>
            <select  name="selectName" value={this.state.selectName} onChange={this.handleChange} >
              <option value="Science Lab">Science Lab</option>
              <option value="Cooking">Cooking</option>
              <option value="Painting">Painting</option>
              <option value="Swimming">Swimming</option>
            </select>
            <br/>
            <div className="checkList">
            <label>Check all that apply: </label>
            <label>
              <input type = "checkbox" checked = {this.state.dietChecked} name="dietChecked" onChange = {this.handleChange}/>    Dietary Restricitons

            </label>
            <label>
              <input type = "checkbox" checked = {this.state.physicalChecked} name="physicalChecked" onChange = {this.handleChange}/>  Physical Disabilities
            </label>
            <label>
              <input type = "checkbox" checked = {this.state.medicalChecked} name="medicalChecked" onChange = {this.handleChange}/>  Medical Restricitons
            </label>
            </div>
            <button id="submitButton" type="button" onClick = {() => this.addItem()}>  Submit</button>
          </form>
        <StudentList mylist={this.state.items} removeItem={this.removeItem} className="listBox"/>
      </div>
    );
  }
}

export default App;
