export const safetyRecommendations = [
  {
    id: 1,
    category: "Weather",
    name: "Tornado",
    description: "A tornado is a violent windstorm characterized by twisting, funnel-shaped clouds. It can cause widespread destruction and pose a serious threat to life and property.",
    safetyRecom: "Seek shelter in a basement or small, windowless interior room. Cover yourself with a mattress or heavy blankets to protect against flying debris. Listen to local news or a NOAA Weather Radio for updates.",
    precautions: [
      "Stay away from windows and cover yourself to protect against flying glass.",
      "If you are in a mobile home, abandon it immediately and seek a more substantial shelter.",
      // Add more specific precautions as needed.
    ],
  },
  {
    id: 2,
    category: "Natural Disaster",
    name: "Earthquake",
    description: "An earthquake is the shaking of the Earth's surface caused by a sudden release of energy. It can result in structural damage and can be followed by aftershocks.",
    safetyRecom: "Drop, Cover, and Hold On. Get under a sturdy piece of furniture and protect your head and neck. Stay indoors until the shaking stops. Afterward, be cautious of aftershocks.",
    precautions: [
      "Avoid standing near windows, glass, and heavy objects that could fall.",
      "If you are outside, move to an open area away from buildings, trees, streetlights, and utility wires.",
      // Add more specific precautions as needed.
    ],
  },
  {
    id: 3,
    category: "Weather",
    name: "Hurricane",
    description: "A hurricane is a tropical storm with strong winds and heavy rain. It can cause flooding, storm surges, and extensive damage to coastal areas.",
    safetyRecom: "Evacuate if authorities advise. If staying, board up windows, secure outdoor items, and stay in a secure, interior room. Listen to weather updates and follow instructions.",
    precautions: [
      "Prepare an emergency kit with food, water, flashlights, and batteries.",
      "Follow evacuation routes and do not drive through flooded roads.",
      // Add more specific precautions as needed.
    ],
  },
  {
    id: 4,
    category: "Energy",
    name: "Power Outage",
    description: "A power outage is a loss of electrical power to an area. It can occur due to severe weather, equipment failure, or other factors.",
    safetyRecom: "Use flashlights for lighting, not candles. Unplug appliances to prevent surges when power is restored. Conserve phone battery and check with your utility provider for updates.",
    precautions: [
      "Keep a supply of non-perishable food that doesn't require cooking.",
      "Use generators outdoors and follow safety guidelines to avoid carbon monoxide poisoning.",
      // Add more specific precautions as needed.
    ],
  },
  {
    id: 5,
    category: "Health",
    name: "Pandemic",
    description: "A pandemic is an outbreak of a disease that occurs on a global scale, affecting a large number of people. It can lead to widespread illness and strain on healthcare systems.",
    safetyRecom: "Follow guidelines from health authorities. Practice good hygiene, such as frequent handwashing. Maintain social distancing and wear masks in public places.",
    precautions: [
      "Stay informed about the latest developments and follow advice from healthcare professionals.",
      "Avoid unnecessary travel and large gatherings.",
      // Add more specific precautions as needed.
    ],
  },
  {
    id: 6,
    category: "Fire",
    name: "Wildfire",
    description: "A wildfire is an uncontrolled fire that spreads rapidly through vegetation. It can pose a significant threat to communities, wildlife, and the environment.",
    safetyRecom: "Evacuate if authorities advise. If staying, create a defensible space around your home, clear debris, and keep a water supply and fire extinguisher handy.",
    precautions: [
      "Monitor local fire alerts and be ready to leave at a moment's notice.",
      "Do not use equipment that could create sparks in fire-prone areas.",
      // Add more specific precautions as needed.
    ],
  },
  // Add more incidents and safety recommendations with appropriate categories.
];

// Access individual recommendations and their properties as needed.
// const tornadoSafetyRecommendation = safetyRecommendations.find(item => item.name === "Tornado");
// console.log(tornadoSafetyRecommendation.safetyRecom);
