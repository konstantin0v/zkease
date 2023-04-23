import { allTasks } from "@/consts/allTasks";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import styles from "./journeyPage.module.css";
import { limitsForMinting } from "@/consts/limitsForMinting";
import { useDispatch, useSelector } from "react-redux";
import { setNfts, zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import TaskCard from "@/components/TaskCard/taskCard";
import { handleMintNft } from "@/utils/commonFunctions";

const JourneyPage = () => {
  const router = useRouter();
  const { journey } = router.query;
  const tasksByJourney = allTasks[journey];
  const { exp } = useSelector(zkRecordSelector);
const { address: WalletAddress } = useAccount();
const dispatch = useDispatch();

const handleMintNftByPlace = async() => {
 await handleMintNft(WalletAddress, journey, setNfts, dispatch)
}

  return (
    <div>
      <h2>Tasks for {journey}</h2>
      <ul>
        {(tasksByJourney &&
          Object.keys(tasksByJourney).map((task) => (
            <li key={uuidv4()}>
              
              <TaskCard taskName={task} journey={journey} />

            </li>
          ))) || <p>No tasks found</p>}
      </ul>
      {limitsForMinting[journey] <= exp &&
        <button onClick={handleMintNftByPlace}>MINT NFT</button>
      }
    </div>
  );
};

export default JourneyPage;
