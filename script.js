var input_tomate = document.getElementById('quant_tomate');
var input_patate = document.getElementById('quant_patate');

var input_ptom = document.getElementById('prix_tomate');
var input_ppat = document.getElementById('prix_patate');

var panier = document.getElementById('val_panier');

function update_quant_plus_tomate() {

var value_tomate = input_tomate.value;

if(value_tomate === "" || value_tomate === null)
{
input_tomate.value = "1"
total_panier()
}
else {
var_somme = 0;
var_somme = Number(input_tomate.value) + 1
input_tomate.value = var_somme
total_panier()
}
}

function update_quant_minus_tomate() {

var value_tomate = input_tomate.value;
    
if(value_tomate === "0" || value_tomate === null)
{
input_tomate.value = "0"
total_panier()
}
else {
var_somme = 0;
var_somme = Number(input_tomate.value) - 1
input_tomate.value = var_somme
total_panier()
}
}

function update_quant_plus_patate() {

var value_patate = input_patate.value;
    
if(value_patate === "" || value_patate === null)
{
input_patate.value = "1"
total_panier()
}
else {
var_somme = 0;
var_somme = Number(input_patate.value) + 1
input_patate.value = var_somme
total_panier()
}
}

function update_quant_minus_patate() {

var value_patate = input_patate.value;
        
if(value_patate === "0" || value_patate === null)
{
input_patate.value = "0"
total_panier()
}
else {
var_somme = 0;
var_somme = Number(input_patate.value) - 1
input_patate.value = var_somme
total_panier()
}
}

var bp_tom = document.getElementById('bp_tomate');
var bm_tom = document.getElementById('bm_tomate');
var bp_pat = document.getElementById('bp_patate');
var bm_pat = document.getElementById('bm_patate');

bp_tom.addEventListener('click', update_quant_plus_tomate)
bm_tom.addEventListener('click', update_quant_minus_tomate)
bp_pat.addEventListener('click', update_quant_plus_patate)
bm_pat.addEventListener('click', update_quant_minus_patate)


function total_panier() {

var p_tom = input_ptom.value;
var p_pat = input_ppat.value;

var value_tomate = input_tomate.value;
var value_patate = input_patate.value;

var somme = 0;
somme = Number((value_tomate * p_tom) + (value_patate * p_pat));

if(somme == 0 || somme == NaN)
{
panier.value = "";
}
else {
panier.value = somme + " TND"
}
}

var b_sup_tom = document.getElementById('bm_supp_tomate')
var b_sup_pat = document.getElementById('bm_supp_patate')

function supp_tom() {
input_tomate.value = "0"
var div_tom = document.getElementById('div_tomate'); 
div_tom.parentNode.removeChild(div_tom);
total_panier()
}

function supp_pat() {
input_patate.value = "0"
var div_pat = document.getElementById('div_patate');
div_pat.parentNode.removeChild(div_pat);
total_panier()
}

b_sup_tom.addEventListener('click', supp_tom)
b_sup_pat.addEventListener('click', supp_pat)

var btn_heart_tom = document.getElementById('b_heart_toma');
var btn_heart_pat = document.getElementById('b_heart_pat')

btn_heart_tom.addEventListener('click', fill_h_tom)
btn_heart_pat.addEventListener('click', fill_h_pat)


function fill_h_tom() {
btn_heart_tom.classList.toggle("fill_heart");
}

function fill_h_pat() {
btn_heart_pat.classList.toggle("fill_heart");
}

