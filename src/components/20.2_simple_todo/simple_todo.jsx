import { Component } from "react";
export default class TOdo extends Component {
  // Save it to your state
  state = {
    todoList: [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
    ],
  };
  handelclick = (index) => {
    const newToDO = [...this.state.todoList];
    newToDO[index].completed = !newToDO[index].completed;
    this.setState({ todos: newToDO }); // set new state with the new array
    console.log(index);
  };
  render() {
    return (
      <>
        <h1> hi from todo Class </h1>
        {this.state.todoList.map((todo, index) => (
          <div key={index} onClick={() => this.handelclick(index)}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.name}
            </span>
            {todo.completed ? (
              <span> &nbsp; &nbsp; done </span>
            ) : (
              <span> &nbsp; &nbsp; not done yet </span>
            )}
          </div>
        ))}
      </>
    );
  }
}
