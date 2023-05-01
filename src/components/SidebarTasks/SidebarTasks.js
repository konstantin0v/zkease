import { useSelector } from "react-redux";
import SidebarJourney from "../SidebarJourney/SidebarJourney";
import TaskCard from "../TaskCard/taskCard";
import styles from "./SidebarTasks.module.css";
import { initialDataSelector } from "@/store/initialData/reducer";
import { useRouter } from "next/router";
import Progress from "@/components/Progress/Progress";

const SidebarTasks = ({ ...props }) => {
  const router = useRouter();
  const { journey } = router.query;
  const { initialData } = useSelector(initialDataSelector);
  const tasksByJourney = initialData[journey]?.tasks;
  const journeyNick = initialData[journey]?.nick;

  return (
    <div className={styles.box}>
      <SidebarJourney journeyName={journey} journeyNick={journeyNick} />
      <Progress />
      {(tasksByJourney &&
        Object.entries(tasksByJourney).map(([key, task]) => (
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
