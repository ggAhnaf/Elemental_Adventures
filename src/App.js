import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { availableCards } from './cards'; 
import { images } from './exImage';
import { levels } from './levelData';

const reactionTable = {
    "sodium+chlorine": { id: "sodiumchloride", title: "Sodium Chloride", text: "Salt Wall !", image: images.sodiumchloride, effect: "shield", value: 20 },    
    "lithium+chlorine": { id: "lithiumchloride", title: "Lithium Chloride", text: "Salt Wall !", image: images.lithiumchloride, effect: "shield", value: 10 },
    "magnesium+chlorine": { id: "magnesiumchloride", title: "Magnesium Chloride", text: "Salt Wall !", image: images.magnesiumchloride, effect: "shield", value: 12 },
    "potassium+chlorine": { id: "potassiumchloride", title: "Potassium Chloride", text: "Salt Wall !", image: images.potassiumchloride, effect: "shield", value: 15  },
    "calcium+chlorine": { id: "calciumchloride", title: "Calcium Chloride", text: "Salt Wall !", image: images.calciumchloride, effect: "shield", value: 18 },
    "lithium+fluorine": { id: "lithiumfluoride", title: "Lithium Fluoride", text: "Hold Them Back !", image: images.lithiumfluoride, effect: "shield", value: 10 },
    "potassium+fluorine": { id: "potassiumfluoride", title: "Potassium Fluoride", text: "Hold Them Back  !", image: images.potassiumfluoride, effect: "shield", value: 12 },
    "sodium+fluorine": { id: "sodiumfluoride", title: "Sodium Fluoride", text: "Hold Them Back  !", image: images.sodiumfluoride, effect: "shield", value: 15 },
    "magnesium+fluorine": { id: "magnesiumfluoride", title: "Magnesium Fluoride", text: "Hold Them Back  !", image: images.magnesiumfluoride, effect: "shield", value: 18 },
    "calcium+fluorine": { id: "calciumfluoride", title: "Calcium Fluoride", text: "Hold Them Back  !", image: images.calciumfluoride, effect: "shield", value: 20 },
    "lithium+bromine": { id: "lithiumbromide", title: "Lithium Bromide", text: "Block Wall !", image: images.lithiumbromide, effect: "shield", value: 10 },
    "magnesium+bromine": { id: "magnesiumbromide", title: "Magnesium Bromide", text: "Block Wall !", image: images.magnesiumbromide, effect: "shield", value: 12 },
    "calcium+bromine": { id: "calciumbromide", title: "Calcium Bromide", text: "Block Wall !", image: images.calciumbromide, effect: "shield", value: 15 },
    "potassium+bromine": { id: "potassiumbromide", title: "Potassium Bromide", text: "Block Wall !", image: images.potassiumbromide, effect: "shield", value: 18 },
    "sodium+bromine": { id: "sodiumbromide", title: "Sodium Bromide", text: "Block Wall !", image: images.sodiumbromide, effect: "shield", value: 20 },
    "magnesium+nitrogen": { id: "magnesiumnitride", title: "Magnesium Nitride", text: "Potent Barrier !", image: images.magnesiumnitride, effect: "shield", value: 10 }, 
    "lithium+nitrogen": { id: "lithiumnitride", title: "Lithium Nitride", text: "Potent Barrier !", image: images.lithiumnitride, effect: "shield", value: 15 },
    "calcium+nitrogen": { id: "calciumnitride", title: "Calcium Nitride", text: "Potent Barrier !", image: images.calciumnitride, effect: "shield", value: 20 },
    "potassium+sulfur": { id: "potassiumsulfide", title: "Potassium Sulfide", text: "Noxious Barrier !", image: images.potassiumsulfide, effect: "shield", value: 10 },
    "lithium+sulfur": { id: "lithiumsulfide", title: "Lithium Sulfide", text: "Noxious Barrier !", image: images.lithiumsulfide, effect: "shield", value: 12 },
    "sodium+sulfur": { id: "sodiumsulfide", title: "Sodium Sulfide", text: "Noxious Barrier !", image: images.sodiumsulfide, effect: "shield", value: 15 },
    "magnesium+sulfur": { id: "magnesiumsulfide", title: "Magnesium Sulfide", text: "Noxious Barrier !", image: images.magnesiumsulfide, effect: "shield", value: 18 },
    "calcium+sulfur": { id: "calciumsulfide", title: "Calcium Sulfide", text: "Noxious Barrier !", image: images.calciumsulfide, effect: "shield", value: 20 },
    "potassium+oxygen": { id: "potassiumoxide", title: "Potassium Oxide", text: "Solid Defence !", image: images.potassiumoxide, effect: "shield", value: 10 },
    "sodium+oxygen": { id: "sodiumoxide", title: "Sodium Oxide", text: "Solid Defence !", image: images.sodiumoxide, effect: "shield", value: 12 },
    "lithium+oxygen": { id: "lithiumoxide", title: "Lithium Oxide", text: "Solid Defence !", image: images.lithiumoxide, effect: "shield", value: 15 },
    "calcium+oxygen": { id: "calciumoxide", title: "Calcium Oxide", text: "Solid Defence !", image: images.calciumoxide, effect: "shield", value: 18 },
    "magnesium+oxygen": { id: "magnesiumoxide", title: "Magnesium Oxide", text: "Solid Defence !", image: images.magnesiumoxide, effect: "shield", value: 20 }, 

    "water+fluorine": { id: "hydrofluoricacid", title: "Hydrofluoric Acid", text: "Attack ! ", image: images.hydrofluoricacid, effect: "enemyHealth", value: -15 },
    "water+chlorine": { id: "hydrochloricacid", title: "Hydrochloric Acid", text: "Attack ! ", image: images.hydrochloricacid, effect: "enemyHealth", value: -20 },
    "water+nitrogendioxide": { id: "nitricacid", title: "Nitric Acid", text: "Attack ! ", image: images.nitricacid, effect: "enemyHealth", value: -25 },
    "water+sulfurtrioxide": { id: "sulfuricacid", title: "Sulfuric Acid", text: "Attack ! ", image: images.sulfuricacid, effect: "enemyHealth", value: -30 }, 
    "sulfur+oxygen": { id: "sulfurtrioxide", title: "Sulfur Trioxide", text: "Attack ! ", image: images.sulfurtrioxide, effect: "enemyHealth", value: -8 },
    "nitrogen+oxygen": { id: "nitrogendioxide", title: "Nitrogen Dioxide", text: "Attack ! ", image: images.nitrogendioxide, effect: "enemyHealth", value: -6 },
};


const HomeScreen = ({ onStart }) => {
  const [playerName, setPlayerName] = useState("");
  const [favoriteElement, setFavoriteElement] = useState("");

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-600 to-pink-600 text-white">
      <div className="bg-violet-900 text-gray-900 p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Elemental Adventures!</h1>
        <p className="mb-6 text-lg text-white">
          "Chemistry is the magic of the universe. Let's uncover its secrets together!"
        </p>

        <input
          type="text"
          placeholder="Enter your name..."
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <input
          type="text"
          placeholder="Choose your favourite element!"
          value={favoriteElement}
          onChange={(e) => setFavoriteElement(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        <button
          className="mt-4 px-6 py-2 bg-gradient-to-b from-indigo-500 via-violet-800 via-75% to-indigo-700 text-white rounded-md hover:bg-green-600 transition"
          onClick={() => onStart(playerName, favoriteElement)}
        >
          Start the Adventure
        </button>
      </div>
    </div>
  );
};

const App = () => {

    const [showHomeScreen, setShowHomeScreen] = useState(true);
    const [playerName, setPlayerName] = useState("");
    const [favoriteElement, setFavoriteElement] = useState("");
    
    const handleStart = (name, element) => {
      setPlayerName(name);
      setFavoriteElement(element);
      setShowHomeScreen(false);
    };

    //turn
    const [turnCount, setTurnCount] = useState(0);

    const handleFinishTurn = () => {
      console.log({health, enemyAttack});
      
      if (health > 0) {
        decreaseResource("health", -enemyAttack);
        if ((health-enemyAttack && !showLevelComplete) <= 0){
          decreaseResource("health", -enemyAttack);
          handleLevelDefeat();
        }
      } else {handleLevelDefeat();}    

      //addCardToInventory(availableCards[0]);  //need to fix a big where card is recognized but not added to inventory
      setTurnCount((prevTurn) => prevTurn + 1);
    };

    //LEVELS
    const [showLevelDefeat, setLevelDefeat] = useState(false);
    const [showLevelComplete, setLevelComplete] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [levelName, setLevelName] = useState(levels[currentLevel].name);
    const [levelObjective, setLevelObjective] = useState(levels[currentLevel].objective);
    const [enemyName, setEnemyName] = useState(levels[currentLevel].enemy.name);
    const [enemyAttack, setEnemyAttack] = useState(levels[currentLevel].enemy.attack);    
    const [enemyShield, setEnemyShield] = useState(levels[currentLevel].enemy.shield);
    const [enemyHealth, setEnemyHealth] = useState(levels[currentLevel].enemy.health);
    
    const handleLevelDefeat = () => {
      setLevelDefeat(true);  
    };
  

    const handleLevelComplete = () => {
      setLevelComplete(true);  
    };
  
    const handleNextLevel = () => {
      setLevelComplete(false); 
      setTurnCount(0);
      setHealth(100);
      setShield(0);


      setCurrentLevel((prevLevel) => {
        const newLevel = prevLevel + 1;
        if (newLevel < levels.length) {
          setLevelName(levels[newLevel].name);
          setLevelObjective(levels[newLevel].objective);
          setEnemyName(levels[newLevel].enemy.name);
          setEnemyAttack(levels[newLevel].enemy.attack);
          setEnemyHealth(levels[newLevel].enemy.health);
          setEnemyShield(levels[newLevel].enemy.shield);
          return newLevel;
        }
        return prevLevel; // If max level is reached, stay at the last level.
      });
    };

    const handleRetry = () => {
      setLevelComplete(false);  
      setLevelDefeat(false);
      setTurnCount(0);
      setHealth(100);
      setEnemyHealth(levels[currentLevel].enemy.health);
      setEnemyShield(levels[currentLevel].enemy.shield);
      
    };

    const handleBackToMenu = () => {
      setShowHomeScreen(true);
      setLevelDefeat(false); 
    };
    
    //Objectives
    useEffect(() => {
      if (currentLevel === 0) {
        if (turnCount >= 5) {
          handleLevelComplete();
        }
      } else if (currentLevel === 1) {
        if (enemyHealth <= 0) {
          setEnemyName();
          setEnemyAttack();
          setEnemyHealth();
          setEnemyShield();
          handleLevelComplete();
        }
      }else if (currentLevel === 2) {
        if (enemyHealth <= 0) {
          handleLevelComplete();
        }
      }

    }, [turnCount, currentLevel, enemyHealth]); // Thiss effect runs whenever turnCount is updated

  

    const applyEffect = (card) => {
      if (card && card.effect) {
        const { effect, value } = card;
        if (effect === "health") {
          decreaseResource("health", value); // Decreases health based on the card's value
        } else if (effect === "shield") {
          decreaseResource("shield", value); // Decreases shield based on the card's value
        } else if (effect === "enemyHealth") {
          decreaseEnemyResource("enemyHealth", value); // Decreases shield based on the card's value
        } else if (effect === "enemyShield") {
          decreaseEnemyResource("enemyShield", value); // Decreases shield based on the card's value
        }
      }
    };

    //player resource bars
    const [health, setHealth] = useState(100);  // Health goes from 0 to 100
    const [shield, setShield] = useState(10);  // Shield goes from 0 to 100
    const [purpleBar, setPurpleBar] = useState(0);  // Purple bar goes from 0 to 50

    const decreaseResource = (resource, value) => {
        if (resource === "health") {
          setHealth((prevHealth) => {
            let damageToHealth = (-value); //this is to ensure that positive damage values DECREASE health and shield
            console.log({damageToHealth}); //for debugging purposes
            //console.log({shield}); //for debugging purposes
      
            if (shield > 0) {
              if (shield >= damageToHealth) {
                // If shield is enough to absorb all damage, reduce shield
                setShield((prevShield) => (prevShield - damageToHealth));
                damageToHealth = 0; // No damage will be done to health
              } else {
                // If shield is less than the damage, absorb all shield damage
                setShield((prevShield) => 0); // Shield is completely depleted
                damageToHealth -= shield; // remaining damage to health counter
              }
            }
      
            // Apply remaining damage to health
            const newHealth = prevHealth - damageToHealth;
            console.log(newHealth);
            if (newHealth <= 0) {
              return 0; // Health cannot go below 0
            } else {
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
          return Math.min(Math.max(newPurpleBar, 0), 50);  
        });
      }
    };

    //enemy resource bars
    
    const decreaseEnemyResource = (resource, value) => {
      if (resource === "enemyHealth") {
        setEnemyHealth((prevHealth) => {
          let damageToHealth = (-value); //this is to ensure that positive damage values DECREASE health and shield
  
          if (enemyShield > 0) {
            if (enemyShield >= damageToHealth) {
              // If shield is enough to absorb all damage, reduce enemy shield
              setEnemyShield((prevShield) => prevShield - damageToHealth);
              damageToHealth = 0; // No damage to health
            } else {
              // If shield is less than the damage, absorb all shield damage
              setEnemyShield((prevShield) => 0); // Enemy's shield is depleted
              damageToHealth -= enemyShield; // Remaining damage to enemy health count
            }
          }
    
          // Apply remaining damage to enemy health
          const newHealth = prevHealth - damageToHealth;
          console.log(newHealth);
          if (newHealth <= 0) {
            return 0; // Health cannot go below 0
          } else {
            return newHealth;
          }
        });
      } else if (resource === "enemyShield") {
        setEnemyShield((prevShield) => {
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
          return Math.min(Math.max(newPurpleBar, 0), 50);  
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
      availableCards[0], 
      availableCards[0], 
      availableCards[0],
      availableCards[0], 
      availableCards[0], 
      availableCards[0], 
      availableCards[0], 
      availableCards[1],
      availableCards[1],
      availableCards[2], 
      availableCards[2],
      availableCards[2],
      availableCards[2],
      availableCards[3],
      availableCards[3],
      availableCards[4], 
      availableCards[4],
      availableCards[5],
      availableCards[6], 
      availableCards[7],
      availableCards[7],
      availableCards[7],
      availableCards[8], 
      availableCards[8], 
      availableCards[8],
      availableCards[9],
      availableCards[9],
      availableCards[9],
      availableCards[9],
      availableCards[9],
      availableCards[10], 
      availableCards[10],
      availableCards[11],
      availableCards[11],
    ]);
    
    const addCardToInventory = (card) => {
      setInventory((prevInventory) => {
        // Check if the card already exists in the inventory
        const existingCardIndex = prevInventory.findIndex((item) => item.id === card.id);
    
        if (existingCardIndex !== -1) {
          // If card exists, increment the quantity
          const updatedInventory = [...prevInventory];
          updatedInventory[existingCardIndex].quantity += 1;
          console.log("Updated Inventory (after increment):", updatedInventory);  // Log to verify
          return updatedInventory;
        } else {
          // If card doesn't exist, add it with quantity 1
          const updatedInventory = [...prevInventory, { ...card, quantity: 1 }];
          console.log("Updated Inventory (after adding):", updatedInventory);  // Log to verify
          return updatedInventory;
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
          {showHomeScreen && <HomeScreen onStart={handleStart} />}
          

          <div className="w-full h-[12vh] bg-slate-700 text-white flex flex-col items-center justify-center shadow-md">
            <h1 className="text-2xl font-bold">Level: {levelName}</h1>
            <h2 className="text-lg text-gray-300">Objective: {levelObjective}</h2>
          </div>

          {/* Transparent container with bars */}
          <div className="absolute top-16 left-0 w-1/2 p-2">
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
          <div className="absolute top-16 right-0 w-[30%] p-2">
            <div className="space-y-1 flex flex-col justify-end">
              {/* Enemy Health Bar */}
              <div className="w-full bg-red-900 border-2 border-black rounded-md h-6 relative shadow-lg">
                <div
                  className="bg-gradient-to-b from-orange-600 via-red-800 via-75% to-red-700 h-full rounded-md absolute right-0"
                  style={{ width: `${calculateBarWidth(enemyHealth, 100)}%` }}
                ></div>
              </div>

              {/* Enemy Shield Bar */}
              <div className="w-full bg-blue-800 border-2 border-blue-900 rounded-md h-5 relative shadow-lg">
                <div
                  className="bg-gradient-to-b from-cyan-500 from-15% via-blue-600 via-75% to-blue-500 h-full rounded-md absolute right-0"
                  style={{ width: `${calculateBarWidth(enemyShield, 100)}%` }}
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
          <div className="absolute top-4 left-0 w-full flex justify-between px-8">
          {/* Player Name (Left) */}
          <h2 className="text-white font-bold text-xl bg-transparent">{playerName} of house {favoriteElement}</h2>

          {/* Enemy Name (Right) */}
          <h2 className="text-white font-bold text-xl bg-transparent">{enemyName}</h2>
        </div>


        <div className="h-screen flex items-center justify-between px-5">
        {/* Left Image (Player) */}
        <img 
          src={images.player} 
          alt="Player" 
          className="w-32 h-32 object-contain shadow-lg rounded-full"
        />

        {/* Right Image (Enemy) */}
        <img 
          src={images.enemy} 
          alt="Enemy" 
          className="w-32 h-32 object-contain shadow-lg rounded-full"
        />
</div>

          {/* Bottom Container with 3 Slots and Inventory */}
          <div className="bg-gray-800 p-6 mt-auto flex justify-between items-center">
          {/* Card Slots */}
          <div className="flex space-x-4">
              {slots.map((card, index) => (
                <div
                  key={index}
                  className={`w-48 h-72 bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer }`} 
                  onClick={() => index !== 2 && setSelectedSlot(index)}
                >
                  {card ? (
                    <>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-36 h-36 mt-4"
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
              
              {/* Finish Turn Button */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md w-40 flex flex-col items-center space-y-3">
                <h3 className="text-white font-bold text-lg">Turn</h3>
                <div className="bg-gray-600 p-4 rounded-lg shadow-md w-32 flex flex-col items-center space-y-3">
                  <h1 className="text-white text-8xl">{turnCount}</h1>
                </div>
                <button
                  className="w-32 py-2 mb-2 rounded-md shadow transition-colors duration-100 bg-purple-500 hover:bg-purple-600 text-white"
                  onClick={handleFinishTurn}
                >
                  Finish Turn
                </button>
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
            <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg w-100">
                <h2 className="text-lg font-bold mb-2">Select a Card</h2>
                <div className="grid grid-cols-5 gap-4 max-h-100 overflow-y-auto">
                  {/* Group unique cards and count duplicates, to save space in the menu*/}
                  {Object.entries(
                    inventory.reduce((acc, card) => {
                      acc[card.id] = acc[card.id] ? { ...card, count: acc[card.id].count + 1 } : { ...card, count: 1 };
                      return acc;
                    }, {})
                  )
                    .slice(0, 15) 
                    .map(([id, card]) => (
                      <div
                        key={id}
                        className="w-40 h-56 bg-gray-200 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
                        onClick={() => assignCardToSlot(card)}
                      >
                        <img src={card.image} alt={card.title} className="w-32 h-32 mt-2 rounded-full" />
                        <div className="mt-2 text-center px-2">
                          <h3 className="font-bold">{card.title}</h3>
                          <p className="text-gray-700">{card.text}</p>
                          {card.count > 1 && <p className="text-sm text-gray-500">x{card.count}</p>} {/* Show count if >1 */}
                        </div>
                      </div>
                    ))}
                </div>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setSelectedSlot(null)}>
                  Cancel
                </button>
              </div>
            </div>
          )}


              {/* Level Defeat Message Box */}
              {showLevelDefeat && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Defeat!</h2>
                    <p className="mb-6">You failed to complete the level!</p>

                    <div className="flex justify-between gap-4">
                      <button 
                        className="px-6 py-2 bg-blue-500 text-white rounded-md"
                        onClick={handleRetry} 
                      >
                        Retry
                      </button>
                      <button 
                        className="px-6 py-2 bg-gray-500 text-white rounded-md"
                        onClick={handleBackToMenu} 
                      >
                        Back to Menu
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Level Complete Message Box */}
              {showLevelComplete && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                    <p className="mb-6">You've completed this level!</p>

                    <div className="flex justify-between gap-4">
                      <button 
                        className="px-6 py-2 bg-blue-500 text-white rounded-md"
                        onClick={handleNextLevel}
                      >
                        Next Level
                      </button>
                      <button 
                        className="px-6 py-2 bg-red-500 text-white rounded-md"
                        onClick={handleRetry}
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                </div>
              )}

            
      </div>
    
    )
}
export default App;
