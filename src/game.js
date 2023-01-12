import React, { Component } from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import generateRandomCard from "./utility/generateRandomCard";
import HandOfCards from "./components/HandOfCards";

function Game() {
    const [deck, setDeck] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCount, setDealerCount] = useState(0);
    const [playerCount, setPlayerCount] = useState(0);
    const [flashStatus, setFlashStatus] = useState(false);
    

    const deal = e => {
        //updateFlashStaus(false);
    
        const dealerCards = Array(2)
          .fill("blank")
          .map(blank => generateRandomCard());
        // @TODO: checkForBlackjack
        setDealerCards(dealerCards);
    
        const playerCards = Array(2)
          .fill("blank")
          .map(blank => generateRandomCard());
        setPlayerCards(playerCards);
    };

    useEffect(() => {
        deal();
    }, []);

    return (
        <div>
            <h2>Dealer: </h2>
            <HandOfCards cards={dealerCards} />
            <h2>Player:</h2>
            <HandOfCards cards={playerCards} />
            <button>Hit</button>
            <button>Stand</button>
        </div>
    );
}

export default Game;