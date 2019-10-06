import utilities from '../../helpers/utilities';

let fun = 50;
const playProgress = `
  <div class='progressBar'>
    <div id='playBarPercent' class='progressFill'></div>
  </div>
`;

const playArr = [
  {
    id: 'play0',
    icon: '<i class="play0Btn fas fa-chess-knight"></i>',
    points: 2,
  },
  {
    id: 'play1',
    icon: '<i class="play1Btn fas fa-football-ball"></i>',
    points: 50,
  },
  {
    id: 'play2',
    icon: '<i class="play2Btn fas fa-swimmer"></i>',
    points: 2,
  },
  {
    id: 'play3',
    icon: '<i class="play3Btn fab fa-playstation"></i>',
    points: 50,
  },
];

const updateFun = (e) => {
  const selectedActivity = e.target.classList.value;
  const selectedActivityParent = e.target.parentNode.classList.value;
  for (let n = 0; n < playArr.length; n += 1) {
    if (selectedActivity.includes(playArr[n].id) || selectedActivityParent.includes(playArr[n].id)) {
      fun += playArr[n].points;
    }
    if (fun > 100) {
      fun = 100;
    } else if (fun < 0) {
      fun = 0;
    }
  }
  const funString = `${playProgress} <div id='playProgressPercent'>${fun}%</div>`;
  utilities.printToDom('funScore', funString);
  document.getElementById('playBarPercent').style.width = `${fun}%`;
  return fun;
};

const printPlayBtns = () => {
  let playString = `
      <div class='row rightDiv'>
    `;
  for (let i = 0; i < playArr.length; i += 1) {
    playString += `
      <button type='button' id='${playArr[i].id}' class='${playArr[i].id}Btn'>${playArr[i].icon}</button>
    `;
  }
  playString += `
      </div>
      <div id='funScore' class='row'>
        ${playProgress}
        <div id='playProgressPercent'>${fun}%</div>
      </div>
      <h2 class='category'>Play</h2>
    `;
  utilities.printToDom('play', playString);
  for (let x = 0; x < playArr.length; x += 1) {
    document.getElementById(playArr[x].id).addEventListener('click', updateFun);
  }
};

const funHealth = () => fun;

export default { printPlayBtns, funHealth };
