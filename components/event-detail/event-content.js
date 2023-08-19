/* components\event-detail\event-content.js */
import classes from './event-content.module.css';

function EventContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
