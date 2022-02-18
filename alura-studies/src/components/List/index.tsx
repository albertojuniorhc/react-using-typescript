import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/task";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Today studies</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} selectTask={selectTask} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
