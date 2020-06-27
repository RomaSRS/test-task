
 
// var myMap;

// // Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);

// function init () {
//     myMap = new ymaps.Map('map', {
//         center:[52.093333, 23.698168],
//         zoom:15
//     });
//     myMap.controls
//     // Кнопка изменения масштаба.
//     .add('zoomControl', { left: 5, top: 5 })
//     // Список типов карты
//     .add('typeSelector')
//     // Стандартный набор кнопок
//     .add('mapTools', { left: 35, top: 5 });
//     myPlacemark = new ymaps.Placemark([52.093333, 23.698168], {
//         hintContent: 'Студия "Пинцет"'
//     });

// myMap.geoObjects.add(myPlacemark);
// }

// function parallax(event) {
    
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed');
//         layer.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000+pageYOffset*speed/200}px)`;
//     });
// }
// document.addEventListener('mousemove', parallax);

let elements = document.getElementsByClassName('input-phone');

for (let i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{375}(29)000-00-00',
  });
}
const popup = document.getElementsByClassName('popup')[0];
const popupConfirm = document.getElementsByClassName('popup-confirm')[0];

function scrollToSection() {
  event.preventDefault();
  document.querySelector('section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


function popupClose(){
  popupConfirm.style.display = 'none';
  overlay.style.display = 'none';
}

function closePopUpConfirm() {
  popupConfirm.style.display = 'none';
}

popupConfirm.addEventListener("click", closePopUpConfirm);

function submitForm(){
  event.preventDefault();
  popup.style.display = 'none';
  popupConfirm.style.display = 'block';
  popupConfirm.style.top = `${pageYOffset+ 100}px`;
}
