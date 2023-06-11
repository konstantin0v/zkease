import { Banner, JourneyCard } from "@/components";
import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
import { initialDataSelector } from "@/store/initialData/reducer";
import { useFetchData } from "@/utils/useFetchData";

export const getServerSideProps = async () => {
  try {
    const responseUsers = await fetch(
      "https://sea-lion-app-39uur.ondigitalocean.app/"
    );
    const users = await responseUsers.json();
    const dataUsers = users.records
      .sort((a, b) => b.exp - a.exp)
      .map((i) => i.address);

    const responseData = await fetch(
      "https://sea-lion-app-39uur.ondigitalocean.app/data"
    );
    const { records } = await responseData.json();
    const { _id, ...serverData } = records[1];

    const bestUsers = users.records.sort((a, b) => b.exp - a.exp).slice(0, 10);

    return {
      props: { bestUsers, serverData, dataUsers },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
      props: { bestUsers: [], serverData: {} },
    };
  }
};

export default function Home({ bestUsers, serverData, dataUsers, ...props }) {
  const { initialData } = useSelector(initialDataSelector);
  useFetchData(serverData, bestUsers, dataUsers);
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
          bannerTextDescription="We can include your project to ZkEase! Please fill in the form below:"
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
