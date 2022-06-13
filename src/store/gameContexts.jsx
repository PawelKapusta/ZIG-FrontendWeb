import React, {useState, createContext} from "react";
import imageUrl from "../assets/landscape.jpg";

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
    const [hp, setHp] = useState(100);
    const [coins, setCoins] = useState(10);
    const [locations, setLocations] = useState(dragonStoryLocations);
    const [currentLocation, setCurrentLocation] = useState(dragonStoryLocations[0]);
    const [backgroundImage, setBackgroundImage] = useState(imageUrl);
    const [items, setItems] = useState(dragonStoryLocations[0]["Characters"][0]["Items"]);
    const [exchanging, setExchanging] = useState(null);
    const [exchanged, setExchanged] = useState(null);
    const [npcLives, setNpcLives] = useState({
        Wizard: true,
        Dragon: true,
        Innkeeper: true,
        Sheep: true,
    });

    const resetDataGame = () => {
        setHp(100);
        setCoins(10);
        setLocations(dragonStoryLocations);
        setCurrentLocation(dragonStoryLocations[0]);
        setBackgroundImage(imageUrl);
        setItems(dragonStoryLocations[0]["Characters"][0]["Items"]);
        setExchanged(null);
        setExchanging(null);
        setNpcLives({
            Wizard: true,
            Dragon: true,
            Innkeeper: true,
            Sheep: true,
        });
    };

    const providerValue = {
        hp,
        setHp,
        coins,
        setCoins,
        locations,
        setLocations,
        currentLocation,
        setCurrentLocation,
        backgroundImage,
        setBackgroundImage,
        items,
        setItems,
        exchanging,
        setExchanging,
        exchanged,
        setExchanged,
        resetDataGame,
        npcLives,
        setNpcLives,
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
                            NutritionalValue: 0,
                            IsPoison: true,
                        },
                    },
                ],
                Attributes: {
                    HP: 100,
                    Money: 10,
                },
            },
        ],
        Items: [],
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
                    IsPoison: false,
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
                    NutritionalValue: 0,
                    IsPoison: false,
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
        Characters: [],
        Items: [
            {
                Name: "Herbs",
                Attributes: {
                    Value: 30,
                    NutritionalValue: 0,
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
                    IsPoison: false,
                },
            },
        ],
        Items: [],
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
                Attributes: {
                    Value: 10,
                    NutritionalValue: 0,
                    IsPoison: false,
                },
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
                            NutritionalValue: 0,
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
                            NutritionalValue: 0,
                            IsPoison: false,
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
        Items: [],
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
        Items: [],
        Connections: [
            {
                Destination: "0",
            },
        ],
    },
];
