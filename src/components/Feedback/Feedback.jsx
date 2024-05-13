import PropTypes from "prop-types";
import css from "./Feedback.module.css";
export function Feedback({
  countFeedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.containerFeedback}>
      <p className={css.feedbackText}>Good: {good}</p>
      <p className={css.feedbackText}>Neutral: {neutral}</p>
      <p className={css.feedbackText}>Bad: {bad}</p>
      <p className={css.feedbackText}>Total: {totalFeedback}</p>
      <p className={css.feedbackText}>
        Positive feedback: {positiveFeedback}%
      </p>
    </div>
  );
}

Feedback.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,

  countFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
export default Feedback;