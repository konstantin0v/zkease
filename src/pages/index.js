import { Banner, JourneyCard } from '@/components';
import postRecord from '@/serverUtils/postRecord';
import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import {
  setExp,
  setAddress,
  setStoredTasks,
  setNfts,
} from '../store/zkRecord/reducer';
import { setUsers } from '../store/users/reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  initialDataSelector,
  setInitialData,
} from '@/store/initialData/reducer';

export const getServerSideProps = async () => {
  try {
    const responseUsers = await fetch(
      'https://clownfish-app-z2nhn.ondigitalocean.app'
    );
    const dataUsers = await responseUsers.json();

    const responseData = await fetch(
      `https://clownfish-app-z2nhn.ondigitalocean.app/data`
    );
    const { records } = await responseData.json();
    const { _id, ...serverData } = records[0];

    const bestUsers = dataUsers.records
      .sort((a, b) => b.exp - a.exp)
      .slice(0, 10);

    return {
      props: { bestUsers, serverData },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
      props: { bestUsers: [], serverData: {} },
    };
  }
};

export default function Home({ bestUsers, serverData, ...props }) {
  const { address: WalletAddress } = useAccount();
  const { initialData } = useSelector(initialDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(setUsers(bestUsers));
      dispatch(setInitialData(serverData));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (WalletAddress) {
          const { record } = await postRecord(WalletAddress);
          if (record) {
            dispatch(setAddress(record.address));
            dispatch(setExp(record.exp));
            dispatch(setStoredTasks(record.tasks));
            dispatch(setNfts(record.nfts));
          } else throw new Error(record.error);
        } else return null;
      } catch (error) {
        console.error(error);
      }
    })();
  }, [WalletAddress]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <Banner
          linkText="Learn more"
          bannerTextTitle="zkSync Era - Scale Your Crypto Freedom"
          bannerTextDescription="Scale your Ethereum security with zkSync Era - the layer 2 protocol using zero-knowledge cryptography."
        />
        <Banner
          submitBanner
          linkText="Submit project"
          bannerTextTitle="Are you a builder on zkSync?"
          bannerTextDescription="If you want to attract users to your project built on zkSyncEra, then contact us using the form below."
        />
      </div>
      <h2 className={styles.title}>Journeys in zkSync</h2>
      <div className={styles.box}>
        {(initialData &&
          Object.keys(initialData).map((i, id, arr) => (
            <div key={i}>
              <JourneyCard
                prevJourneyName={arr[id - 1]}
                journeyName={i}
                journeyNick={initialData[i]?.nick}
                journeyTitle={initialData[i]?.title}
              />
            </div>
          ))) || <p>No journeys found</p>}
      </div>
    </div>
  );
}
