export function timeToSeconds(time: String) {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hoursToSeconds = Number(hours) * 3600;
  const minToSeconds = Number(minutes) * 60;
  return (hoursToSeconds + minToSeconds + Number(seconds));
}
