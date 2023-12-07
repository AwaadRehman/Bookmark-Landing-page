let faqsEl = document.querySelectorAll('.faq')
let submitBtn = document.querySelector('.submit')
let input = document.querySelector('input')
let error = document.querySelector('.error')
let errorMsg = document.querySelector('.errormsg')
let navbar = document.querySelector('.navbar')
let navbarLis = document.querySelectorAll('.navbar li')
let navbarBtn = document.querySelector('.navbar button')
let menuBtn = document.querySelector('.menubtn')
let closeBtn = document.querySelector('.closebtn')
let section2El = document.querySelector('.section2')
let featuersEls = document.querySelectorAll('.featurestab')

menuBtn.addEventListener('click', () => {
    navbar.classList.add('menuActive')
    navbarBtn.classList.add('menuActiveBtn')
    navbarLis.forEach(li => {
        li.classList.add('menuActiveLis')
    })
})
closeBtn.addEventListener('click', () => {
    navbar.classList.remove('menuActive')
    navbarBtn.classList.remove('menuActiveBtn')
    navbarLis.forEach(li => {
        li.classList.remove('menuActiveBtn')
    })
})

faqsEl.forEach(faqs => {
    faqs.addEventListener('click', (e) => {
        faqs.classList.toggle('showAnswer')
        console.log(e)
    })
})
submitBtn.addEventListener('click', (e) => {
    let inputValue = input.value
    if (inputValue.indexOf('@') == -1 || inputValue.indexOf('.') == -1) {
        error.classList.add('showError')
        errorMsg.classList.add('showErrormsg')
        input.style.border = '2px solid hsl(0,94%,66%)'

        submitBtn.style.border = '2px solid hsl(0,94%,66%)'
        submitBtn.style.color = 'hsl(0,94%,66%)'
        submitBtn.style.backgroundColor = 'white'
        console.log('wd')

    } else {
        input.style.border = '0'
        error.classList.remove('showError')
        errorMsg.classList.remove('showErrormsg')
        submitBtn.style.border = '0'
        submitBtn.style.color = 'white'
        submitBtn.style.backgroundColor = 'hsl(0,94%,66%)'
        console.log('asasas')
    }
})

featuersEls.forEach(els => {
    els.addEventListener('click', (e) => {
        console.log(els.childrenElements)
        console.log(els.children[0])
    })
    els.addEventListener('click', (e) => {
        let elmname = e.target.className
        let el = e.target
        if (elmname == 'simple') {

            el.classList.add('active')
            el.nextElementSibling.classList.remove('active')
            section2El.innerHTML = `
            <div class="left2">
            <div></div>
            <img src="bookmark landing page assets/illustration-features-tab-1.svg" alt="">
            </div>
            <div class="right2">
            <h1>Bookmark in one click</h1>
            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete
            control over how you manage your favourite site</p>
            <button class="btn">More info</button>
            </div>
            `
        } else if (elmname == 'speed') {
            el.classList.add('active')
            el.nextElementSibling.classList.remove('active')
            el.previousElementSibling.classList.remove('active')

            section2El.innerHTML = `
            <div class="left2">
            <div></div>
            <img src="bookmark landing page assets/illustration-features-tab-2.svg" alt="">
            </div>
            <div class="right2">
            <h1>Intelligent Search</h1>
            <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
            <button class="btn">More info</button>
            </div>
            `
        } else if (elmname == 'easy') {
            el.classList.add('active')
            el.previousElementSibling.classList.remove('active')
            section2El.innerHTML = `
            <div class="left2">
            <div></div>
            <img src="bookmark landing page assets/illustration-features-tab-3.svg" alt="">
        </div>
        <div class="right2">
            <h1>Share your bookmarks</h1>
            <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
            <button class="btn">More info</button>
        </div>
            `
        }
    })
})