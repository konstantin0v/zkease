import updateNftCount from "@/serverUtils/updateNftCount";

export const handleMintNft = async (
  walletAddress,
  journey,
  setNfts,
  dispatch,
  jwt
) => {
  try {
    const response = await updateNftCount(walletAddress, journey, jwt);
    dispatch(setNfts(response.nfts));
  } catch (error) {
    console.log(error);
  }
};
