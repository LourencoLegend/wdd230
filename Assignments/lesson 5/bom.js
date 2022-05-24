// const listsize = document.querySelector('#favchap');
// const buildButton = document.querySelector('button');
// const list = document.querySelector('#list');

// buildButton.addEventListener('click', function() {
// let size = Number(listsize.value);

// for (let i = 1; i <= size; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = `Item: <strong>${i}</strong>`;
//     list.appendChild(li);
// }
// });

const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });