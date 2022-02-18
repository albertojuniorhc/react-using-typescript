import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  finished,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ""} ${
        finished ? style.itemFinished : ""
      }`}
      onClick={() =>
        !finished && selectTask({
          task,
          time,
          selected,
          finished,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {finished && <span className={style.completed} aria-label="finished task"></span>}
    </li>
  );
}
