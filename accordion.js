const question = document.querySelectorAll('.question')
const arrow = document.querySelectorAll('.question__arrow--closed')
const acc = document.querySelectorAll('.accordion')

question.forEach(q => {
    q.addEventListener('click', () => {
        q.nextElementSibling.classList.toggle('active')
        q.parentElement.classList.toggle('border')

        if (q.nextElementSibling.classList.contains('active')) {
            q.lastElementChild.classList.add('open')
        } else {
            q.lastElementChild.classList.remove('open')
            
        }
    })
    console.log(question)
})




// const coll = document.querySelectorAll('.collapsible')

// var i 

// for (i = 0; i < coll.length; i++ ) {
//     coll[i].addEventListener('click', function() {
//         this.classList.toggle('active')
//         const content = this.nextElementSibling
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null
//         } else {
//             content.style.maxHeight = content.scrollHeight + 'px'
//         }
//     })
// }

// const question = document.querySelectorAll('.question')

// const toggleAcc = (event) => {
//     event.preventDefault()
//     const answer = event.target.nextElementSibiling
    
// }
// question.forEach(q => q.addEventListener('click', toggleAcc))