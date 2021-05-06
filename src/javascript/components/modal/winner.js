import {showModal} from "./modal";

export function showWinnerModal(fighter) {
    showModal({title: `Winner is ${fighter.name}!`, bodyElement: 'gg', onClose: () => alert('Bye, loser..')})
  // call showModal function 
}
