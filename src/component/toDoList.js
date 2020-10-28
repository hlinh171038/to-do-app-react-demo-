import React, {Component} from 'react';
import './toDoList.css';
import classnames from 'classnames';
import Check from '../images/check.svg';
import CheckComplete from '../images/check-complete.svg';

class ToDoList extends Component {
    constructor(props){
        super(props);
    }
  
    render(){
        var url = Check;
        if(this.props.item.isComplete){
            url=CheckComplete;
        }
        return(
            <div className={classnames("ToDoList", {
                "isComplete":this.props.item.isComplete
               
            })}>
                <img onClick={this.props.onClick}  src={url} width={32}/>
                <p className={classnames({ "text":this.props.item.isComplete})}>{this.props.item.title}</p>
            </div>
        )
    }

}
export default ToDoList