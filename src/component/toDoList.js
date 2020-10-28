import React, {Component} from 'react';
import './toDoList.css';
import classnames from 'classnames';
class ToDoList extends Component {
    constructor(props){
        super(props);
    }
  
    render(){
        return(
            <div onClick={this.props.onClick} className={classnames("ToDoList", {
                "isComplete":this.props.item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }

}
export default ToDoList