function angka(i) {
    document.Calc.Input.value += i;
}
function tambah() {
    document.Calc.Input.value += ' + ';
}
function koma() {
    document.Calc.Input.value += '.';
}
function kurang() {
    document.Calc.Input.value += ' - ';
}
function kali() {
    document.Calc.Input.value += ' * ';
}
function bagi() {
    document.Calc.Input.value += ' / ';
}
function mod() {
    document.Calc.Input.value += ' % ';
}
function hasil() {
    document.getElementById("hasil").innerHTML = eval(Calc.Input.value);
}
function hapus() {
    document.Calc.Input.value = '';
}