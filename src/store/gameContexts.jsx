import React, { useState, createContext } from "react";
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [hp, setHp] = useState(100);
  const [coins, setCoins] = useState(10);
  const [locations, setLocations] = useState(dragonStoryLocations);
  const [currentLocation, setCurrentLocation] = useState(dragonStoryLocations[0]);

  const providerValue = {
    hp,
    setHp,
    coins,
    setCoins,
    locations,
    setLocations,
    currentLocation,
    setCurrentLocation,
  };

  return <GameContext.Provider value={providerValue}>{children}</GameContext.Provider>;
};

const dragonStoryLocations = [
  {
    Id: "0",
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
        Destination: "1",
      },
      {
        Destination: "2",
      },
      {
        Destination: "3",
      },
      {
        Destination: "4",
      },
      {
        Destination: "5",
      },
    ],
  },
  {
    Id: "5",
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
        Destination: "0",
      },
    ],
  },
  {
    Id: "6",
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
        Destination: "1",
      },
    ],
  },
  {
    Id: "1",
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
        Destination: "0",
      },
      {
        Destination: "6",
      },
    ],
  },
  {
    Id: "3",
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
        Destination: "0",
      },
      {
        Destination: "4",
      },
    ],
  },
  {
    Id: "4",
    Name: "Village",
    Items: [
      {
        Name: "Well",
      },
    ],
    Connections: [
      {
        Destination: "0",
      },
      {
        Destination: "3",
      },
    ],
  },
  {
    Id: "2",
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
        Destination: "7",
      },
      {
        Destination: "3",
      },
    ],
  },
  {
    Id: "7",
    Name: "Prison",
    Characters: [],
    Connections: [
      {
        Destination: "0",
      },
    ],
  },
];
