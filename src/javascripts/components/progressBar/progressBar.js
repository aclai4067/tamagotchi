import './progressBar.scss';
import eat from '../quadrants/eat';
import play from '../quadrants/play';
import fight from '../quadrants/fight';
import sleep from '../quadrants/sleep';
import utilities from '../../helpers/utilities';

const health = (eat.fullHealth() + play.funHealth() + fight.strengthHealth() + sleep.energyHealth()) / 4;

const printProgressBar = () => {
  const healthString = `
    <div id='healthScore' class='row'>
        <div class='progressBar'>
            <div id='healthBarPercent' class='progressFill'></div>
        </div>
    </div>
  `;
  utilities.printToDom('progress', healthString);
};

const updateHealth = () => health;

export default { printProgressBar, updateHealth };
