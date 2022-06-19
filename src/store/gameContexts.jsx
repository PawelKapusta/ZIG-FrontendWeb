import React, { useState, createContext, useEffect } from "react";
import imageUrl from "../assets/landscape.jpg";
import Wizards_hut from "../assets/Wizards_hut.jpg";
import Road from "../assets/landscape.jpg";
import Dragons_lair from "../assets/Dragons_lair.jpg";
import Forest from "../assets/Forest.jpg";
import Pasture from "../assets/Pasture.jpg";
import Village from "../assets/Village.jpg";
import Inn from "../assets/Inn.jpg";
import Prison from "../assets/Prison.jpg";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState();
  const [hp, setHp] = useState();
  const [coins, setCoins] = useState();
  const [locations, setLocations] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [backgroundImage, setBackgroundImage] = useState(imageUrl);
  const [items, setItems] = useState();
  const [exchanging, setExchanging] = useState(null);
  const [exchanged, setExchanged] = useState(null);
  const [npcLives, setNpcLives] = useState({});

  const [teleportProduction, setTeleportProduction] = useState();
  const [travelProduction, setTravelProduction] = useState();

  useEffect(() => {
    const location = getCurrentLocation(game?.world);
    const mainHero = getMainHero(location);
    const productions = game?.available_productions;

    setCurrentLocation(location);
    if (location?.Name) {
      switch (location.Name) {
        case "Road":
          setBackgroundImage(Road);
          break;
        case "Wizards_hut":
          setBackgroundImage(Wizards_hut);
          break;
        case "Dragons_lair":
          setBackgroundImage(Dragons_lair);
          break;
        case "Forest":
          setBackgroundImage(Forest);
          break;
        case "Pasture":
          setBackgroundImage(Pasture);
          break;
        case "Village":
          setBackgroundImage(Village);
          break;
        case "Inn":
          setBackgroundImage(Inn);
          break;
        case "Prison":
          setBackgroundImage(Prison);
          break;
        default:
          setBackgroundImage(Road);
      }
    }

    setHp(mainHero?.Attributes.HP);
    setCoins(mainHero?.Attributes.Money);
    setItems(mainHero?.Items);

    setTeleportProduction(getTeleportationProductions(productions));
    setTravelProduction(getTravelProductions(productions));
  }, [game]);

  const resetDataGame = () => {
    setHp(100);
    setCoins(10);
    setLocations();
    setCurrentLocation();
    setBackgroundImage(imageUrl);
    setItems();
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
    game,
    setGame,
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
    teleportProduction,
    setTeleportProduction,
    travelProduction,
    setTravelProduction,
  };

  return <GameContext.Provider value={providerValue}>{children}</GameContext.Provider>;
};

function getCurrentLocation(worldData) {
  const loc = worldData?.find(location => {
    return location?.Characters?.some(character => character.Name === "Main_hero");
  });
  return loc;
}

function getMainHero(location) {
  const hero = location?.Characters?.find(character => character.Name === "Main_hero");
  return hero;
}

function getTeleportationProductions(productions) {
  const teleportationsId = productions?.findIndex(production =>
    production.prod.Title.includes("Teleportation"),
  );
  if (teleportationsId !== -1 && teleportationsId !== undefined) {
    const teleportations = productions[teleportationsId].variants.map(v => {
      return { production: productions[teleportationsId].prod, variant: v };
    });
    return teleportations;
  }
  return [];
}

function getTravelProductions(productions) {
  const travelId = productions?.findIndex(production =>
    production.prod.Title.includes("Location change"),
  );
  if (travelId !== -1 && travelId !== undefined) {
    const travel = productions[travelId].variants.map(v => {
      return { production: productions[travelId].prod, variant: v };
    });
    return travel;
  }
  return [];
}
