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

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')
  
document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)


const fejlec = [
    "Harc megnevezése",
    "Szembenálló felek",
    "Haderő"
]

function fejlecem(fejlec,thead){
    const tr = document.createElement('tr')
    thead.appendChild(tr)

    for(const fejelek of fejlec){
        const th = document.createElement('th')
        th.innerHTML = fejelek
        tr.appendChild(th)

   
    }

}

function tablazat(array,tbody){
    for(const elem of array){
        const tr = document.createElement('tr')
        tbody.appendChild(tr)
       
        const td1 = document.createElement('td')
        td1.innerHTML = elem.harc
        td1.rowSpan = 2
        tr.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerHTML = elem.harcolo
        tr.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerHTML = elem.hadero
        tr.appendChild(td3)

        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)

        

        if(elem.harcolo2 || elem.hadero2)
        {
        const td4 = document.createElement('td')
        td4.innerHTML = elem.harcolo2
        tr2.appendChild(td4)
    
        const td5 = document.createElement('td')
        td5.innerHTML = elem.hadero2
        tr2.appendChild(td5)
        }
    }
}

fejlecem(fejlec,thead)  
tablazat(array,tbody)

function formgeneralas(formtablazat){
    const form1 = document.createElement('form')
    form1.id = 'form'
    document.body.appendChild(form1)

    for(const elem of formtablazat){
        const div = document.createElement('div')
        form1.appendChild(div)

        const label = document.createElement('label')
        label.htmlFor = elem.labelfor
        label.innerHTML = elem.inputtext
        div.appendChild(label)

        const input = document.createElement('input')
        input.id = elem.labelfor
        input.type = elem.type
        div.appendChild(input)

        const error = document.createElement('div')
        error.className = 'error'
        div.appendChild(error)
    }

    const button = document.createElement('button')
    button.innerHTML = 'Hozzáadás'
    form1.appendChild(button)
}


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


function validatefield(htmlelement, errormessage){
    let valid = true
    if(htmlelement.value === ''){
       const parentElement = htmlelement.parentElement
       let error = parentElement.querySelector('.error')
       if(error != undefined){
            error.innerHTML = errormessage
       }
       valid = false
    }
    return valid
}
