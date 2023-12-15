function verify(){
    let date = new Date()
    let year = date.getFullYear()           
    let inputYear = document.getElementById('txtyear')
    let res = document.querySelector('div#res')

    if (inputYear.value.length == 0 || Number (inputYear.value) > year){
        window.alert('[ERROR] Check the data and try again !')
    }else{
        let fSex = document.getElementsByName('radsex')
        let age = year - Number(inputYear.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'image')
        if (fSex[0].checked){
            gender = 'Men'
            if (age >= 0 && age < 10){
                // Kids
                img.setAttribute('src', 'image/4.png')
            }else if (age < 21){
                // Young
                img.setAttribute('src', 'image/8.png')
            }else if (age < 65){
                // Adult
                img.setAttribute('src', 'image/2.png')
            }else {
                // old
                 img.setAttribute('src', 'image/6.png')
            }
        }else if (fSex[1].checked){
            gender = 'Girl'
            if (age >= 0 && age < 10){
                // Kids
                img.setAttribute('src', 'image/3.png')
            }else if (age < 21){
                // Young
                img.setAttribute('src', 'image/7.png')
            }else if (age < 65){
                // Adult 
                img.setAttribute('src', 'image/1.png')
            }else {
                // Old 
                img.setAttribute('src', 'image/5.png')
            }
        }
        res.innerHTML = `We detected ${gender} It is the age ${age} years. ` 
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}