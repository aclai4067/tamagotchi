import './progressBar.scss';
import eat from '../quadrants/eat';
import play from '../quadrants/play';
import fight from '../quadrants/fight';
import sleep from '../quadrants/sleep';

const health = (eat.fullHealth() + play.funHealth() + fight.strengthHealth() + sleep.energyHealth()) / 4;

const printProgressBar = () => {
  console.log(health);
};

export default { printProgressBar };
