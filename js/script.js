let el = document.getElementById('running_line');alert(el);
let text = el.innerHTML;

setInterval(function ()
{
    text = text[text.length-1] + text.substring(0, text.length-1);
    el.innerHTML = text;
}, 100);
