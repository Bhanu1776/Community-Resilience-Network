<h1 align="center"> Community Resilience Network </h1>

## Problem Statement

In the face of increasing climate-related disasters and other
emergency situations, building resilient communities is paramount.
We seek innovative solutions to develop a comprehensive
Community Resilience Network (CRN) - a digital platform designed
to empower communities in preparing for, responding to, and
recovering from disasters. Participants are tasked with designing and
developing a web and mobile application that fosters community
collaboration, provides critical information, and facilitates disaster
preparedness and response. The CRN should encompass the
following features:

1. Provide `automated alerts and notifications` for various types of
disasters, including weather-related events, natural disasters, and
emergencies, along with safety recommendations.
2. Develop a `comprehensive directory` of local resources, including
emergency shelters, medical facilities, and community support
organizations.
3. Allow users to `report incidents`, hazards, and emergencies
in real-time, with `GeoLocation` and multimedia capabilities.
4. Implement `role-based access control` for community members,
local authorities, and emergency responders, each with specific
permissions.

## Technologies 🔧

- HTML, CSS, Javascript
- React
- NodeJs
- Express.js
- MongoDB
- TailwindCss
- Material UI(MUI)
- JWT Auth
- Bycrypt
- Progressive Web APP(PWA)  
- Tanstack React Query
- Google Maps API
- Internationalization(i18n)
- And much more 🎒

## Code Example/Issues 🔍

If you have any issues, please let me know in the issues section or directly to <sunkabhanu281202@gmail.com>

## Installation 💾

```bash
git clone https://github.com/Bhanu1776/Community-Resilience-Network.git
```

Create config.env file in `sever` folder and Fill your `.env` variables:

```env
MONGO = 
PORT = 
JWT_KEY = 
PUBLIC_KEY = 
PRIVATE_KEY = 
```

In the same way create '.env' file in your `client` folder:

```env
VITE_GOOGLE_API_KEY = "Your Own Google API key"
VITE_GOOGLE_CLIENT_ID = "Your Own generated Google Client ID"
VITE_PUBLIC_KEY = "Your Own Public key"
VITE_PRIVATE_KEY = "Your Own Private key"
VITE_API_BASE_URL = "https://communisafe.onrender.com/api/" 
VITE_PUBLIC_URL = "http://localhost:5173"
VITE_API_SUB= "http://localhost:8800/subscribe"
```

Install deps:

```bash
npm install
```

Run App from `Client` folder :

```bash
npm run dev
```

Simultaneously Run Node.js Server :

```bash
npm start
```
