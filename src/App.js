import React, {Component} from 'react';
import './App.css';
import ToDoItem from './component/toDoList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDoList : [
        {title: 'Mua bim bim', isComplete:true},
        {title: 'washing the sweetpotato', isComplete:true},
        {title: 'typing the code', isComplete:false},
      ]
    }
  }
  onItemClick(x){
   return (event )=> {
     const isComplete = x.isComplete;
     const {toDoList} = this.state
     const index = toDoList.indexOf(x)
     this.setState({
       toDoList:[
          ...toDoList.slice(0,index),
          {
            ...x,
            isComplete: !isComplete
          },
          ...toDoList.slice(index+1)
       ]
     })
   }
    
  }
  render(){
    return(
      <div className="App">
        {this.state.toDoList.map((x,index) => 
           <ToDoItem 
           key ={index}
           item={x} 
           onClick={this.onItemClick(x)} />
        )}
      </div>
    )
  }

}
export default App

