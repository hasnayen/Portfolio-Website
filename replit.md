# Abu Hasnayen Zillanee — Portfolio Website

## Overview

A football game portfolio for Abu Hasnayen Zillanee — Product Dev Executive, CTO, and AI Engineer. The user enters their name (shown on a jersey), then dribbles a footballer around a pitch. Walking over glowing zone circles reveals portfolio info. Kicking the ball into the top goal opens the full portfolio page.

## How It Works

1. **Name Entry** — User types their name → it appears on the footballer's jersey. Choose a kit colour.
2. **Football Pitch** — Top-down 2D HTML5 Canvas pitch. Dribble with WASD or Arrow keys.
3. **Zone Spots** — 7 glowing circles on the pitch. Walk into them to see Abu's info in a sidebar card.
4. **Shoot for Goal** — Press SPACE near the top goal to kick the ball. If it goes in → Goal!
5. **Full Profile** — After scoring, a full-page portfolio is revealed with tabbed sections.

## Controls

- **WASD / Arrow keys** — Move player
- **SPACE** — Shoot ball toward goal
- **Mobile** — D-pad buttons at bottom

## Zone Positions on Pitch

| Zone | Position |
|------|----------|
| About | (185, 135) |
| Experience | (410, 155) |
| Projects | (640, 135) |
| Skills | (155, 310) |
| Research | (660, 310) |
| Education | (260, 430) |
| Contact | (560, 430) |

Goal post at top center (W/2, ~PITCH.y)

## Architecture

- **Frontend** — React + TypeScript + Vite
  - `/` → `FootballGame` component (pure Canvas 2D, no Three.js)
  - Goal screen shows full tabbed portfolio (About, Experience, Projects, Skills, Research)
- **Backend** — Express (AI chat endpoint exists at POST /api/chat but is unused in main flow)
- **CarGame.tsx** — Previous 3D car game (no longer routed)
- **Portfolio.tsx** — Previous scrollable portfolio (no longer routed)

## Key Files

- `client/src/components/FootballGame.tsx` — Main football game (entry + pitch + goal screen)
- `client/src/App.tsx` — Routes / to FootballGame
- `server/routes.ts` — AI chat endpoint (unused)

## Portfolio Content

- **Name**: Abu Hasnayen Zillanee
- **Role**: Product Dev Executive · CTO · AI Engineer
- **Location**: Lalbagh, Dhaka 1211, Bangladesh
- **Email**: hasnayen3072@gmail.com
- **Phone**: +880 1841343493
- **LinkedIn**: linkedin.com/in/abu-hasnayen-zillanee-7543a11a5/
- **GitHub**: github.com/hasnayen
- **Stats**: +3 years, 4 publications, 6 projects, CGPA 3.67/4.00
