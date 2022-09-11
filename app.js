let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  Notification.requestPermission().then((param) => {
    if (param == "granted") {
      new Notification("Yo What is this !", {
        body: "This is new body  for this notification \n I just wanted to tell you that we create new Notification!",
        icon: "goggle-icon.png",
      });
    }
  });
});
