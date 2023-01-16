import React, { Component } from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import generateRandomCard from "./utility/generateRandomCard";
import HandOfCards from "./components/HandOfCards";
import { calculateScore } from "./utility/cardData";
import StatusFlash from "./components/StatusFlash";
import { Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function Game() {
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerWins, updatePlayerWins] = useState(0);
  const [dealerWins, updateDealerWins] = useState(0);
  const [flashStatus, updateFlashStatus] = useState(false);
  const [mostRecentWinner, updateMostRecentWinner] = useState();
  const playerCount = calculateScore(playerCards);
  const dealerCount = calculateScore(dealerCards);

  const deal = e => {
    updateFlashStatus(false);

    const dealerCards = Array(1)
      .fill("blank")
      .map(blank => generateRandomCard());
    // @TODO: checkForBlackjack
    setDealerCards(dealerCards);

    const playerCards = Array(2)
      .fill("blank")
      .map(blank => generateRandomCard());
    setPlayerCards(playerCards);
  };

  const hit = e => {
    const newPlayerCards = [...playerCards, generateRandomCard()];
    const newPlayerScore = calculateScore(newPlayerCards);

    if (newPlayerScore === 21) {
      // player wins
      updateMostRecentWinner("Blackjack, Player Wins!");
      updateFlashStatus(true);
      updatePlayerWins(playerWins + 1);
      setPlayerCards(newPlayerCards);
      return;
    }
    if (newPlayerScore > 21) {
      // player loses
      updateMostRecentWinner("Player Busts, Dealer Wins!");
      updateFlashStatus(true);
      updateDealerWins(dealerWins + 1);
      setPlayerCards(newPlayerCards);
      return;
    }
    setPlayerCards(newPlayerCards);
  };


  const stay = e => {
    let newDealerCards = dealerCards;
    let newDealerScore = dealerCount;

    while (newDealerScore < 17) {
      newDealerCards = [...newDealerCards, generateRandomCard()];
      newDealerScore = calculateScore(newDealerCards);
    }

    if (newDealerScore === 21) {
      // dealer wins
      updateMostRecentWinner("Dealer Wins!");
      updateFlashStatus(true);
      updateDealerWins(dealerWins + 1);
      setDealerCards(newDealerCards);
      return;
    }
    if (newDealerScore > 21) {
      // dealer loses
      updateMostRecentWinner("Dealer Busts, Player Wins!");
      updateFlashStatus(true);
      updatePlayerWins(playerWins + 1);
      setDealerCards(newDealerCards);
      return;
    }
    if (newDealerScore > playerCount) {
      // dealer wins
      updateMostRecentWinner("Dealer Wins!");
      updateFlashStatus(true);
      updateDealerWins(dealerWins + 1);
      setDealerCards(newDealerCards);
      return;
    }
    if (newDealerScore === playerCount) {
        // push (tie)
        updateMostRecentWinner("Push (Tie)");
        updateFlashStatus(true);
        setDealerCards(newDealerCards);
        return;
    } else {
      // dealer loses
      updateMostRecentWinner("Player Wins!");
      updateFlashStatus(true);
      updatePlayerWins(playerWins + 1);
      setDealerCards(newDealerCards);
      return;
    }
  };

  useEffect(() => {
      deal();
  }, []);

  return (
    <div className="game">
      <div className="header">
        <Box 
          bg={useColorModeValue("orange.200", "red.800")} w="100%" p={4} 
          color="black" boxShadow={"md"}>
          React Blackjack
        </Box>
      </div>
      
      <div className="card-game">
        {flashStatus ? <StatusFlash winner={mostRecentWinner} /> : ""}
        <div className="dealer-container">
          <h2>Dealer: </h2>
          <HandOfCards cards={dealerCards} />
          <h3 className="card-score">{dealerCount}</h3>
        </div>

        <div className="player-container">
          <h2>Player:</h2>
          <HandOfCards cards={playerCards} />
          <h3 className="card-score">{playerCount}</h3>
        </div>

        {flashStatus ? <Button colorScheme='blue' 
          size="sm" onClick={deal}>Deal</Button> : ""}
        {flashStatus ? "" : <Button colorScheme='blue' 
          size="sm" className="action-button" onClick={hit}>Hit</Button>}
        {flashStatus ? "" : <Button colorScheme='blue' 
          size="sm" onClick={stay}>Stay</Button>}
      </div>
    </div>
  );
}

export default Game;