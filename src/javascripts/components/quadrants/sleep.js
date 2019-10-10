import utilities from '../../helpers/utilities';

let energy = 50;
const sleepProgress = `
  <div class='progressBar'>
    <div id='sleepBarPercent' class='progressFill'></div>
  </div>
`;

const sleepArr = [
  {
    id: 'sleep0',
    icon: '<i class="sleep0Btn fas fa-bed"></i>',
    points: 50,
  },
  {
    id: 'sleep1',
    icon: '<i class="sleep1Btn fas fa-moon"></i>',
    points: 60,
  },
];

const updateEnergy = (e) => {
  const selectedActivity = e.target.classList.value;
  const selectedActivityParent = e.target.parentNode.classList.value;
  for (let n = 0; n < sleepArr.length; n += 1) {
    if (selectedActivity.includes(sleepArr[n].id) || selectedActivityParent.includes(sleepArr[n].id)) {
      energy += sleepArr[n].points;
    }
    if (energy > 100) {
      energy = 100;
    } else if (energy < 0) {
      energy = 0;
    }
  }
  const energyString = `${sleepProgress} <div id='sleepProgressPercent'>${energy}%</div>`;
  utilities.printToDom('energyScore', energyString);
  document.getElementById('sleepBarPercent').style.width = `${energy}%`;
  return energy;
};

const printSleepBtns = () => {
  let sleepString = `
      <h2 class='category'>Sleep</h2>
      <div class='bottomDiv'>
        <div class='row rightDiv'>
    `;
  for (let i = 0; i < sleepArr.length; i += 1) {
    sleepString += `
      <button type='button' id='${sleepArr[i].id}' class='${sleepArr[i].id}Btn healthBtns'>${sleepArr[i].icon}</button>
    `;
  }
  sleepString += `
        </div>
        <div id='energyScore' class='row'>
          ${sleepProgress}
          <div id='sleepProgressPercent'>${energy}%</div>
        </div>
      </div>
    `;
  utilities.printToDom('sleep', sleepString);
  for (let x = 0; x < sleepArr.length; x += 1) {
    document.getElementById(sleepArr[x].id).addEventListener('click', updateEnergy);
  }
};

const neglectSleepPenalty = () => {
  printSleepBtns();
  setInterval(() => {
    if (energy > 0) {
      energy -= 1;
      printSleepBtns();
      document.getElementById('sleepBarPercent').style.width = `${energy}%`;
    }
  }, 20000);
  return energy;
};

const energyHealth = () => energy;

export default { neglectSleepPenalty, energyHealth };
