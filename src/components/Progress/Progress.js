import { useSelector } from "react-redux";
import styles from "./Progress.module.css";
import { useAccount } from "wagmi";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
  const { exp, nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();

  return (
    <div className={styles.progress}>
      <h2 className={styles.subtitle}>My progress</h2>
      <div className={styles.info}>
        Lvl i dont know & you have
        {WalletAddress && (
          <>
            {nfts &&
              Object.entries(nfts).filter(([_, value]) => value !== 0)
                .length}{" "}
            nfts
            <p>XP {exp}</p>
          </>
        )}
      </div>
      <ProgressBar
        bgColor="#155EE6"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={0}
        // completed={(userProgress / objOfProgress?.totalTasks) * 100}
        className={styles.bar}
      />
    </div>
  );
};

export default Progress;

{
  /* <div className={styles.progress}>
  My progress - {WalletAddress && exp}XP
  <p>
    You have{' '}
    {WalletAddress &&
      nfts &&
      Object.entries(nfts).filter(([_, value]) => value !== 0).length}{' '}
    NFT
  </p>
</div>; */
}
