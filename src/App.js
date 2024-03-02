import React, { useState } from "react"
import "./App.css"
import Card from "./components/Card"
import gardener from "./components/images/orchard.png"
import hoe from "./components/images/hoe.png"
import cloud from "./components/images/cloud-computing.png"

const App = () => {
  const suit = ["leaves", "herbs", "fruits", "blooms"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) 
    // rank arr and suit arr's indexes are being randomized
    // everything happening inside the square brackets will ulimately return a random num between 0 and the length of the arr
    // this will make each draw appear as though the user is pulling from a shuffled deck
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2)
    // honestly having to really think through this one
    // ohhh ok! I think I got it
    // indexOf searches for a particular index within, in this case, the "hand" state variable which is an arr holding each "draw"
    // if the value indexOf is searching for is found, it will return a num (the index at which the value was found)
    // if indexOf doesn't find the specified "draw" within the "hands" arr, -1 will be returned
    // so basically it would read as "if the user hasn't already drawn this card..."
    if (hand.indexOf(draw) === -1) {
      // 3)
      // add the draw to the hand arr aka our pile of already drawn cards
      // setHand to update the state of the hand
      // 🎵spread operator🎵 on hand to create a shallow copy of the current hand
      // ", draw" is the just the syntax to add the draw the user just pulled into the hand 
      setHand([...hand, draw])
      // 4)
      // reads as "if our hand aka pile of drawn cards' length isn't at 52 (and implicitly the card drawn must have been technically already drawn since it fell thru the 1st condition)..."
    } else if (hand.length !== 52) {
      // 5)
      // keep drawing cards bc we still have more cards lyin 'round
      drawCard()
      // 6)
      // if the card the user just drew could be found within the hand arr AND the hand length is 52...
    } else {
      // 7)
      // the user must have dealt all the cards in a standard deck
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }

  return (
    <>
    <div className="app-wrapper">
      <h1 style={{ textAlign: "center", color: "#E9EDC8", fontSize: 40 }}>Welcome to the Card Garden</h1>
        <h3 style={{ textAlign: "center", color: "#CCD5AE" }}>Help expand our garden by planting some foliage!</h3>
        <div className="btn-cont">
          <div className="btns">
            <img className="plant-btn" onClick={drawCard} src={gardener} alt="" />
            <p>Click on the gardener to start planting!</p>
          </div>
          <div className="btns">
            <img className="uproot-btn" onClick={shuffle} src={hoe} alt="" />
            <p>Click on the hoe to uproot everything :/</p>
          </div>
        </div>
        <img className="cloud-img" src={cloud} alt="" />
        <p className="cloud-text" style={{ color: "#5785b3", textAlign: "center" }}>Quick tip: hover <br /> over the plants <br /> to water them!</p>
        <div className="cards-dealt">
          {hand.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
    </div>
    </>
  )
}

export default App
