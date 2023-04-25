import updateNftCount from "@/serverUtils/updateNftCount";

export const handleMintNft = async (
  WalletAddress,
  journey,
  setNfts,
  dispatch
) => {
  try {
    const response = await updateNftCount(WalletAddress, journey);
    dispatch(setNfts(response.nfts));
  } catch (error) {
    console.log(error);
  }
};
