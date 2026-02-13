/**
 * Eggit Sunny - Level & Theme Library
 * Contains all aesthetic and layout data.
 */

// 1. THEMES (The Skin)
window.themeLibrary = {
    // --- ZONE 1: DIGITAL ---
    "matrix": {
        zoneName: "THE MATRIX", bgType: "grid", renderStyle: "neon",
        bg: "#051105", grid: "#122512", platformBody: "#1a3a1a", platformGlow: "#39ff14",
        runeColor: "0, 255, 0", uiColor: "#00FF00", particle: "digital"
    },
    "synthwave": {
        zoneName: "THE MATRIX", bgType: "grid", renderStyle: "neon",
        bg: "#1a0b1a", grid: "#331033", platformBody: "#2a002a", platformGlow: "#ff00ff",
        runeColor: "255, 0, 255", uiColor: "#00FFFF", particle: "digital"
    },
    "ice": {
        zoneName: "THE MATRIX", bgType: "grid", renderStyle: "neon",
        bg: "#05111a", grid: "#0d2b3a", platformBody: "#002a3a", platformGlow: "#00ffff",
        runeColor: "0, 255, 255", uiColor: "#ffffff", particle: "digital"
    },

    // --- ZONE 2: THE FOUNDRY ---
    "rust": {
        zoneName: "THE FOUNDRY", bgType: "industrial", renderStyle: "industrial",
        bg: "#1a0500", grid: "#331500", platformBody: "#3d1e12", platformGlow: "#ff4500",
        runeColor: "255, 140, 0", uiColor: "#ff8c00", particle: "ash"
    },
    "magma": {
        zoneName: "THE FOUNDRY", bgType: "industrial", renderStyle: "industrial",
        bg: "#1a0000", grid: "#3a0000", platformBody: "#2a0000", platformGlow: "#ff0000",
        runeColor: "255, 100, 0", uiColor: "#ff0000", particle: "ash"
    },
    "steel": {
        zoneName: "THE FOUNDRY", bgType: "industrial", renderStyle: "industrial",
        bg: "#101010", grid: "#2a2a2a", platformBody: "#2f2f2f", platformGlow: "#ffffff",
        runeColor: "150, 150, 150", uiColor: "#ffffff", particle: "ash"
    }
};

// 2. LEVELS (The Skeleton)
window.levelLibrary = {
    // === ZONE 1: DIGITAL (1-9) ===
    1: { theme: "matrix", platforms: [ { x: 300, y: 4950, width: 200, height: 20 }, { x: 500, y: 4800, width: 150, height: 15 }, { x: 200, y: 4650, width: 150, height: 15 }, { x: 500, y: 4500, width: 140, height: 15 }, { x: 150, y: 4350, width: 130, height: 15 }, { x: 450, y: 4200, width: 120, height: 15 }, { x: 150, y: 4050, width: 120, height: 15 }, { x: 250, y: 3900, width: 300, height: 40, isGoal: true } ] },
    2: { theme: "matrix", platforms: [ { x: 300, y: 4950, width: 150, height: 20 }, { x: 550, y: 4800, width: 100, height: 15 }, { x: 250, y: 4650, width: 100, height: 15 }, { x: 550, y: 4500, width: 90, height: 15 }, { x: 250, y: 4350, width: 90, height: 15 }, { x: 500, y: 4200, width: 80, height: 15 }, { x: 300, y: 4050, width: 300, height: 40, isGoal: true } ] },
    3: { theme: "matrix", platforms: [ { x: 350, y: 4950, width: 100, height: 20 }, { x: 350, y: 4750, width: 70, height: 15 }, { x: 200, y: 4600, width: 60, height: 15 }, { x: 500, y: 4600, width: 60, height: 15 }, { x: 350, y: 4450, width: 60, height: 15 }, { x: 200, y: 4300, width: 50, height: 15 }, { x: 500, y: 4300, width: 50, height: 15 }, { x: 350, y: 4150, width: 200, height: 40, isGoal: true } ] },
    4: { theme: "synthwave", platforms: [ { x: 350, y: 4950, width: 200, height: 20 }, { x: 100, y: 4800, width: 100, height: 15 }, { x: 600, y: 4650, width: 100, height: 15 }, { x: 350, y: 4500, width: 100, height: 15 }, { x: 100, y: 4350, width: 80, height: 15 }, { x: 600, y: 4200, width: 80, height: 15 }, { x: 350, y: 4050, width: 300, height: 40, isGoal: true } ] },
    5: { theme: "synthwave", platforms: [ { x: 350, y: 4950, width: 150, height: 20 }, { x: 350, y: 4800, width: 80, height: 15 }, { x: 200, y: 4650, width: 80, height: 15 }, { x: 500, y: 4650, width: 80, height: 15 }, { x: 350, y: 4500, width: 70, height: 15 }, { x: 350, y: 4350, width: 70, height: 15 }, { x: 150, y: 4200, width: 60, height: 15 }, { x: 550, y: 4200, width: 60, height: 15 }, { x: 350, y: 4000, width: 300, height: 40, isGoal: true } ] },
    6: { theme: "synthwave", platforms: [ { x: 350, y: 4950, width: 150, height: 20 }, { x: 50, y: 4800, width: 70, height: 15 }, { x: 650, y: 4650, width: 70, height: 15 }, { x: 100, y: 4500, width: 60, height: 15 }, { x: 600, y: 4350, width: 60, height: 15 }, { x: 150, y: 4200, width: 50, height: 15 }, { x: 550, y: 4050, width: 50, height: 15 }, { x: 350, y: 3900, width: 300, height: 40, isGoal: true } ] },
    7: { theme: "ice", platforms: [ { x: 350, y: 4950, width: 150, height: 20 }, { x: 350, y: 4750, width: 60, height: 15 }, { x: 350, y: 4550, width: 60, height: 15 }, { x: 200, y: 4400, width: 50, height: 15 }, { x: 500, y: 4400, width: 50, height: 15 }, { x: 350, y: 4250, width: 50, height: 15 }, { x: 350, y: 4050, width: 300, height: 40, isGoal: true } ] },
    8: { theme: "ice", platforms: [ { x: 350, y: 4950, width: 150, height: 20 }, { x: 100, y: 4750, width: 60, height: 15 }, { x: 600, y: 4750, width: 60, height: 15 }, { x: 350, y: 4550, width: 50, height: 15 }, { x: 150, y: 4350, width: 50, height: 15 }, { x: 550, y: 4350, width: 50, height: 15 }, { x: 350, y: 4150, width: 40, height: 15 }, { x: 350, y: 3950, width: 300, height: 40, isGoal: true } ] },
    9: { theme: "ice", platforms: [ { x: 350, y: 4950, width: 150, height: 20 }, { x: 50, y: 4800, width: 50, height: 15 }, { x: 650, y: 4650, width: 50, height: 15 }, { x: 50, y: 4500, width: 50, height: 15 }, { x: 650, y: 4350, width: 50, height: 15 }, { x: 350, y: 4200, width: 40, height: 15 }, { x: 350, y: 4000, width: 300, height: 40, isGoal: true } ] },

    // === ZONE 2: THE FOUNDRY (10-19) ===
    10: { 
        theme: "rust", 
        platforms: [
            { x: 300, y: 4950, width: 200, height: 20 }, 
            { x: 100, y: 4780, width: 120, height: 15 },
            { x: 600, y: 4610, width: 120, height: 15 },
            { x: 250, y: 4440, width: 100, height: 15 },
            { x: 450, y: 4270, width: 100, height: 15 },
            { x: 350, y: 4100, width: 300, height: 40, isGoal: true }
        ] 
    },
    11: {
        theme: "rust",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 50,  y: 4780, width: 100, height: 15 },
            { x: 350, y: 4610, width: 100, height: 15 },
            { x: 650, y: 4440, width: 100, height: 15 },
            { x: 350, y: 4270, width: 100, height: 15 },
            { x: 350, y: 4100, width: 300, height: 40, isGoal: true }
        ]
    },
    12: {
        theme: "rust",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 150, y: 4750, width: 90, height: 15 },
            { x: 550, y: 4750, width: 90, height: 15 },
            { x: 350, y: 4550, width: 90, height: 15 },
            { x: 100, y: 4350, width: 80, height: 15 },
            { x: 600, y: 4350, width: 80, height: 15 },
            { x: 350, y: 4150, width: 300, height: 40, isGoal: true }
        ]
    },
    13: {
        theme: "magma",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 250, y: 4750, width: 80, height: 15 },
            { x: 450, y: 4750, width: 80, height: 15 },
            { x: 350, y: 4550, width: 80, height: 15 },
            { x: 100, y: 4350, width: 70, height: 15 },
            { x: 600, y: 4350, width: 70, height: 15 },
            { x: 350, y: 4150, width: 300, height: 40, isGoal: true }
        ]
    },
    14: {
        theme: "magma",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 50,  y: 4750, width: 70, height: 15 },
            { x: 650, y: 4600, width: 70, height: 15 },
            { x: 50,  y: 4450, width: 70, height: 15 },
            { x: 650, y: 4300, width: 70, height: 15 },
            { x: 350, y: 4150, width: 300, height: 40, isGoal: true }
        ]
    },
    15: {
        theme: "magma",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 350, y: 4750, width: 60, height: 15 },
            { x: 200, y: 4550, width: 60, height: 15 },
            { x: 500, y: 4550, width: 60, height: 15 },
            { x: 350, y: 4350, width: 60, height: 15 },
            { x: 350, y: 4150, width: 300, height: 40, isGoal: true }
        ]
    },
    16: {
        theme: "steel",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 100, y: 4750, width: 60, height: 15 },
            { x: 350, y: 4600, width: 60, height: 15 },
            { x: 600, y: 4450, width: 60, height: 15 },
            { x: 350, y: 4300, width: 50, height: 15 },
            { x: 350, y: 4100, width: 300, height: 40, isGoal: true }
        ]
    },
    17: {
        theme: "steel",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 50, y: 4750, width: 60, height: 15 },
            { x: 700, y: 4600, width: 60, height: 15 },
            { x: 200, y: 4450, width: 50, height: 15 },
            { x: 550, y: 4300, width: 50, height: 15 },
            { x: 350, y: 4100, width: 300, height: 40, isGoal: true }
        ]
    },
    18: {
        theme: "steel",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 350, y: 4750, width: 50, height: 15 },
            { x: 200, y: 4550, width: 50, height: 15 },
            { x: 500, y: 4550, width: 50, height: 15 },
            { x: 350, y: 4350, width: 40, height: 15 },
            { x: 350, y: 4150, width: 300, height: 40, isGoal: true }
        ]
    },
    19: {
        theme: "steel",
        platforms: [
            { x: 350, y: 4950, width: 150, height: 20 },
            { x: 50,  y: 4750, width: 50, height: 15 },
            { x: 650, y: 4600, width: 50, height: 15 },
            { x: 350, y: 4450, width: 40, height: 15 },
            { x: 150, y: 4300, width: 40, height: 15 },
            { x: 550, y: 4300, width: 40, height: 15 },
            { x: 350, y: 4100, width: 300, height: 40, isGoal: true }
        ]
    }
};