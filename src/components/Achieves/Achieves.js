import { useDispatch, useSelector } from "react-redux";
import styles from "./Achieves.module.css";
import { setExp, zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import Image from "next/image";
import { ArrowRight, Button } from "@/components";
import { bonusExp } from "@/serverUtils/bonusExp";

export const Achieves = () => {
  const { nfts, exp, jwt } = useSelector(zkRecordSelector);
  const dispatch = useDispatch();
  const { address: walletAddress } = useAccount();
  const nftComponents = ["nft1", "nft2", "nft3", "nft4", "nft5"];
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }

  const handleBonus = async () => {
    try {
      const newExp = exp + 10;
      const response = await bonusExp(walletAddress, newExp, jwt);
      dispatch(setExp(response.exp));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.achievements}>
      <div className={styles.achieves__top}>
        <h2 className={styles.title}>Achieves</h2>
        {/* <ArrowRight className={styles.arrow__svg} /> */}
      </div>
      {walletAddress && nftCount > 0 ? (
        <ul className={styles.box}>
          {nftComponents.slice(0, nftCount).map((item) => (
            <li key={item} className={styles.box__item}>
              <Image
                src={`/image/mininft/${item}.png`}
                alt="mininft"
                fill
                className={styles.nft}
                quality={95}
              />
            </li>
          ))}
        </ul>
      ) : exp > 0 ? (
        <h3 className={styles.subtitle}>
          Complete journeys to earn XP and gain achievements.
        </h3>
      ) : (
        <>
          <Button onClick={handleBonus}>Take bonus 10EXP</Button>
          <p>Push this button and get BONUS 10EXP</p>{" "}
        </>
      )}
    </div>
  );
};
