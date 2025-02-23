export const levels = [
    {
      id: 1,
      name: "Hold the wall!",
      objective: "Survive 5 More Turns",
      enemy: {
        name: "Demon Lord",
        health: 100,
        attack: 30,
        shield: 50,
        weakness: ["base"], 
      },
    },
    {
      id: 2,
      name: "First Blood!",
      objective: "Defeat the Demon Lord's Acid Monster!",
      enemy: {
        name: "Acid Monster",
        health: 50,
        shield: 10,
        attack: 15,
        weakness: ["base"], 
      },
    },
    {
      id: 3,
      name: "The Alchemist's Challenge",
      objective: "Defeat the Demon Lord",
      enemy: {
        name: "Demon Lord",
        health: 100,
        attack: 20,
        weakness: ["base"],
      },
    },
  ];
  