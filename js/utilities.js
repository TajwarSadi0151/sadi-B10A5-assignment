function inputFieldValueById (id) {

  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;

}

function textFieldValueById (id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function balanceFieldValueById (id) {

  const myBalance = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(myBalance);
  return balanceNumber;
}

function showSectionById (id) {

  document.getElementById('add-section').classList.add('hidden');
  document.getElementById('transaction-container').classList.add('hidden');
  
  document.getElementById(id).classList.remove('hidden');
}

function showButtonById (id) {

  document.getElementById('donation-button').classList.remove('bg-tertiary');
  document.getElementById('transaction-section').classList.remove('bg-tertiary');
  document.getElementById(id).classList.add('bg-tertiary');
}