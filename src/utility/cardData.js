export const symbolValuePairs = [
    { symbol: "2", value: 2 },
    { symbol: "3", value: 3 },
    { symbol: "4", value: 4 },
    { symbol: "5", value: 5 },
    { symbol: "6", value: 6 },
    { symbol: "7", value: 7 },
    { symbol: "8", value: 8 },
    { symbol: "9", value: 9 },
    { symbol: "10", value: 10 },
    { symbol: "J", value: 10 },
    { symbol: "Q", value: 10 },
    { symbol: "K", value: 10 },
    { symbol: "A", value: 11 }
  ];
  
  export const faces = ["♥", "♦", "♠", "♣"];

  export const colors = [
    {
        id: 0,
        color: "red",
    },
    {
        id: 1,
        color: "black",
    }
  ]
  
  export function calculateScore(cards) {
    return cards.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );
  }