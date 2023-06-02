import updateNftCount from "@/serverUtils/updateNftCount";

export const handleMintNft = async (
  walletAddress,
  journey,
  setNfts,
  dispatch
) => {
  try {
    const response = await updateNftCount(walletAddress, journey);
    dispatch(setNfts(response.nfts));
  } catch (error) {
    console.log(error);
  }
};
