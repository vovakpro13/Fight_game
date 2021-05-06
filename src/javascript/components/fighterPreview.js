import {createElement} from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`,
    });

    if (fighter) {
        const {name, health, attack, defense, source} = fighter;
        fighterElement.innerHTML = `
<div class="fighterDescription">
<div class="fighterName"><h4>${name}</h4></div>

    <img class="fighterImage" src=${source} alt='Fighter ${name}'/>
    <div class="fighterInfo">
        
        <div class="health block">
            <img class="icon" src="https://www.flaticon.com/svg/vstatic/svg/3004/3004458.svg?token=exp=1620333124~hmac=c11f45fce46e20e06e248b76bd911661" alt="health">
            <span class="value">${health}</span>
        </div>
         <div class="attack block">
            <img class="icon" src="https://www.flaticon.com/svg/vstatic/svg/263/263394.svg?token=exp=1620333709~hmac=481714764b33c7f8186c1d6f87a4d323" alt="health">
            <span class="value">${attack}</span>
        </div>
         <div class="defense block">
            <img class="icon" src="https://www.flaticon.com/svg/vstatic/svg/595/595587.svg?token=exp=1620333842~hmac=d60f9015b30c56ec1fbe850eae862eb1" alt="health">
            <span class="value">${defense}</span>
        </div>
    </div>
    
</div>
            
        `;
    }

    // todo: show fighter info (image, name, health, etc.)

    return fighterElement;
}

export function createFighterImage(fighter) {
    const {source, name} = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes,
    });

    return imgElement;
}
