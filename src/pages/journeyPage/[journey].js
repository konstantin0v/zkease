import { useRouter } from "next/router";
import styles from "./journeyPage.module.css";
import { limitsForMinting } from "@/consts/limitsForMinting";
import { useDispatch, useSelector } from "react-redux";
import { setNfts, zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import TaskCard from "@/components/TaskCard/taskCard";
import { initialDataSelector } from "@/store/initialData/reducer";
import { handleMintNft } from "@/utils/handleMintNft";

const JourneyPage = () => {
  const { initialData } = useSelector(initialDataSelector);
  const router = useRouter();
  const { journey } = router.query;
  const { exp } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
  const dispatch = useDispatch();
  const tasksByJourney = initialData[journey]?.tasks;
  const handleMintNftByPlace = async () => {
    await handleMintNft(WalletAddress, journey, setNfts, dispatch);
  };
  return (
    <div>
      <h2>Tasks for {initialData[journey]?.nick}</h2>
      {(tasksByJourney &&
        Object.entries(tasksByJourney).map(([key, task]) => (
          <TaskCard key={key} taskName={key} journeyName={journey} {...task} />
        ))) || <p>No tasks found</p>}
      {limitsForMinting[journey] <= exp && (
        <button onClick={handleMintNftByPlace}>MINT NFT</button>
      )}
    </div>
  );
};

export default JourneyPage;
