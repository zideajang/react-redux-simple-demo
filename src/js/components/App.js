import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'

class App extends Component{
    render(){
        const addtodoStyle = {
            marginTop:"24px"
        }
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return(
            
            <div class="container">
                <Footer/>
                <AddTodo
                    style={addtodoStyle}
                    onAddClick={text=>dispatch(addTodo(text))}
                    />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    } />
                
                
            </div>
        )
    }
}
/*const App = ()=>(
    
    <div>
        <TodoList todos={todos}/>
        <TutList tuts={tuts}/>
        <Footer/>
    </div>
)*/
function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)
