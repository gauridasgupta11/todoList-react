import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getStyles = () => {
        return {
            background: "lightgrey",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"  
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyles()}>
                <p>
                    <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)}/> {" "}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>x</button>
                    </p>
            </div>
        )
    }
}

//PropTypes

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

const btnStyle ={
    background: "darkred",
    color: "white",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

export default TodoItem
