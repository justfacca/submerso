const tntIframe = document.querySelector('#iframe')
const btnLeft = document.querySelector('#player-anterior')
const btnRight = document.querySelector('#player-proximo')
const play1 = '<iframe name=Player "" src="//%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%AF%E3%82%A6%E3%82%B0%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/ch.php?canal=tnt" frameborder=0 height=600 scrolling=no width=1000 allow="encrypted-media" allowFullScreen> </iframe>'
const play2 = '<iframe name=Player "" src="//%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%AF%E3%82%A6%E3%82%B0%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/ch.php?canal=space" frameborder=0 height=600 scrolling=no width=1000 allow="encrypted-media" allowFullScreen> </iframe>'

let contador = 0;
const listIframe = [play1, play2]

btnRight.addEventListener('click', () => {
  contador < 1 ? contador++ : contador = 0;
  tntIframe.innerHTML = listIframe[contador]
});

btnLeft.addEventListener('click', () => {
  contador > 0 ? contador-- : contador = 1;
  tntIframe.innerHTML = listIframe[contador]
  console.log(contador)
});