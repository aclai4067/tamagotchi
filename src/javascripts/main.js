import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import eat from './components/eat';

const init = () => {
  document.getElementById('pet').innerHTML = '<i class="far fa-moon"></i>';
  eat.eat();
};

init();
