document.getElementById('infobtn').addEventListener('click', function() {
  const info = prompt('შეიყვანეთ ინფორმაცია:');
  
  if (info) {
      addInfoToList(info);
  } else {
      alert('შეიყვანეთ ინფორმაცია!!!!!');
  }
});

function addInfoToList(info) {
  const ul = document.getElementById('listul');
  const li = document.createElement('li');
  li.textContent = info;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'წაშლა';
  deleteButton.addEventListener('click', function() {
      ul.removeChild(li);
  });
  
  li.appendChild(deleteButton);
  ul.appendChild(li);
}