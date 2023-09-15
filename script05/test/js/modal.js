function Picture(pic, title, artist, year) {
    this.pic = pic;
    this.title = title;
    this.artist = artist;
    this.year = year;
}

Picture.prototype.action = function () {
    document.querySelector('#modal').style.display = 'block';
    document.querySelector('#modal dl>dt').innerHTML = this.title;
    document.querySelector('#modal dl>dd>img').setAttribute('src', this.pic);
    document.querySelector('#modal dl>dd>img').setAttribute('alt', this.title);
    document.querySelector('#modal dl>dd:nth-child(3)').innerHTML = this.artist;
    document.querySelector('#modal dl>dd:nth-child(4)').innerHTML = this.year;
};

const myPic = [
    new Picture('images/pic01.jpg', '에펠탑의 신랑신부', '마르크 샤갈', 1938),
    new Picture('images/pic02.jpg', '여인2', '피카소', 1937),
    new Picture('images/pic03.jpg', '발레수업', '드가', 1871),
    new Picture(
        'images/pic04.jpg',
        '피아노치는소녀',
        '오귀스트 르누아르',
        1989
    ),
];

const btn = document.querySelectorAll('ul>li');
const close = document.querySelector('#modal .close');

btn.forEach(function (item, index) {
    item.onclick = function () {
        myPic[index].action();
    };
});

close.onclick = function () {
    document.querySelector('#modal').style.display = 'none';
};
