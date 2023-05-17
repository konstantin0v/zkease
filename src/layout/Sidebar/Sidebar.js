import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';
import { Achieves, Leaderboard, Progress } from '@/components';

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { journey } = router.query;
  return (
    <>
      {!currentPage.includes('task') && (
        <div {...props}>
          <Progress journey={journey} />
          <Achieves />
          <Leaderboard />
        </div>
      )}
    </>
  );
};
export default Sidebar;
