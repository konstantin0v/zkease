import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';
import { Leaderboard } from '@/components';
import { useSelector } from 'react-redux';
import { initialDataSelector } from '@/store/initialData/reducer';
import Progress from '@/components/Progress/Progress';
import Achieves from '@/components/Achieves/Achieves';
import SidebarTasks from '@/components/SidebarTasks/SidebarTasks';

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <>
      {currentPage.includes('task') ? (
        <SidebarTasks />
      ) : (
        <div {...props}>
          <Progress />
          <Achieves />
          <Leaderboard />
        </div>
      )}
    </>
  );
};
export default Sidebar;
