import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import eat from './components/quadrants/eat';
import fight from './components/quadrants/fight';
import pet from './components/pet/pet';
import play from './components/quadrants/play';
import sleep from './components/quadrants/sleep';
import health from './components/progressBar/progressBar';

const init = () => {
  eat.neglectEatPenalty();
  fight.neglectFightPenalty();
  pet.printPet();
  play.neglectPlayPenalty();
  sleep.neglectSleepPenalty();
  health.printProgressBar();
  health.updateHealth();
};

init();
