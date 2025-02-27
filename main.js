const array = [
    {
       harc :  "Rákóczi szabadságharc",
       harcolo : "Kuruc",
       hadero : "70.000",
       harcolo2 : "Labanc",
        hadero2 : "60.000"
    },
    {
        harc : "48-as szabadságharcú",
        harcolo : "Osztrák császárság (+ Orosz birodalom)",
        hadero : "170.000 (+ 200.000)" ,
        harcolo2 : "Magyar királyság",
        hadero2 : "170.000"
    },

    {
        harc : "I. világháború",
        harcolo : "Antant",
        hadero : "43 millió",
        harcolo2 : "Központi hatalmak",
        hadero2 : "25 millió"
    },
    {
        harc : "Bosworthi csata",
        harcolo : "Angolok (York + Lancester)",
        hadero : "15.000",

    }
]

const formtablazat = [

    {
        labelfor : "harc_nev",
        inputtext : "1. Harc neve:",
        type : "text"
    },
    {
        labelfor : "harcolo1",
        inputtext : " 1. Harcoló fél:",
        type : "text"
    },

    {
        labelfor : "hadero1",
        inputtext : " 1. Haderő:",
        type : "text"
    },

    {
        labelfor : "harcolo2",
        inputtext : " 2. Harcoló fél:",
        type : "text"
    },

    {
        labelfor : "hadero2",
        inputtext : " 2. Haderő:",
        type : "text"
    }
]

const fejlec = [
    "Harc megnevezése",
    "Szembenálló felek",
    "Haderő"
]

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')
  
document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)

fejlecem(fejlec,thead)  
tablazat(array,tbody)
formgeneralas(formtablazat)

const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const harcok = document.getElementById('harc_nev')
    const harcolok = document.getElementById('harcolo1')
    const haderok = document.getElementById('hadero1')
    const harcolok2 = document.getElementById('harcolo2')
    const haderok2 = document.getElementById('hadero2')

    const form1 = e.currentTarget
    const hiba = form1.querySelectorAll('.error')
    for(const errorhiba of hiba){
        errorhiba.innerHTML = ""
    }

    let valid = true

    if(!validatefield(harcok, 'Kötelező mező')){
        valid = false
    }
    if(!validatefield(harcolok, 'Kötelező mező')){
        valid = false
    }
    if(!validatefield(haderok, 'Kötelező mező')){
        valid = false
    }

    if(harcolok2.value !== '') {
        if(!validatefield(haderok2, 'Kötelező mező')) {
            valid = false
        }
    }
    if(haderok2.value !== '') {
        if(!validatefield(harcolok2, 'Kötelező mező')) {
            valid = false
        }
    }
    
    if(valid){
    const harcok_value = harcok.value
    const harcolok_value = harcolok.value
    const haderok_value = haderok.value
    const harcolok2_value = harcolok2.value
    const haderok2_value = haderok2.value

    const new_array = {
        harc : harcok_value,
        harcolo : harcolok_value,
        hadero : haderok_value,
        harcolo2 : harcolok2_value,
        hadero2 : haderok2_value
    }
    
    array.push(new_array)
    tbody.innerHTML = ''
    tablazat(array,tbody)
    form.reset()
}
})

