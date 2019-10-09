import './progressBar.scss';
import eat from '../quadrants/eat';
import play from '../quadrants/play';
import fight from '../quadrants/fight';
import sleep from '../quadrants/sleep';

const printProgressBar = () => {
  const healthString = `
    <div id='healthScore' class='row'>
        <div class='progressBar'>
            <div id='healthBarPercent' class='progressFill'></div>
        </div>
    </div>
  `;
  document.getElementById('progress').innerHTML = healthString;
};

const updateHealth = () => {
  setInterval(() => {
    const health = (eat.fullHealth() + play.funHealth() + fight.strengthHealth() + sleep.energyHealth()) / 4;
    document.getElementById('healthBarPercent').style.width = `${health}%`;
  }, 3000);
};

export default { printProgressBar, updateHealth };
