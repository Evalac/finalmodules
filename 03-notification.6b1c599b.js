var refs={notification:document.querySelector(".js-alert")},NOTIFICATION_DELAY=3e3,timeOutID=null;function onNotificationClick(i){hiddeNotification(),clearInterval(timeOutID)}function showNotification(){refs.notification.classList.add("is-visible"),timeOutID=setTimeout((function(){console.log("выдкладенне закриття"),hiddeNotification()}),NOTIFICATION_DELAY)}function hiddeNotification(){refs.notification.classList.remove("is-visible")}refs.notification.addEventListener("click",onNotificationClick),console.log(refs.notification),showNotification();
//# sourceMappingURL=03-notification.6b1c599b.js.map
