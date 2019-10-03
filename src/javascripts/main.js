import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';

const init = () => {
  eat.printEatBtns();
  play.printPlayBtns();
};

init();
