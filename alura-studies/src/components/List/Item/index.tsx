import { ITask } from "../../../types/task";
import style from "../List.module.scss";

export default function Item({ task, time, selected, finished, id }: ITask) {
  console.log('Item atual: ', { task, time, selected, finished, id })
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
