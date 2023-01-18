let curtain = document.getElementById('curtain');
let light = document.getElementById('light');
let magican = document.getElementById('magican');
let hat = document.getElementById('hat');
let pigeon = document.getElementById('pigeon');
let rabbit = document.getElementById('rabbit');
let switcher = document.getElementById('lamp-switcher');

const upCurtain = () => {
    curtain.style.transition = 'bottom 1s';
    curtain.style = 'bottom: 100vh';
}

const downSwitcher = () => {
    switcher.style.top = '13vh';
}

const upSwitcher = () => {
    switcher.style.top = '6vh';
}

const turnLight = () => {
    if (light.className == 'light__off') {
        light.className = 'light__on';
        magican.style.opacity = '1';
        hat.style.opacity = '1';
        rabbit.style.opacity = '1';
        pigeon.style.opacity = '1';
    }
    else {
        light.className = 'light__off';
        magican.style.opacity = '0';
        hat.style.opacity = '0';
        rabbit.style.opacity = '0';
        pigeon.style.opacity = '0';
    }

}

const showPigeon = () => {
    pigeon.style.transition = 'bottom 0.5s 0.5s, opacity 0.8s'
    rabbit.style.transition = 'bottom 0.5s 0s, opacity 0.8s'
    pigeon.style.bottom = '35vh';
    rabbit.style.bottom = '10vh';
}

const showRabbit = () => {
    rabbit.style.transition = 'bottom 0.5s 0.5s, opacity 0.8s'
    pigeon.style.transition = 'bottom 0.5s 0s, opacity 0.8s'
    rabbit.style.bottom = '35vh';
    pigeon.style.bottom = '10vh';
}