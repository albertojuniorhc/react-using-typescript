import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00:00"
  }

  addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log('state: ', this.state )
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you wanna study?"
            value={this.state.task}
            onChange={event => this.setState({ ...this.setState, task: event.target.value })}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            value={this.state.time}
            onChange={event => this.setState({ ...this.setState, time: event.target.value })}
            required
          />
        </div>
        <Button> Add </Button>
      </form>
    );
  }
}

export default Form;
