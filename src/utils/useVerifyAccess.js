import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useSelector } from "react-redux";

export const useVerifyAccess = (journey) => {
  const { nfts } = useSelector(zkRecordSelector);

  function getPreviousJourneyName(nfts, journey) {
    const journeyKeys = Object.keys(nfts);
    const currentIndex = journeyKeys.indexOf(journey);

    if (currentIndex > 0) {
      return journeyKeys[currentIndex - 1];
    } else {
      return null;
    }
  }
  const prevJourney = getPreviousJourneyName(nfts, journey);
  const access = prevJourney === null ? true : nfts[prevJourney];

  return { access };
};
