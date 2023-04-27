import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';
import { Leaderboard } from '@/components';
import { useSelector } from 'react-redux';
import TaskCard from '@/components/TaskCard/taskCard';
import { initialDataSelector } from '@/store/initialData/reducer';
import Progress from '@/components/Progress/Progress';
import Achieves from '@/components/Achieves/Achieves';

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { journey } = router.query;
  const { initialData } = useSelector(initialDataSelector);
  const tasksByJourney = initialData[journey]?.tasks;

  return (
    <div {...props}>
      {currentPage.includes('task') ? (
        <>
          {(tasksByJourney &&
            Object.entries(tasksByJourney).map(([key, task]) => (
              <TaskCard
                key={key}
                taskName={key}
                journeyName={journey}
                {...task}
              />
            ))) || <p>No tasks found</p>}
        </>
      ) : (
        <>
          <Progress />
          <Achieves />
          <Leaderboard />
        </>
      )}
    </div>
  );
};
export default Sidebar;
