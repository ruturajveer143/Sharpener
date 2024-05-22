function submitExpense() {
    let expense = document.getElementById('expense');
    let description = document.getElementById('description');
    let category = document.getElementById('category');

    let id = Math.random();

    let obj = {
        "id": id,
        "expense": expense.value,
        "description": description.value,
        "category": category.options[category.selectedIndex].text
    }

    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(obj);
    localStorage.setItem('items', JSON.stringify(items));

    displayExpenses();
    expense.value = '';
    description.value = '';
    category.selectedIndex = 0;
}

function displayExpenses() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let ul = document.getElementById('expenseList');
    ul.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let li = document.createElement('li');
        let text = `Expense: ${item.expense}, Description: ${item.description}, Category: ${item.category}`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger btn-sm ms-2';
        deleteButton.addEventListener('click', function () {
            deleteItem(item.id);
        });

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'btn btn-secondary btn-sm ms-2';
        editButton.addEventListener('click', function () {
            editItem(item);
        });

        li.textContent = text;
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
    }
}

function deleteItem(id) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(items));
    displayExpenses();
}

function editItem(item) {
    document.getElementById('expense').value = item.expense;
    document.getElementById('description').value = item.description;
    document.getElementById('category').value = item.category;

    deleteItem(item.id);
}

document.addEventListener('DOMContentLoaded', function() {
    displayExpenses();
});