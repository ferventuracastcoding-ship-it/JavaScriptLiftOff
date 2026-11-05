// ==========================================
// MARS HASH TABLE
// 50 MODULES + 200 SPACESHIPS
// ==========================================

// Create the Mars hash table.
class MarsHashTable {

    // Initialize the hash table.
    constructor(size = 101) {
        this.size = size;
        this.table = new Array(size);
    }

    // Convert a string key into a hash index.
    hash(key) {
        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i) * (i + 1);
        }

        return total % this.size;
    }

    // Insert data into the hash table.
    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        for (const pair of this.table[index]) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }

        this.table[index].push({
            key: key,
            value: value
        });
    }

    // Search for data.
    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return undefined;
        }

        for (const pair of this.table[index]) {
            if (pair.key === key) {
                return pair.value;
            }
        }

        return undefined;
    }

    // Delete data.
    delete(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return false;
        }

        const position = this.table[index].findIndex(
            pair => pair.key === key
        );

        if (position !== -1) {
            this.table[index].splice(position, 1);
            return true;
        }

        return false;
    }

    // Display occupied buckets.
    display() {
        this.table.forEach((bucket, index) => {
            if (bucket && bucket.length > 0) {
                console.log(`Bucket ${index}:`, bucket);
            }
        });
    }
}

// ==========================================
// CREATE MARS HASH TABLE
// ==========================================

const mars = new MarsHashTable();

// ==========================================
// 50 MARS MODULES
// ==========================================

const modules = [
    "MarsCore",
    "MarsOrbit",
    "MarsSurface",
    "MarsAtmosphere",
    "MarsRover",
    "MarsLander",
    "MarsHabitat",
    "MarsColony",
    "MarsBase",
    "MarsLaboratory",
    "MarsGreenhouse",
    "MarsWater",
    "MarsIce",
    "MarsSoil",
    "MarsMining",
    "MarsGeology",
    "MarsWeather",
    "MarsClimate",
    "MarsDustStorm",
    "MarsRadar",
    "MarsLidar",
    "MarsCamera",
    "MarsCommunication",
    "MarsNavigation",
    "MarsPropulsion",
    "MarsEngine",
    "MarsFuel",
    "MarsPower",
    "MarsSolar",
    "MarsBattery",
    "MarsLifeSupport",
    "MarsOxygen",
    "MarsHydrogen",
    "MarsResearch",
    "MarsScience",
    "MarsRobotics",
    "MarsDrone",
    "MarsCargo",
    "MarsTransport",
    "MarsLanding",
    "MarsLaunch",
    "MarsDocking",
    "MarsEmergency",
    "MarsDefense",
    "MarsCommand",
    "MarsMissionControl",
    "MarsTerraforming",
    "MarsExploration",
    "MarsColonyNetwork"
];

// Add all 50 modules.
modules.forEach((module, index) => {

    mars.set(module, {
        id: index + 1,
        planet: "Mars",
        status: "ONLINE"
    });

});

// ==========================================
// CREATE 200 MARS SPACESHIPS
// ==========================================

for (let i = 1; i <= 200; i++) {

    const shipID =
        `Mars-Spaceship-${String(i).padStart(3, "0")}`;

    mars.set(shipID, {

        id: i,

        type: "Mars Explorer",

        destination: "Mars",

        mission:
            i <= 50
                ? "Orbital Survey"
                : i <= 100
                ? "Surface Exploration"
                : i <= 150
                ? "Colony Construction"
                : "Deep Mars Research",

        status:
            i % 5 === 0
                ? "LANDED"
                : "IN ORBIT"

    });
}

// ==========================================
// 20 CONSOLE.LOG STATEMENTS
// ==========================================

// 1
console.log("=== MARS HASH TABLE INITIALIZED ===");

// 2
console.log("Hash table size:", mars.size);

// 3
console.log("Mars modules:", modules.length);

// 4
console.log("Mars spaceships: 200");

// 5
console.log("Mars Core:", mars.get("MarsCore"));

// 6
console.log("Mars Rover:", mars.get("MarsRover"));

// 7
console.log("Mars Habitat:", mars.get("MarsHabitat"));

// 8
console.log("Mars Water Module:", mars.get("MarsWater"));

// 9
console.log("Mars Spaceship 001:", mars.get("Mars-Spaceship-001"));

// 10
console.log("Mars Spaceship 050:", mars.get("Mars-Spaceship-050"));

// 11
console.log("Mars Spaceship 100:", mars.get("Mars-Spaceship-100"));

// 12
console.log("Mars Spaceship 150:", mars.get("Mars-Spaceship-150"));

// 13
console.log("Mars Spaceship 200:", mars.get("Mars-Spaceship-200"));

// 14
console.log(
    "Hash index for MarsCore:",
    mars.hash("MarsCore")
);

// 15
console.log(
    "Hash index for Mars-Spaceship-001:",
    mars.hash("Mars-Spaceship-001")
);

// 16
console.log(
    "Mars Terraforming status:",
    mars.get("MarsTerraforming").status
);

// 17
console.log(
    "Spaceship 100 mission:",
    mars.get("Mars-Spaceship-100").mission
);

// 18
console.log(
    "Spaceship 200 status:",
    mars.get("Mars-Spaceship-200").status
);

// 19
console.log(
    "Deleting Mars Spaceship 200:",
    mars.delete("Mars-Spaceship-200")
);

// 20
console.log(
    "Spaceship 200 after deletion:",
    mars.get("Mars-Spaceship-200")
);

// ==========================================
// OPTIONAL HASH TABLE DISPLAY
// ==========================================

// mars.display();
