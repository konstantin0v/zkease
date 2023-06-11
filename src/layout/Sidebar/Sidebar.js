import { useRouter } from "next/router";
import { Achieves, Leaderboard, Progress } from "@/components";

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { journey } = router.query;
  return (
    <>
      {!currentPage.includes("task") && currentPage != "/" && (
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
