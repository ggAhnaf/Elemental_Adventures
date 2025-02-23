import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { availableCards } from './cards'; 
import { images } from './exImage';

const reactionTable = {
    "sodium+chlorine": { id: "sodiumchloride", title: "Sodium Chloride", text: "Salt Wall !", image: images.sodium, effect: "shield", value: 20 },    
    "lithium+chlorine": { id: "lithiumchloride", title: "Lithium Chloride", text: "Salt Wall !", image: "   ", effect: "shield", value: 10 },
    "magnesium+chlorine": { id: "magnesiumchloride", title: "Magnesium Chloride", text: "Salt Wall !", image: "   ", effect: "shield", value: 12 },
    "potassium+chlorine": { id: "potassiumchloride", title: "Potassium Chloride", text: "Salt Wall !", image: "   ", effect: "shield", value: 15  },
    "calcium+chlorine": { id: "calciumchloride", title: "Calcium Chloride", text: "Salt Wall !", image: "   ", effect: "shield", value: 18 },
    "lithium+fluorine": { id: "lithiumfluoride", title: "Lithium Fluoride", text: "Salt Wall !", image: "   ", effect: "shield", value: 10 },
    "potassium+fluorine": { id: "potassiumfluoride", title: "Potassium Fluoride", text: "Salt Wall !", image: "   ", effect: "shield", value: 12 },
    "sodium+fluorine": { id: "sodiumfluoride", title: "Sodium Fluoride", text: "Salt Wall !", image: "   ", effect: "shield", value: 15 },
    "magnesium+fluorine": { id: "magnesiumfluoride", title: "Magnesium Fluoride", text: "Salt Wall !", image: "   ", effect: "shield", value: 18 },
    "calcium+fluorine": { id: "calciumfluoride", title: "Calcium Fluoride", text: "Salt Wall !", image: "   ", effect: "shield", value: 20 },
    "lithium+bromine": { id: "lithiumbromide", title: "Lithium Bromide", text: "Salt Wall !", image: "   ", effect: "shield", value: 10 },
    "magnesium+bromine": { id: "magnesiumbromide", title: "Magnesium Bromide", text: "Salt Wall !", image: "   ", effect: "shield", value: 12 },
    "calcium+bromine": { id: "calciumbromide", title: "Calcium Bromide", text: "Salt Wall !", image: "   ", effect: "shield", value: 15 },
    "potassium+bromine": { id: "potassiumbromide", title: "Potassium Bromide", text: "Salt Wall !", image: "   ", effect: "shield", value: 18 },
    "sodium+bromine": { id: "sodiumbromide", title: "Sodium Bromide", text: "Salt Wall !", image: "   ", effect: "shield", value: 20 },
    "magnesium+nitrogen": { id: "magnesiumnitride", title: "Magnesium Nitride", text: "Salt Wall !", image: "   ", effect: "shield", value: 10 }, 
    "lithium+nitrogen": { id: "lithiumnitride", title: "Lithium Nitride", text: "Salt Wall !", image: "   ", effect: "shield", value: 15 },
    "calcium+nitrogen": { id: "calciumnitride", title: "Calcium Nitride", text: "Salt Wall !", image: "   ", effect: "shield", value: 20 },
    "potassium+sulfur": { id: "potassiumsulfide", title: "Potassium Sulfide", text: "Salt Wall !", image: "   ", effect: "shield", value: 10 },
    "lithium+sulfur": { id: "lithiumsulfide", title: "Lithium Sulfide", text: "Salt Wall !", image: "   ", effect: "shield", value: 12 },
    "sodium+sulfur": { id: "sodiumsulfide", title: "Sodium Sulfide", text: "Salt Wall !", image: "   ", effect: "shield", value: 15 },
    "magnesium+sulfur": { id: "magnesiumsulfide", title: "Magnesium Sulfide", text: "Salt Wall !", image: "   ", effect: "shield", value: 18 },
    "calcium+sulfur": { id: "calciumsulfide", title: "Calcium Sulfide", text: "Salt Wall !", image: "   ", effect: "shield", value: 20 },
    "potassium+oxygen": { id: "potassiumoxide", title: "Potassium Oxide", text: "Salt Wall !", image: "   ", effect: "shield", value: 10 },
    "sodium+oxygen": { id: "sodiumoxide", title: "Sodium Oxide", text: "Salt Wall !", image: "   ", effect: "shield", value: 12 },
    "lithium+oxygen": { id: "lithiumoxide", title: "Lithium Oxide", text: "Salt Wall !", image: "   ", effect: "shield", value: 15 },
    "calcium+oxygen": { id: "calciumoxide", title: "Calcium Oxide", text: "Salt Wall !", image: "   ", effect: "shield", value: 18 },
    "magnesium+oxygen": { id: "magnesiumoxide", title: "Magnesium Oxide", text: "Salt Wall !", image: "   ", effect: "shield", value: 20 },  
};

const App = () => {
    // State variables for determining colors
    const [colorPlayer, setColorLeft] = useState('');
    const [colorEnemy, setColorRight] = useState('');

    //characters
    useEffect(() => {
      setColorLeft("bg-blue-500");
      setColorRight('bg-red-500');
    }, []);
    

    const [highlightedCard, setHighlightedCard] = useState(null);

    const handleCardClick = (index) => {
      setHighlightedCard(highlightedCard === index ? null : index); // Toggle the highlight
    };

    const applyEffect = (card) => {
      if (card && card.effect) {
        const { effect, value } = card;
        if (effect === "health") {
          decreaseResource("health", value); // Decreases health based on the card's value
        } else if (effect === "shield") {
          decreaseResource("shield", value); // Decreases shield based on the card's value
        }
      }
    };

    //player resource bars
    const [health, setHealth] = useState(50);  // Health goes from 0 to 100
    const [shield, setShield] = useState(50);  // Shield goes from 0 to 100
    const [purpleBar, setPurpleBar] = useState(50);  // Purple bar goes from 0 to 50

    const decreaseResource = (resource, value) => {
      if (resource === "health") {
        setHealth((prevHealth) => {
          const newHealth = prevHealth + value;
          console.log(newHealth);
          if (newHealth >= 100) {
            return 100;
          }
          else {
            return newHealth;
          }
        });
      } else if (resource === "shield") {
        setShield((prevShield) => {
          const newShield = prevShield + value;
          console.log(newShield);
          if (newShield >= 100) {
            return 100;
          }
          else {
            return newShield;
          }
        });
      } else if (resource === "purpleBar") {
        setPurpleBar((prevPurpleBar) => {
          const newPurpleBar = prevPurpleBar + value;
          return Math.min(Math.max(newPurpleBar, 0), 50);  // Prevents purpleBar from going below 0 and above 50
        });
      }
    };
        
    // Function to calculate the width of the bar based on value
    const calculateBarWidth = (value, maxValue) => {
      return (value / maxValue) * 100;
    };

    // Inventory Button states
    const [craftClicked, setCraftClicked] = useState(false);
    const [useClicked, setUseClicked] = useState(false);
    const [storeClicked, setStoreClicked] = useState(false);

    // Effects to reset button color after a short time
    useEffect(() => {
        if (craftClicked) setTimeout(() => setCraftClicked(false), 200);
    }, [craftClicked]);

    useEffect(() => {
        if (useClicked) setTimeout(() => setUseClicked(false), 200);
    }, [useClicked]);

    useEffect(() => {
        if (storeClicked) setTimeout(() => setStoreClicked(false), 200);
    }, [storeClicked]);

    // Player's INVENTORY
    // Inventory (Cards the player has)
    const [inventory, setInventory] = useState([
      availableCards[0], 
      availableCards[1],
      availableCards[2], 
      availableCards[3],
      availableCards[4], 
      availableCards[5],
      availableCards[6], 
      availableCards[7],
      availableCards[8], 
      availableCards[9],
      availableCards[10], 
      availableCards[11],
    ]);
    
    // Add card to inventory
    const addCardToInventory = (card) => {
      setInventory((prevInventory) => {
        // Check if the card already exists in the inventory
        const existingCardIndex = prevInventory.findIndex((item) => item.id === card.id);
        if (existingCardIndex !== -1) {
          // If card exists, increment the quantity
          const updatedInventory = [...prevInventory];
          updatedInventory[existingCardIndex].quantity += 1;
          return updatedInventory;
        } else {
          // If card doesn't exist, add it with quantity 1
          return [...prevInventory, { ...card, quantity: 1 }];
        }
      });
    };

    // Remove card from inventory
    const removeCardFromInventory = (card) => {
      setInventory((prevInventory) => {
        const updatedInventory = [...prevInventory];
        const existingCardIndex = prevInventory.findIndex((item) => item.id === card.id);

        if (existingCardIndex !== -1) {
          if (updatedInventory[existingCardIndex].quantity > 1) {
            // If quantity is greater than 1, decrease the quantity
            updatedInventory[existingCardIndex].quantity -= 1;
          } else {
            // If quantity is 1, remove the card from inventory
            updatedInventory.splice(existingCardIndex, 1);
          }
        }
        return updatedInventory;
      });
    };


    // Slots for bottom container (3 slots, initially empty)
    const [slots, setSlots] = useState([null, null, null]);

    // State to track which slot is being selected
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Function to assign a card from inventory to a slot
    const assignCardToSlot = (card) => {
        if (selectedSlot !== null) {
            const newSlots = [...slots];
            newSlots[selectedSlot] = card;
            setSlots(newSlots);
            setSelectedSlot(null); // Close menu after selection
        }
    };

    //methods to handle BUTTON clicks

    const handleCraft = () => {
      if (slots[0] && slots[1]) {
          const card1 = slots[0].id;
          const card2 = slots[1].id;
          const result = reactionTable[`${card1}+${card2}`] || reactionTable[`${card2}+${card1}`];

          if (result) {
              removeCardFromInventory(slots[0]); 
              removeCardFromInventory(slots[1]);
              setSlots([null, null, result]); // Placeing the new card in Slot 3
          } else {
              alert("No valid reaction found!");
          }
      //if there is only one card, moving it to slot 3 for use
      }else if (slots[0] && !slots[1]) {
        setSlots([null, null, slots[0]]);
      } else if (!slots[0] && slots[1]) {
          setSlots([null, null, slots[1]]);
      } else {
          alert("You need at least one card in the slots to craft!");
      }
      
    };

    const handleStoreClick = () => {
      if (slots[2]) { 
        // Add the card in slot 3 to the inventory
        addCardToInventory(slots[2]);
    
        // Remove the card from slot 3
        setSlots((prevSlots) => {
          const newSlots = [...prevSlots];
          newSlots[2] = null; // Set the card in slot 3 to null
          return newSlots;
        });
        console.log('Current Inventory:', inventory);
      }
    };

    const handleUseClick = () => {
      if (slots[2]) {
        applyEffect(slots[2]); // Use the card in slot 3
        const updatedSlots = [...slots];  // Copy the current slots array
        updatedSlots[2] = null;  // Remove the card from slot 3
        setSlots(updatedSlots);
      }
    };

    const handleClearClick = () => {
      // Looping through all the slots and if there's a card in the slot, add it back to the inventory
      slots.forEach((card) => {
          if (card) {
              addCardToInventory(card);  
          }
      });  
      // Then clears all the slots
      setSlots([null, null, null]);
       console.log("Slots cleared and cards returned to inventory!");
  };


    

    return (
      <div className='h-screen flex flex-col bg-slate-500'>
          {/* Transparent container with bars */}
          <div className="absolute top-0 left-0 w-1/2 p-2">
            <div className="space-y-1">
              {/* Health Bar */}
              <div className="w-full bg-red-900 border-2 border-black rounded-md h-6 relative shadow-lg">
                <div
                  className="bg-gradient-to-b from-orange-600 via-red-800 via-65% to-red-700 h-full rounded-md"
                  style={{ width: `${calculateBarWidth(health, 100)}%` }}
                ></div>
              </div>

              {/* Shield Bar */}
              <div className="w-full bg-blue-800 border-2 border-blue-900 rounded-md h-5 relative shadow-lg">
                <div
                  className="bg-gradient-to-b from-cyan-500 from-15% via-blue-600 via-75% to-blue-500 h-full rounded-md"
                  style={{ width: `${calculateBarWidth(shield, 100)}%` }}
                ></div>
              </div>

              {/* Purple Bar */}
              <div className="w-1/2 bg-purple-900 border-2 border-purple-900 rounded-md h-5 relative shadow">
                <div
                  className="bg-gradient-to-b from-purple-500 from-15% via-purple-700 via-75% to-violet-500 h-full rounded-md"
                  style={{ width: `${calculateBarWidth(purpleBar, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Transparent container with bars for enemy */}
          <div className="absolute top-0 right-0 w-[30%] p-2">
            <div className="space-y-1 flex flex-col justify-end">
              {/* Enemy Health Bar */}
              <div className="w-full bg-red-900 border-2 border-black rounded-md h-6 relative shadow-lg">
                <div
                  className="bg-gradient-to-b from-orange-600 via-red-800 via-75% to-red-700 h-full rounded-md absolute right-0"
                  style={{ width: `${calculateBarWidth(health, 100)}%` }}
                ></div>
              </div>

              {/* Enemy Shield Bar */}
              <div className="w-full bg-blue-800 border-2 border-blue-900 rounded-md h-5 relative shadow-lg">
                <div
                  className="bg-gradient-to-b from-cyan-500 from-15% via-blue-600 via-75% to-blue-500 h-full rounded-md absolute right-0"
                  style={{ width: `${calculateBarWidth(shield, 100)}%` }}
                ></div>
              </div>

              {/* Enemy Purple Bar */}
              <div className="w-1/2 bg-purple-900 border-2 border-purple-900 rounded-md h-5 relative ml-auto shadow">
                <div
                  className="bg-gradient-to-b from-purple-500 from-15% via-purple-700 via-75% to-violet-500 h-full rounded-md absolute right-0"
                  style={{ width: `${calculateBarWidth(purpleBar, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* characters */}

          <div className="h-screen flex items-center justify-between px-5">
            {/* Left circle */}
            <div
              className={`w-24 h-24 rounded-full ${colorPlayer} shadow-lg`}
            ></div>

            {/* Right circle */}
            <div
              className={`w-24 h-24 rounded-full ${colorEnemy} shadow-lg`}
            ></div>
          </div>

          {/* Bottom Container with 3 Slots and Inventory */}
          <div className="bg-gray-800 p-6 mt-auto flex justify-between items-center">
          {/* Card Slots */}
          <div className="flex space-x-4">
              {slots.map((card, index) => (
                <div
                  key={index}
                  className={`w-48 h-72 bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer }`} // Add right margin to all but the third slot
                  onClick={() => index !== 2 && setSelectedSlot(index)}
                >
                  {card ? (
                    <>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-24 h-24 mt-4 rounded-full"
                      />
                      <div className="mt-4 text-center px-2">
                        <h3 className="font-bold text-xl">{card.title}</h3>
                        <p className="text-gray-700">{card.text}</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-500">
                      {index === 2 ? 'Craft Slot' : 'Empty Slot'} 
                    </div>
                  )}
                </div>
              ))}
          </div>

              {/* Inventory Section - Aligned to the Right */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md w-40 flex flex-col items-center space-y-3">
                  <h3 className="text-white font-bold text-lg">Inventory</h3>
                  <button 
                      className={`w-full py-2 rounded-md shadow transition-colors duration-100 
                      ${craftClicked ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                      onClick={handleCraft}
                  >
                      Craft
                  </button>

                  <button 
                    className={`w-full py-2 rounded-md shadow transition-colors duration-100 
                    ${useClicked ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
                    onClick={handleUseClick}
                  >
                    Use
                  </button>

                  <button
                    className="w-full py-2 rounded-md shadow transition-colors duration-100 bg-yellow-500 hover:bg-yellow-600 text-white"
                    onClick={handleStoreClick}
                  >
                    Store
                  </button>

                  <button
                        className="w-full py-2 rounded-md shadow transition-colors duration-100 bg-red-500 hover:bg-red-600 text-white"
                        onClick={handleClearClick}
                    >
                        Clear
                    </button>
              </div>
          </div>


           {/* Card Selection Menu (Pop-up when selecting a slot) */}
           {selectedSlot !== null && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded-lg shadow-lg w-100">
                    <h2 className="text-lg font-bold mb-2">Select a Card</h2>
                    <div className="grid grid-cols-3 gap-4 max-h-100 overflow-y-auto">
                      {/* Display up to 12 cards from inventory */}
                      {inventory.slice(0, 12).map((card) => (
                        <div key={card.id} 
                            className="w-40 h-56 bg-gray-200 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
                            onClick={() => assignCardToSlot(card)}
                        >
                          <img src={card.image} alt={card.title} className="w-24 h-24 mt-2 rounded-full" />
                          <div className="mt-2 text-center px-2">
                            <h3 className="font-bold">{card.title}</h3>
                            <p className="text-gray-700">{card.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded" 
                      onClick={() => setSelectedSlot(null)}
                    >
                      Cancel
                    </button>
                  </div>                    
                </div>
              )}

            
      </div>
    
    )
}
export default App;
