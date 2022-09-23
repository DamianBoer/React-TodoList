import React, {Component} from "react";
import './App.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[] 
    }
  }


  updateInput(key, value){

    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem(){
    // create item with unique ID

    const newItem ={
      id: 1 + Math.random(),
      value : this.state.newItem.slice()
    };


    // copy of list items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem)

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id){
    // copy of list
    const list = [...this.state.list]

    const updaetList = list.filter(item => item.id !== id)

    this.setState({list:updaetList})
  }

  render(){
    return(

      <div>
        
        <h1 className="app-title">TODO LIST</h1>

          <div className="contaienr">
              <div
                        style={{
                          padding: 30,
                          textAlign: "center",
                          maxWidth: 500,
                          margin: "auto"
                        }}
              >
                Add an Item
                  <br/>
                      <input
                      className="input"
                      type="text"
                      placeholder="Type item here"
                      value={this.state.newItem}
                      onChange={e => this.updateInput("newItem", e.target.value)}
                      />
                      &ensp;
                      <button 
                      className="add-btn btn-floating"
                      onClick={() => this.addItem()}>
                        <i className="add-icon"> + </i>
                      </button>

                      <br /> <br />

                      <ul>
                        {this.state.list.map(item => {
                          return (
                            <li key = {item.id}>
                              {item.value}
                              <button 
                              className="btn btn-floating"
                              onClick={() => this.deleteItem(item.id)}>
                                X
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                </div>
          </div>
        </div>
    );
  }
}

export default App;
