document.getElementById('donation-button')
.addEventListener('click', function () {
  showSectionById('add-section');
  showButtonById('donation-button');
})

document.getElementById('transaction-section')
.addEventListener('click', function () {
  showSectionById('transaction-container');
  showButtonById('transaction-section');
})
