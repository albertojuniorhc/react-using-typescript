import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Select a card and start the Stopwatch</p>

      <div className={style.clockWrapper}>
          <Clock />
      </div>
      <Button>Start</Button>
    </div>
  );
}
