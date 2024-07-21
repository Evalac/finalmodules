const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

console.log(refs.notification);
showNotification();

function onNotificationClick(evt) {
  hiddeNotification();
}

function showNotification() {
  refs.notification.classList.add('.is-visible');
}

function hiddeNotification() {
  refs.notification.classList.remove('.is-visible');
}
