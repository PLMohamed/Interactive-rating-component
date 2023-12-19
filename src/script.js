document.addEventListener("DOMContentLoaded",() => {
    const rating = document.querySelectorAll('.rate')
    const btnSubmit = document.querySelector('button')



    const resetRate = () =>{
        rating.forEach(rate => rate.classList.remove('active'));
    }

    rating.forEach(rate => {
        rate.addEventListener('click',() => {
            resetRate();
            rate.classList.add('active');
        })
    });

    btnSubmit.onclick = () =>{
        const active = document.querySelector('.active');
        if( active && !Number.isNaN(Number(active.innerHTML)) && Number(active.innerHTML) <=5 && Number(active.innerHTML) >= 1){
            document.body.innerHTML = `
            <main id="thank-state" style="align-items:center;text-align:center;">
                <img align="center" src="../images/illustration-thank-you.svg"/>
                <span>You selected ${parseInt(Number(active.innerHTML))} out of 5</span>
                <h2>Thank you!</h2>
                <p>
                    We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to get in touch!
                </p>

            </main>
            `
        }else{
            btnSubmit.style.animation = "shake 500ms linear"
            setTimeout(() => {
                btnSubmit.style.animation = ""
            }, 500);
        }
        
    }

})