const cheked=document.querySelectorAll('input[type="radio"]')
const adminSec=document.getElementsByClassName("registration")
const regId=document.getElementById('regID')
const athorId=document.getElementById('athorID')

for(const iconCheck of cheked){
    iconCheck.addEventListener('click',()=>{

        if(String(iconCheck.value)==='Администратор'){

            adminSec[0].classList.add('active')
            regId.classList.add('active')
            athorId.classList.remove('active')

        }
        if(String(iconCheck.value)==='Участник'){

            adminSec[0].classList.remove('active')
            regId.classList.add('active')

        }
    })
}

adminSec[0].addEventListener('click',()=>{

    regId.classList.remove('active')
    athorId.classList.add('active')
    
})