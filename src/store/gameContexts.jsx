import React, { useState, createContext } from "react";
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [hp, setHp] = useState(100);
  const [coins, setCoins] = useState(10);
  const [locations, setLocations] = useState(dragonStoryLocations);
  const [currentLocations, setCurrentLocations] = useState(locations[0]);

  const providerValue = {
    hp,
    setHp,
    coins,
    setCoins,
    locations,
    setLocations,
    currentLocations,
    setCurrentLocations,
  };

  return <GameContext.Provider value={providerValue}>{children}</GameContext.Provider>;
};

const dragonStoryLocations = [
  {
    Id: "140686910713664",
    Name: "Road",
    Characters: [
      {
        Name: "Main_hero",
        Items: [
          {
            Name: "Sword",
            Attributes: {
              Value: 1000,
            },
          },
        ],
        Attributes: {
          HP: 100,
          Money: 10,
        },
      },
    ],
    Connections: [
      {
        Destination: "140686910711488",
      },
      {
        Destination: "140686910678976",
      },
      {
        Destination: "140686910277632",
      },
      {
        Destination: "140686911964288",
      },
      {
        Destination: "140686910710080",
      },
    ],
  },
  {
    Id: "140686910710080",
    Name: "Wizards_hut",
    Attributes: {
      IsPrivate: true,
    },
    Characters: [
      {
        Name: "Wizard",
        Attributes: {
          HP: 200,
          Money: 100,
          IsAuthority: true,
        },
      },
    ],
    Items: [
      {
        Name: "Elixir",
        Attributes: {
          Value: 10,
          NutritionalValue: 1000,
        },
      },
    ],
    Connections: [
      {
        Destination: "140686910713664",
      },
    ],
  },
  {
    Id: "140686910655872",
    Name: "Dragons_lair",
    Characters: [
      {
        Name: "Dragon",
        Attributes: {
          HP: 1000,
        },
      },
    ],
    Items: [
      {
        Name: "Dragon_egg",
        Attributes: {
          Value: 4000,
        },
      },
    ],
    Connections: [
      {
        Destination: "140686910711488",
      },
    ],
  },
  {
    Id: "140686910711488",
    Name: "Forest",
    Items: [
      {
        Name: "Herbs",
        Attributes: {
          Value: 30,
          IsPoison: true,
        },
      },
    ],
    Connections: [
      {
        Destination: "140686910713664",
      },
      {
        Destination: "140686910655872",
      },
    ],
  },
  {
    Id: "140686910277632",
    Name: "Pasture",
    Characters: [
      {
        Name: "Sheep",
        Attributes: {
          HP: 10,
          NutritionalValue: 20,
        },
      },
    ],
    Connections: [
      {
        Destination: "140686910713664",
      },
      {
        Destination: "140686911964288",
      },
    ],
  },
  {
    Id: "140686911964288",
    Name: "Village",
    Items: [
      {
        Name: "Well",
      },
    ],
    Connections: [
      {
        Destination: "140686910713664",
      },
      {
        Destination: "140686910277632",
      },
    ],
  },
  {
    Id: "140686910678976",
    Name: "Inn",
    Characters: [
      {
        Name: "Innkeeper",
        Items: [
          {
            Name: "Poison",
            Attributes: {
              Value: 1000,
              IsPoison: true,
            },
          },
        ],
        Attributes: {
          HP: 100,
          Money: 1200,
        },
      },
      {
        Name: "Drunkard",
        Items: [
          {
            Name: "Alcohol",
            Attributes: {
              Value: 3,
            },
          },
        ],
        Attributes: {
          HP: 100,
          Money: 0,
          IsTroublemaker: true,
        },
      },
    ],
    Connections: [
      {
        Destination: "140686910713664",
      },
      {
        Destination: "140686910277632",
      },
    ],
  },
  {
    Name: "Prison",
    Characters: [],
    Connections: [
      {
        Destination: "Road",
      },
    ],
  },
];
