document.getElementById('button-donate-first')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = inputFieldValueById('donate-money');
    const addAmount = textFieldValueById('amount-added');
    const remainBalance = balanceFieldValueById('self-balance');
    console.log(addMoney, addAmount);

    if (isNaN(addMoney) || addMoney < 0) {
      alert('Invalid Donation Amount');
    }
    else {

      const donateAmount = addAmount + addMoney;
      const newBalance = remainBalance - addMoney;
      document.getElementById('amount-added').innerText = donateAmount;
      document.getElementById('self-balance').innerText = newBalance;
      const p = document.createElement('p');
      p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
      console.log(p);

      // should be a common function
      document.getElementById('transaction-container').appendChild(p);


    }

  })
