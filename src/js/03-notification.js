const refs = {
  notification: document.querySelector('.js-alert'),
};

const NOTIFICATION_DELAY = 3000;
let timeOutID = null;

refs.notification.addEventListener('click', onNotificationClick);

console.log(refs.notification);
showNotification();

function onNotificationClick(evt) {
  hiddeNotification();
  clearInterval(timeOutID);
}

function showNotification() {
  refs.notification.classList.add('is-visible');
  timeOutID = setTimeout(() => {
    console.log('выдкладенне закриття');
    hiddeNotification();
  }, NOTIFICATION_DELAY);
}

function hiddeNotification() {
  refs.notification.classList.remove('is-visible');
}
