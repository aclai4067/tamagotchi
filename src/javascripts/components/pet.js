import utilities from '../helpers/utilities';

const printPet = () => {
  const petString = `
    <img class='kittyImg' src='/src/images/cat-outline.png' alt='kitty' />
  `;
  utilities.printToDom('pet', petString);
};

export default { printPet };
