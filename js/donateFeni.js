document.getElementById('button-donate-second')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = inputFieldValueById('donate-money-second');
    const addAmount = textFieldValueById('amount-added-second');
    const remainBalance = balanceFieldValueById('self-balance');
    

    if (isNaN(addMoney) || addMoney < 0 || addMoney > remainBalance) {
      alert('Invalid Donation Amount');
    }
    else {

      const donateAmount = addAmount + addMoney;
      const newBalance = remainBalance - addMoney;
      
      document.getElementById('amount-added-second').innerText = donateAmount;
      document.getElementById('self-balance').innerText = newBalance;
      
      const div = document.createElement('div');
      div.classList.add('border-2', 'border-solid', 'border-bg-tertiary', 'rounded-lg', 'p-4');
      const currentDate = new Date();
      const formatDate = currentDate.toString();
      div.innerHTML = `
          <p class="text-xl font-bold">${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p><br>
          <p class="text-base font-light text-secondary">Date: ${formatDate}</p>

      `;

      document.getElementById('transaction-container').appendChild(div);


      


    }

  })
