import utilities from '../../helpers/utilities';

let strength = 100;
const fightProgress = `
  <div class='progressBar'>
    <div id='fightBarPercent' class='progressFill'></div>
  </div>
`;

const fightArr = [
  {
    id: 'fight0',
    icon: '<i class="fight0Btn fas fa-user-ninja"></i>',
    points: -10,
  },
  {
    id: 'fight1',
    icon: '<i class="fight1Btn fas fa-running"></i>',
    points: 1,
  },
];

const updateStrength = (e) => {
  const selectedActivity = e.target.classList.value;
  const selectedActivityParent = e.target.parentNode.classList.value;
  for (let n = 0; n < fightArr.length; n += 1) {
    if (selectedActivity.includes(fightArr[n].id) || selectedActivityParent.includes(fightArr[n].id)) {
      strength += fightArr[n].points;
    }
    if (strength > 100) {
      strength = 100;
    } else if (strength < 0) {
      strength = 0;
    }
  }
  const strengthString = `${fightProgress} <div id='fightProgressPercent'>${strength}%</div>`;
  utilities.printToDom('strengthScore', strengthString);
  document.getElementById('fightBarPercent').style.width = `${strength}%`;
  return strength;
};

const printFightBtns = () => {
  let fightString = `
      <h2 class='category'>Fight</h2>
      <div class='bottomDiv'>
        <div class='row'>
    `;
  for (let i = 0; i < fightArr.length; i += 1) {
    fightString += `
      <button type='button' id='${fightArr[i].id}' class='${fightArr[i].id}Btn healthBtns'>${fightArr[i].icon}</button>
    `;
  }
  fightString += `
        </div>
        <div id='strengthScore' class='row'>
          ${fightProgress}
          <div id='fightProgressPercent'>${strength}%</div>
        </div>
      </div>
    `;
  utilities.printToDom('fight', fightString);
  for (let x = 0; x < fightArr.length; x += 1) {
    document.getElementById(fightArr[x].id).addEventListener('click', updateStrength);
  }
};

const neglectFightPenalty = () => {
  printFightBtns();
  setInterval(() => {
    if (strength > 0) {
      strength -= 1;
      printFightBtns();
      document.getElementById('fightBarPercent').style.width = `${strength}%`;
    }
  }, 20000);
  return strength;
};

const strengthHealth = () => strength;

export default { neglectFightPenalty, strengthHealth };
