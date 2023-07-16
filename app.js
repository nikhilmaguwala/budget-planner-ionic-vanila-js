const reasonInput = document.querySelector('#input-reason')
const amountInput = document.querySelector('#input-amount')
const cancelBtn = document.querySelector('#btn-cancel')
const confirmBtn = document.querySelector('#btn-confirm')
const expensesList = document.querySelector('#expenses-list')
const totalExpenseOutput = document.querySelector('#total-expense')
const alertController = document.querySelector('ion-alert')

let totalExpense = 0;

const clearInputs = () => {
    reasonInput.value = ''
    amountInput.value = ''
}

confirmBtn.addEventListener('click', async () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim().length <= 0 || enteredAmount <=0 || enteredAmount.trim().length <= 0) {
        alertController.message = 'Please Enter Valid Reason and Amount!'
        alertController.header = 'Invalid Inputs!'
        alertController.buttons = ['OK']

        await alertController.present();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $ ' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpense += Number(enteredAmount);
    totalExpenseOutput.textContent = totalExpense
    clearInputs();
})

cancelBtn.addEventListener('click', clearInputs)