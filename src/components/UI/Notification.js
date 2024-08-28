import classes from "./Notification.module.css";
import { uiActions } from "../../store/ui-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(uiActions.clearNotification()); // Clear the notification
      }, 3000); // Hide notification after 3 seconds

      // Clean up the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  if (!notification) {
    return null; // Return null if there's no notification
  }

  let specialClasses = '';

  if (notification.status === 'error') {
    specialClasses = classes.error;
  }
  if (notification.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </section>
  );
};

export default Notification;