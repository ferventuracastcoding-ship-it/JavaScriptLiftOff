// ==========================================
// SATURN HASH TABLE
// 50 MODULES + 200 SPACESHIPS
// ==========================================

// Create a hash table class.
class SaturnHashTable {

    // Constructor creates the table.
    constructor(size = 101) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function converts a string into an index.
    hash(key) {
        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i) * (i + 1);
        }

        return total % this.size;
    }

    // Insert a key/value pair.
    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Update existing key.
        for (const pair of this.table[index]) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }

        // Add new key/value pair.
        this.table[index].push({
            key: key,
            value: value
        });
    }

    // Retrieve a value.
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

    // Delete a key.
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

    // Display all occupied buckets.
    display() {
        this.table.forEach((bucket, index) => {
            if (bucket && bucket.length > 0) {
                console.log(`Bucket ${index}:`, bucket);
            }
        });
    }
}

// ==========================================
// CREATE SATURN HASH TABLE
// ==========================================

const saturn = new SaturnHashTable();

// ==========================================
// 50 SATURN MODULES
// ==========================================

const modules = [
    "SaturnCore",
    "SaturnOrbit",
    "SaturnRings",
    "RingScanner",
    "RingMiner",
    "RingNavigator",
    "TitanModule",
    "EnceladusModule",
    "MimasModule",
    "RheaModule",
    "DioneModule",
    "IapetusModule",
    "TethysModule",
    "HyperionModule",
    "PhoebeModule",
    "JanusModule",
    "EpimetheusModule",
    "AtmosphereModule",
    "MagnetosphereModule",
    "GravityModule",
    "IceModule",
    "HydrogenModule",
    "HeliumModule",
    "StormModule",
    "CloudModule",
    "RadiationModule",
    "CommunicationModule",
    "NavigationModule",
    "PropulsionModule",
    "FuelModule",
    "EngineModule",
    "SolarPanelModule",
    "PowerModule",
    "LifeSupportModule",
    "CrewModule",
    "CargoModule",
    "ResearchModule",
    "ScienceModule",
    "CameraModule",
    "RadarModule",
    "LidarModule",
    "DroneModule",
    "MiningModule",
    "LandingModule",
    "DockingModule",
    "EmergencyModule",
    "DefenseModule",
    "CommandModule",
    "MissionControlModule"
];

// Add 50 modules to the hash table.
modules.forEach((module, index) => {
    saturn.set(module, {
        id: index + 1,
        system: "Saturn",
        status: "ONLINE"
    });
});

// ==========================================
// CREATE 200 SPACESHIPS
// ==========================================

for (let i = 1; i <= 200; i++) {

    const shipID = `Spaceship-${String(i).padStart(3, "0")}`;

    saturn.set(shipID, {
        id: i,
        type: "Saturn Explorer",
        destination: "Saturn",
        ringAccess: true,
        status: i % 5 === 0 ? "DOCKED" : "ORBITING"
    });
}

// ==========================================
// 20 CONSOLE.LOG STATEMENTS
// ==========================================

// 1
console.log("=== SATURN HASH TABLE INITIALIZED ===");

// 2
console.log("Hash table size:", saturn.size);

// 3
console.log("Number of Saturn modules:", modules.length);

// 4
console.log("Number of spaceships: 200");

// 5
console.log("Saturn Rings Module:", saturn.get("SaturnRings"));

// 6
console.log("Ring Scanner:", saturn.get("RingScanner"));

// 7
console.log("Titan Module:", saturn.get("TitanModule"));

// 8
console.log("Saturn Core:", saturn.get("SaturnCore"));

// 9
console.log("Spaceship 001:", saturn.get("Spaceship-001"));

// 10
console.log("Spaceship 050:", saturn.get("Spaceship-050"));

// 11
console.log("Spaceship 100:", saturn.get("Spaceship-100"));

// 12
console.log("Spaceship 150:", saturn.get("Spaceship-150"));

// 13
console.log("Spaceship 200:", saturn.get("Spaceship-200"));

// 14
console.log("Hash index for SaturnRings:", saturn.hash("SaturnRings"));

// 15
console.log("Hash index for Spaceship-001:", saturn.hash("Spaceship-001"));

// 16
console.log("Ring Miner status:", saturn.get("RingMiner").status);

// 17
console.log("Spaceship 100 destination:", saturn.get("Spaceship-100").destination);

// 18
console.log("Spaceship 200 status:", saturn.get("Spaceship-200").status);

// 19
console.log("Deleting Spaceship-200:", saturn.delete("Spaceship-200"));

// 20
console.log("Spaceship-200 after deletion:", saturn.get("Spaceship-200"));

// ==========================================
// OPTIONAL: DISPLAY HASH TABLE
// ==========================================

// saturn.display();
