export const GPU_ARMOR = [
  { name: 'GT-LP 2GB', vram: 2, reduction: 0.08, shieldCapacity: 15 },
  { name: 'RX TRI 12GB', vram: 12, reduction: 0.18, shieldCapacity: 30 },
  { name: 'TITAN RT 24GB', vram: 24, reduction: 0.30, shieldCapacity: 48 },
];

const RAM_MODULE_GB = 8;
const MAX_RAM = 24;

export function createDefense() {
  let tier = 0;
  return {
    ram: 0,
    energy: 0,
    get gpu() { return GPU_ARMOR[tier]; },
    get reduction() { return this.gpu.reduction + this.ram / RAM_MODULE_GB * 0.04; },
    get maxEnergy() { return this.gpu.shieldCapacity; },
    reset() {
      tier = 0;
      this.ram = this.energy = 0;
    },
    upgradeGpu() {
      if (tier === GPU_ARMOR.length - 1) return false;
      tier++;
      return true;
    },
    addRam() {
      if (this.ram >= MAX_RAM) return false;
      this.ram += RAM_MODULE_GB;
      return true;
    },
    recharge(amount) {
      const added = Math.max(0, Math.min(amount, this.maxEnergy - this.energy));
      this.energy += added;
      return added;
    },
    absorb(damage, online = true) {
      if (!online) return damage;
      const reduced = damage * (1 - this.reduction);
      const shield = Math.min(reduced, this.energy);
      this.energy -= shield;
      return reduced - shield;
    },
  };
}
