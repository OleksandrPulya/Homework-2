const floatParticles = [];
const burstParticles = [];
const FLOAT_COUNT = 140;

for (let i = 0; i < FLOAT_COUNT; i++) {
    // Виправлено: Particle в однині
    const p = new Particle(
        Math.random() * width, Math.random() * height, "float"
    );
    p.life = Math.random() * p.maxLife;
    floatParticles.push(p);
}

function spawnHeartBurst(x, y) {
    const count = 140;
    for (let i = 0; i < count; i++) {
        // Виправлено: Particle в однині
        burstParticles.push(new Particle(x, y, "burst"));
    }
}

const BLUE_SHADES = [
    "#3b82f6", "#60a5fa",
    "#93c5fd", "#2563eb",
    "#dbeafe", "#1d4ed8"
];
