let expenseType = document.querySelector(".dropdown-toggle");
let expenseTypeSavings = document.querySelector("#type-savings");
let expenseTypeExpense = document.querySelector("#type-expense");
let expenseTypeInvestment = document.querySelector("#type-investment");
let btnSubmitExpense = document.querySelector(".btn-submit-expense");
let trackingText = document.querySelector(".tracking-text");
let monthlyAmount = document.querySelector(".month-amount");
let valueInput = document.querySelector(".input-expense-value");
let total = 0;
let descriptionInput = document.querySelector(".input-expense-description");
let expenseList = document.querySelector(".expense-List");
let calcContainer = document.querySelector(".calc-container")
let dateInput = document.querySelector(".input-expense-date");
let budgetContainer = document.querySelector(".budget-container"); 
let savings = 0;
let expenses = 0;
let investments = 0;

// changing the color of the check button
expenseTypeSavings.addEventListener('click',()=>{
    btnSubmitExpense.classList.remove('btn-success');
    btnSubmitExpense.classList.remove('btn-danger');
    btnSubmitExpense.classList.remove('btn-warning');
    btnSubmitExpense.classList.add('btn-success');
    trackingText.innerHTML = "Tracking Savings 💰";
});

expenseTypeExpense.addEventListener('click',()=>{
    btnSubmitExpense.classList.remove('btn-success');
    btnSubmitExpense.classList.remove('btn-danger');
    btnSubmitExpense.classList.remove('btn-warning');
    btnSubmitExpense.classList.add('btn-danger');
    trackingText.innerHTML="Tracking Expense 🧾"
});

expenseTypeInvestment.addEventListener('click',()=>{
    btnSubmitExpense.classList.remove('btn-success');
    btnSubmitExpense.classList.remove('btn-danger');
    btnSubmitExpense.classList.remove('btn-warning');
    btnSubmitExpense.classList.add('btn-warning');
    trackingText.innerHTML = "Tracking Investments 🏠"
});

btnSubmitExpense.addEventListener('click',() => {
    if(descriptionInput.value=="" || valueInput.value=="" || dateInput.value=="")
        console.log("details error");
    else{
    let value = valueInput.value;
    if(btnSubmitExpense.classList.contains("btn-success")){
        total+= parseInt(value);
        monthlyAmount.innerHTML = total;
        savings+=parseInt(value);
    }

    else if(btnSubmitExpense.classList.contains("btn-danger")){
        total-= parseInt(value);
        monthlyAmount.innerHTML = total;
        expenses+=parseInt(value);
    }

    else{
        total+= parseInt(value);
        monthlyAmount.innerHTML = total;
        investments+=parseInt(value);
    }
}
});

btnSubmitExpense.addEventListener('click',AddNew);

function AddNew() {
    if(descriptionInput.value=="" || valueInput.value=="" || dateInput.value=="")
        alert("Please enter the details.");
    else{
    const newDiv = document.createElement("div");
    console.log("add");
    newDiv.classList.add('bottom-border','list','fs-grey','row');
    calcContainer.appendChild(newDiv);

    const date_div= document.createElement("div");
    newDiv.appendChild(date_div);
    date_div.classList.add('col-5','list-date');
    date_div.innerHTML = dateInput.value;

    const description_div= document.createElement("div");
    newDiv.appendChild(description_div);
    description_div.classList.add('col-5','list-description');
    description_div.innerHTML = descriptionInput.value;

    const Value_div= document.createElement("div");
    newDiv.appendChild(Value_div);
    Value_div.classList.add('col-2','list-value');
    Value_div.innerHTML = valueInput.value;

    if(btnSubmitExpense.classList.contains("btn-success"))
        Value_div.classList.add('expense-saving');

    else if(btnSubmitExpense.classList.contains("btn-danger"))
        Value_div.classList.add('expense-cost');

    else
        Value_div.classList.add('expense-investment');
    }
    console.log(savings);
    console.log(expenses);
    console.log(investments);
}

let ctx = document.getElementById('expense-chart').getContext('2d');
let labels = ['Savings','Expenses','Investments'];
let colorHex = ['#039300','#e40000','#f48803'];

btnSubmitExpense.addEventListener('click',()=>{
let expenseChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Savings', 'Expenses', 'Investments'],
        datasets: [{
            data: [savings, expenses, investments],
            backgroundColor: [
                'rgba(32, 137, 56, 1)',
                'rgba(255, 84, 98, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 0.5
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    }
});
})

btnSubmitExpense.addEventListener('click',reset);

function reset() {
    descriptionInput.value = "";
    valueInput.value = "";
    dateInput.value = "";
}