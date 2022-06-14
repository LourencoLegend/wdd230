const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value != '' ) {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';

        listItem.append(deleteBtn);
        output.append(listItem);
        
        deleteBtn.addEventListener('click', function () {
            output.removeChild(listItem);
            input.focus;
        });
        input.value = '';
        input.focus;
    }
});