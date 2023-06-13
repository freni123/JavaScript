const dataTableBody = document.getElementById('dataTableBody');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const addressInput = document.getElementById('address');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');
const updateButton = document.getElementById('update');
const clearAllButton = document.getElementById('clearAll');

// Load existing user data from localStorage
let data = JSON.parse(localStorage.getItem('data')) || [];

// Function to render the user data list
function renderData() {
    dataTableBody.innerHTML = '';

    const rows = data.map((item, index) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.address}</td>
          <td>${item.email}</td>
          <td>
            <button class="btn btn-primary btn-sm edit-btn">Edit</button>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
          </td>
        </tr>
      `);
    dataTableBody.innerHTML = rows.join('');
    //addeventlistener to edit data
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => editData(index));
    });
    //addeventlistener to delete data
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => removeData(index));
    });
}
// Function to add user data
function addData() {
    const name = nameInput.value;
    const age = ageInput.value;
    const address = addressInput.value;
    const email = emailInput.value;

    if (name && age && address && email) {
        const newData = {
            name,
            age,
            address,
            email
        };
        data.push(newData);

        localStorage.setItem('data', JSON.stringify(data));
        renderData();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}
//function to edit user data
function editData(index) {
    const item = data[index];

    nameInput.value = item.name;
    ageInput.value = item.age;
    addressInput.value = item.address;
    emailInput.value = item.email;

    submitButton.style.display = 'none';
    updateButton.style.display = 'inline-block';
    updateButton.setAttribute('data-index', index);
}
// function to update user data
function updateData() {
    const index = updateButton.getAttribute('data-index');
    const name = nameInput.value;
    const age = ageInput.value;
    const address = addressInput.value;
    const email = emailInput.value;

    if (name && age && address && email) {
        data[index] = {
            name,
            age,
            address,
            email
        };
        localStorage.setItem('data', JSON.stringify(data));
        renderData();
        clearForm();
        submitButton.style.display = 'inline-block';
        updateButton.style.display = 'none';
        updateButton.removeAttribute('data-index');
    } else {
        alert('Please fill in all fields.');
    }
}
//function to remove user data
function removeData(index) {
    data.splice(index, 1);

    localStorage.setItem('data', JSON.stringify(data));
    renderData();
}
//function to clearform
function clearForm() {
    nameInput.value = '';
    ageInput.value = '';
    addressInput.value = '';
    emailInput.value = '';
}
//function to clearalldata
function clearAllData() {
    data = [];
    localStorage.removeItem('data');
    renderData();
}
submitButton.addEventListener('click', addData);
updateButton.addEventListener('click', updateData);
clearAllButton.addEventListener('click', clearAllData);

renderData();