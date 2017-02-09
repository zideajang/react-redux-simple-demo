import React, {Component, PropTypes } from 'react'

export default class AddTodo extends Component{
    
    render(){
        const inputStyle = {
            marginBottom:"24px"
        }
        return(
            <div class="form-group">
                <input 
                    style={inputStyle}
                    class="form-control" 
                    type="text" ref='input'/>
                <button class="btn btn-primary btn-block"
                    onClick={(e) => this.handleClick(e)}
                    >添加
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}