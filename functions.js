/**
 * 
 * @param {Array} fejlec 
 * @param {HTMLElement} thead 
 * ez a függvény tablazatom fejlecet generalja minden adatnak kulon cellaja van
 */
function fejlecem(fejlec,thead){
    const tr = document.createElement('tr')
    thead.appendChild(tr)

    for(const fejelek of fejlec){
        const th = document.createElement('th')
        th.innerHTML = fejelek
        tr.appendChild(th)

   
    }

}

/**
 * 
 * @param {Array} array 
 * @param {HTMLElement} tbody 
 * ez a függvény a tablazatot generalja le a tombbol megadott adatokkal
 */
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



/**
 * 
 * @param {Array} formtablazat 
 * 
 * ezt a fuggvenyt a form generalasahoz hasznalom ugyan azt csinalja ami a htmlbe 
 */
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


/**
 * 
 * @param {HTMLElement} htmlelement 
 * @param {String} errormessage 
 * @returns {Boolean}
 * ez a függvény validálja a mezőket ha üres akkor hibát dob
 */
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
