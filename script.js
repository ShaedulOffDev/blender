const $ = x => document.querySelector(x);
const $$ = x => document.querySelectorAll(x);

var img = $('#images');
var temp = $('.temp').content;
var Fragment = document.createDocumentFragment();
var like = $('.fa-heart');
var array = [];

for (var i = 0; i < images.length; i++) {
    var tempClone = temp.cloneNode(true);
    tempClone.querySelector('.box').dataset.id = images[i].id;
    tempClone.querySelector('.fa-bookmark').dataset.id = i;
    tempClone.querySelector('.id').textContent = images[i].id;
    tempClone.querySelector('img').src = images[i].src;
    tempClone.querySelector('img').alt = images[i].name;
    tempClone.querySelector('.link').href = images[i].src;
    tempClone.querySelector('.name').textContent = images[i].name;
    Fragment.appendChild(tempClone)
}
var postTemp = $('#post').content;
var saver = $('.saver');
img.addEventListener('click', (x) => {
    if (x.target.classList.contains('fa-heart')) {
        x.target.classList.toggle('text-danger')
    }
    if (x.target.classList.contains('fa-bookmark')) {
        saver.textContent = ""
        if (x.target.classList.contains('text-dark')) {
            x.target.classList.remove('text-dark')
            for (var i = 0; i < array.length; i++) {
                if (x.target.dataset.id == array[i]) {
                    array.splice(i, 1)
                }
            }
        } else {
            x.target.classList.add('text-dark')
            array.push(x.target.dataset.id)
        }
        for (var i = 0; i < array.length; i++) {
            var postTempClone = postTemp.cloneNode(true);
            postTempClone.querySelector('img').src = images[array[i]].src;
            postTempClone.querySelector('img').alt = images[array[i]].name;
            postTempClone.querySelector('.fa-trash-alt').dataset.number = array[i];
            saver.appendChild(postTempClone)
        }
    }
})
document.body.addEventListener('mousemove', () =>{
    if(array.length == 0){
        saver.textContent = ''; 
        var h1 = document.createElement('h1');
        h1.textContent = 'EMPTY';
        h1.classList.add('text-light')
        saver.appendChild(h1);
    }
})

saver.addEventListener('click', (e) => {
    var bookmark = $$('.fa-bookmark');
    if(e.target.classList.contains('fa-trash-alt')){
        saver.textContent = '';
        for (var i = 0; i < array.length; i++) {
            if (e.target.dataset.number == array[i]) {
                array.splice(i, 1)
                bookmark[e.target.dataset.number].classList.remove('text-dark')
            }
        }
        for (var i = 0; i < array.length; i++) {
            var postTempClone = postTemp.cloneNode(true);
            postTempClone.querySelector('img').src = images[array[i]].src;
            postTempClone.querySelector('img').alt = images[array[i]].name;
            postTempClone.querySelector('.fa-trash-alt').dataset.number = array[i];
            saver.appendChild(postTempClone)
        }
    }
})

img.appendChild(Fragment)

var save = $('.save')
var close = $('.close')
var wrap = $('.wrap')
close.addEventListener('click', () => {
    wrap.style.transform = 'translateX(100vw)';
})
save.addEventListener('click', () => {
    wrap.style.transform = 'translateX(0)';
})