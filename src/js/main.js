function CreateList() {

  this.create = (content, link) => {
  const ul = document.querySelector('#navigation-ul');
  const li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('li-navigation');
  li.innerHTML = `<a href="${link}">${content}</a>`;
  }
  
}
//cria link no header
const newCreate = new CreateList;
newCreate.create('Star Plus', './src/lib/strp/strp.html');
newCreate.create('ESPN', './src/lib/esp/esp.html');
newCreate.create('Premiere', './src/lib/pmr/pmr.html');
newCreate.create('TNT', './src/lib/tnt/tnt.html');
newCreate.create('Sport TV', './src/lib/sptv/sptv.html');

//channel list
const chList = document.querySelector('#btn-two')
const responsiveUl = document.querySelector('#navigation-ul')

chList.addEventListener('click', () => {
  responsiveUl.style.display = 'flex'
  responsiveUl.style.left = '0px'
  responsiveUl.style.transition = '1s'
 
})

const btnExit = document.createElement('p')

 //create button exit
 btnExit.classList.add('btn-exit')
 responsiveUl.appendChild(btnExit)
 btnExit.innerText = 'Sair'

btnExit.addEventListener('click', () => {
  responsiveUl.style.left = '-600px'
})