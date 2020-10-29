import React, {Component} from 'react';
import './App.css';
import ToDoItem from './component/toDoList'
import tick from './images/ticked.svg'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem:'',
      toDoList : [
        {title: 'Mua bim bim', isComplete:true},
        {title: 'washing the sweetpotato', isComplete:true},
        {title: 'typing the code', isComplete:false},
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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
  onDelete(x){
    return(event)=>{ //called whn render and return other funtion (3)
      const {toDoList} = this.state
      const index = toDoList.indexOf(x);
      console.log(index)
     toDoList.splice(index,1);
      this.setState({
        toDoList
      })
    }
  }
  onChange(event){ // onChange is called when value was changed(2)
    this.setState({
      newItem: event.target.value
    })
  }
  onKeyUp(event){
    if(event.keyCode ===13){ // if enter (event.keyCode)(1)
   let text = event.target.value; // input value when user type (1)
   if(!text){
     return;
   }
   text = text.trim();
   if(!text){
     return;
   }
   this.setState({
     newItem: '', // set it return empty(2)
    toDoList:[
      {title:text, isComplete:false},
      ...this.state.toDoList
    ]
   })
  }
  }
  
  render(){
    return(
      <div className="App">
        <div className="Header">
          <img  src ={tick} width={32} height={32} />
          <input type="text"
           placeholder="Add to do list"
          value = {this.state.newItem} // value must call with onChange(2)
          onChange = {this.onChange}
          onKeyUp={this.onKeyUp}/>
        </div>
        {this.state.toDoList.map((x,index) => 
           <ToDoItem 
           key ={index}
           item={x} 
           onClick={this.onItemClick(x)}
           onDelete={this.onDelete(x)} /> // delete (3)
        )}
      </div>
    )
  }

}
export default App

