const h = document.getElementById('horas')
const m = document.getElementById('minutos')
const s = document.getElementById('segundos')

const relogio = setInterval(function time() { 
    let dateToday = new Date()
    let hr = dateToday.getHours() //hora atual do sistema
    let min = dateToday.getMinutes()//minuto atual do sistema
    let seg = dateToday.getSeconds()//segundos atual do sistema

    if (h < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + min;

    h.textContent = hr;
    m.textContent = min;
    s.textContent = seg;
})