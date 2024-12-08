document.getElementById('button-donate-third')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = inputFieldValueById('donate-money-third');
    const addAmount = textFieldValueById('amount-added-third');
    const remainBalance = balanceFieldValueById('self-balance');
    

    if (isNaN(addMoney) || addMoney < 0 || addMoney > remainBalance) {
      alert('Invalid Donation Amount');
    }
    else {

      const donateAmount = addAmount + addMoney;
      const newBalance = remainBalance - addMoney;
      
      document.getElementById('amount-added-third').innerText = donateAmount;
      document.getElementById('self-balance').innerText = newBalance;
      
      const div = document.createElement('div');
      div.classList.add('border-2', 'border-solid', 'border-bg-tertiary', 'rounded-lg', 'p-4');
      const currentDate = new Date();
      const formatDate = currentDate.toString();
      div.innerHTML = `
          <p class="text-xl font-bold">${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p><br>
          <p class="text-base font-light text-secondary">Date: ${formatDate}</p>

      `;

      document.getElementById('transaction-container').appendChild(div);


      


    }

  })
