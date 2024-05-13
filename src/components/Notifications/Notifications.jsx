import css from "./Notifications.module.css";

export function Notification() {
  return (
    <div>
      <p className={css.noFeedback}>No feedback given</p>
    </div>
  );
}
export default Notification;