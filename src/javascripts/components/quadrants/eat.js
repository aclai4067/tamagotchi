import utilities from '../../helpers/utilities';
import './quadrants.scss';
import '../progressBar/progressBar.scss';

let full = 100;
const eatProgress = `
  <div class='progressBar'>
    <div id='eatBarPercent' class='progressFill'></div>
  </div>
`;

const eatArr = [
  {
    id: 'eat0',
    icon: '<i class="eat0Btn fas fa-ice-cream"></i>',
    points: -3,
  },
  {
    id: 'eat1',
    icon: '<i class="eat1Btn fas fa-apple-alt"></i>',
    points: 10,
  },
  {
    id: 'eat2',
    icon: '<i class="eat2Btn fas fa-pizza-slice"></i>',
    points: -3,
  },
  {
    id: 'eat3',
    icon: '<i class="eat3Btn fas fa-carrot"></i>',
    points: 10,
  },
];

const updateFullness = (e) => {
  const selectedFood = e.target.classList.value;
  const selectedFoodParent = e.target.parentNode.classList.value;
  for (let n = 0; n < eatArr.length; n += 1) {
    if (selectedFood.includes(eatArr[n].id) || selectedFoodParent.includes(eatArr[n].id)) {
      full += eatArr[n].points;
    }
    if (full > 100) {
      full = 100;
    } else if (full < 0) {
      full = 0;
    }
  }
  const fullnessString = `${eatProgress} <div id='eatProgressPercent'>${full}%</div>`;
  utilities.printToDom('fullScore', fullnessString);
  document.getElementById('eatBarPercent').style.width = `${full}%`;
  return full;
};

const printEatBtns = () => {
  let eatString = `
      <div class='row'>
    `;
  for (let i = 0; i < eatArr.length; i += 1) {
    eatString += `
      <button type='button' id='${eatArr[i].id}' class='${eatArr[i].id}Btn'>${eatArr[i].icon}</button>
    `;
  }
  eatString += `
      </div>
      <div id='fullScore' class='row'>
        ${eatProgress}
        <div id='eatProgressPercent'>${full}%</div>
      </div>
      <h2 class='category'>Eat</h2>
    `;
  utilities.printToDom('eat', eatString);
  for (let x = 0; x < eatArr.length; x += 1) {
    document.getElementById(eatArr[x].id).addEventListener('click', updateFullness);
  }
};

const fullHealth = () => full;

export default { printEatBtns, fullHealth };
