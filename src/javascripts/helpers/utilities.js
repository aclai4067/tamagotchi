const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const totalHealth = (e) => {
  const selectedBtn = e.target.id;
  if (selectedBtn !== 'namePet') {
    console.log('quad click');
  }
};

export default { printToDom, totalHealth };
