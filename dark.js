document.getElementById('mode').addEventListener('click',()=>{
    document.getElementById('toggle').classList.toggle('toggleLight')
    document.getElementById('circle').classList.toggle('circleLight')
    document.getElementById('body').classList.toggle('light')
    document.getElementById('tittle').classList.toggle('light')
    
    let social = document.getElementsByClassName('social')
    for(i=0;i<social.length;i++){
        social[i].classList.toggle('socialLight')
    }

    let quantity=document.getElementsByClassName('quantity')
    for(i=0;i<quantity.length;i++){
        quantity[i].classList.toggle('socialLight')
    }

    document.getElementById('today').classList.toggle('todayLight')

    let details=document.getElementsByClassName('details')
    for(i=0;i<details.length;i++){
        details[i].classList.toggle('socialLight')
    }

    let span=document.getElementsByClassName('span')
    for(i=0;i<span.length;i++){
        span[i].classList.toggle('socialLight')
    }
})

