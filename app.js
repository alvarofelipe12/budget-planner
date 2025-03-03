const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = undefined;
};

const presentAlert = async () => {
  const alert = document.createElement('ion-alert');
  alert.header = 'Invalid inputs';
  alert.message = 'Please enter a valid reason and amount!';
  alert.buttons = ['Okay'];

  document.body.appendChild(alert);
  await alert.present();
}

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().lenght <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().lenght <= 0
  ) {
    presentAlert();
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;
  expensesList.appendChild(newItem);
  // https://stackoverflow.com/a/1133814/5360905
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener('click', clear);
