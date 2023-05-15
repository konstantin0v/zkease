import { JourneyAside } from '@/components/JourneyAside/JourneyAside';
import styles from './TaskAside.module.css';
import { Accordion } from '@/components/Accordion/Accordion';

export const TaskAside = ({ initialData, journey, path }) => {
  const tasksByJourney = initialData[journey]?.tasks;
  const journeyNick = initialData[journey]?.nick;
  const status = ['progress', 'todo', 'completed'];
  return (
    <div className={styles.box}>
      <JourneyAside journeyName={journey} journeyNick={journeyNick} />
      <div className={styles.tasklist}>
        {status.map((stat) => (
          <Accordion
            key={stat}
            type={stat}
            tasksByJourney={tasksByJourney}
            journey={journey}
            path={path}
          />
        ))}
      </div>
    </div>
  );
};
