import utilities from '../../helpers/utilities';
import './pet.scss';

let petString = '';

const printPetName = () => {
  const selectedName = document.getElementById('petName').value;
  if (selectedName !== '') {
    petString = `
      <h1 id='selectedName'>${selectedName}</h1>
      <img class='kittyImg' id='petPic' src='/src/images/cat-outline.png' alt='kitty' />
    `;
    utilities.printToDom('pet', petString);
  }
};

const printPet = () => {
  petString = `
    <form class='row nameForm' onSubmit='return false'>
      <input type='text' id='petName' placeholder='Name your Catagotchi!' required></input>
      <button type='submit' id='namePet'>Submit</button>
    </form>
    <img class='kittyImg' id='petPic' src='/src/images/cat-outline.png' alt='kitty' />
  `;
  utilities.printToDom('pet', petString);
  document.getElementById('namePet').addEventListener('click', printPetName);
};

export default { printPet };
