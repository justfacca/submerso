function CreateList() {

  this.create = (content, link) => {
  const ul = document.querySelector('#navigation-ul');
  const li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('li-navigation');
  li.innerHTML = `<a href="${link}">${content}</a>`;
  }
  
}

const newCreate = new CreateList;
newCreate.create('Star Plus', '/src/lib/strp/strp.html');
newCreate.create('ESPN', '/src/lib/esp/esp.html');
newCreate.create('Premiere', '/src/lib/pmr/pmr.html');
