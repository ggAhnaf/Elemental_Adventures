export const levels = [
    {
      id: 1,
      name: "Hold the wall!",
      objective: "Survive 5 More Turns",
      enemy: {
        name: "Acid Monster",
        health: 100,
        attack: 30,
        weakness: ["base"], 
      },
    },
    {
      id: 2,
      name: "First Blood!",
      objective: "Defeat the Acid Monster!",
      enemy: {
        name: "Acid Monster",
        health: 100,
        shield: 10,
        attack: 10,
        weakness: ["base"], 
      },
    },
    {
      id: 3,
      name: "The Alchemist's Challenge",
      objective: "Craft and use Calcium Hydroxide to neutralize an acid attack",
      requiredCrafts: ["calciumhydroxide"],
      enemy: {
        name: "Acid Golem",
        health: 150,
        attack: 20,
        weakness: ["base"],
      },
    },
    // More levels can be added here
  ];
  