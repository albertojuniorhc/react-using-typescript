import { ITask } from "../../../types/task";
import style from "../List.module.scss";

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
  console.log("Current item: ", { task, time, selected, finished, id });
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''}`}
      onClick={() =>
        selectTask({
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
    </li>
  );
}
