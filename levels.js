// levels.js
let platforms = [
    { x: 350, y: 4950, width: 100, height: 15 } 
];

const totalPlatforms = 40;

for (let i = 1; i <= totalPlatforms; i++) {
    let previous = platforms[i-1];
    let verticalGap = Math.floor(Math.random() * (160 - 120 + 1)) + 120;
    let maxHorizontalGap = 250; 
    let nextX = previous.x + (Math.random() * (maxHorizontalGap * 2) - maxHorizontalGap);

    // Ensure platforms stay within the new 800px width
    if (nextX < 50) nextX = 50;
    if (nextX > 650) nextX = 650; // 800 minus platform width (80) and a little padding

    // Is this the very last platform?
    let isLast = (i === totalPlatforms);

    platforms.push({
        x: isLast ? 300 : nextX,      // Center it if it's the last one
        y: previous.y - verticalGap,
        width: isLast ? 200 : 80,     // Make the goal wider
        height: isLast ? 30 : 15,
        isGoal: isLast                // Set the flag only for the final one
    });
}