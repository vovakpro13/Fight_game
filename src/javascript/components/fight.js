import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {

    // resolve the promise with the winner when fight is over
  });
}

export function getDamage(attacker, defender) {
  return getHitPower(attacker) - getBlockPower(defender);
  // return damage
}

export function getHitPower(fighter) {
  const criticalHitChance = Math.random()* (2 - 1) + 1;
  const power = fighter.attack * criticalHitChance;
  return power ;
  // return hit power
}

export function getBlockPower(fighter) {
  const dodgeChance = Math.random()* (2 - 1) + 1;
  const power = fighter.defense * dodgeChance;
  return power ;
  // return block power
}
