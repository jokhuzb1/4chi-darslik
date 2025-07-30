function addStudent(){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const field = document.getElementById('field').value;

    const table = document.getElementById('studentTable');
    const newRow = table.insertRow(); // Add new row at the end

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const fieldCell = newRow.insertCell(2);

    nameCell.textContent = name;
    ageCell.textContent = age;
    fieldCell.textContent = field;

    // Clear input fields after adding
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('field').value = '';
}