import { symbolValuePairs, faces } from "./cardData";

const generateRandomCard = () => {
  const generateRandomFace = faces[Math.floor(Math.random() * 4)];
  const randomSymbolValuePair =
    symbolValuePairs[Math.floor(Math.random() * 12)];
  return {
    face: generateRandomFace,
    ...randomSymbolValuePair
  };
};

export default generateRandomCard;