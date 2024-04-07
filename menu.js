

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('btn-toggle');
    btn.addEventListener('click', function () {
        let menu = document.getElementById('menu-toggle');
        menu.style.display = 'block'
        btn.style.visibility = 'hidden'
    });

    let crossBtn = document.getElementById('cross-toggle')
    crossBtn.addEventListener('click', function () {
        let menu = document.getElementById('menu-toggle')
        menu.style.display = 'none'
        let btn = document.getElementById('btn-toggle')
        btn.style.visibility = 'visible'

    })
});
