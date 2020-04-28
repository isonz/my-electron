
let myNotification = new Notification('标题', {
    body: '通知正文内容'
});

myNotification.onclick = () => {
    console.log('通知被点击')
};
