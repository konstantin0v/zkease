import SidebarJourney from '../SidebarJourney/SidebarJourney';
import TaskCard from '../TaskCard/taskCard';
import styles from './SidebarTasks.module.css';

const SidebarTasks = ({ data, journey, ...props }) => {
  return (
    <div className={styles.box}>
      <SidebarJourney />
      {(data &&
        Object.entries(data).map(([key, task]) => (
          <TaskCard
            key={key}
            taskName={key}
            journeyName={journey}
            sidebar
            {...task}
          />
        ))) || <p>No tasks found</p>}
    </div>
  );
};

export default SidebarTasks;
