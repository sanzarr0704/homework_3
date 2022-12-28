const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

const tabImgs = document.querySelectorAll('.tabcontent img')
console.log(tabImgs)

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
    tabImgs.forEach((item) => {
        item.style.opacity = 0.5
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
    setTimeout(() => {
        tabImgs[i].style.opacity = 1
    }, 0)
}

hideTabContent()
showTabContent()

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                currSlide = i
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})
let currSlide = 0
setInterval(() => {
    if (currSlide < tabContent.length - 1){
        currSlide++
        hideTabContent()
        showTabContent(currSlide)
    } else {
        currSlide = 0
        hideTabContent()
        showTabContent(currSlide)
    }
}, 1000)




const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")
let isModalOpened = false

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalTrigger.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)

window.onscroll =() => {
    if (document.documentElement.scrollTop >= 3270 && isModalOpened === false) {
        isModalOpened = true
        openModal()
    }
}
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('show')) {
      closeModal()
  }
})

const  message = {
    loading: "Идет загруска...",
    success: "Спасибо скоро свяжимся!!!"

}

const form = document.querySelector("form")

const  postData = (form) => {
    form.addEventListener("sumbit", (e)=>{
        e.preventDefault()

          const request = new XMLHttpRequest()
    request.open("POST" , "server.php")
    request.setRequestHeader("Content-type"  , "application/json")

    const  formData = new FormData(form)
    const object = {}

    formData.forEach((item) => {
        obj[i] = item
    })
    console.log(object)

        const json = JSON.stringify(object)

        request.send(json)

          request.addEventListener("load", ()=>{
              if (request.status === 200){
                  console.log("ok")
                  messageBlock.textContent = message.success
              } else {
                  console.log("not ok")
                   messageBlock.textContent = message.fail
              }
          })
    })
}












const modal2 = document.querySelector(".modal")
const modalTrigger2 = document.querySelector(".btn_dark")
const closeModalBtn2 = document.querySelector(".modal__close")
let isModalOpened2 = false

const openModal2 = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger2.addEventListener("click", openModal)

const closeModal2 = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalTrigger2.addEventListener('click',openModal2)
closeModalBtn2.addEventListener('click',closeModal2)

window.onscroll =() => {
    if (document.documentElement.scrollTop >= 3270 && isModalOpened === false) {
        isModalOpened = true
        openModal2()
    }
}
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('show')) {
      closeModal2()
  }
})

const  message2 = {
    loading: "Идет загруска...",
    success: "Спасибо скоро свяжимся!!!"

}

const form2 = document.querySelector("form")

const  postData2 = (form) => {
    form.addEventListener("sumbit", (e)=>{
        e.preventDefault()

          const request = new XMLHttpRequest()
    request.open("POST" , "server.php")
    request.setRequestHeader("Content-type"  , "application/json")

    const  formData = new FormData(form)
    const object = {}

    formData.forEach((item) => {
        obj[i] = item
    })
    console.log(object)

        const json = JSON.stringify(object)

        request.send(json)

          request.addEventListener("load", ()=>{
              if (request.status === 200){
                  console.log("ok")
                  messageBlock.textContent = message.success
              } else {
                  console.log("not ok")
                   messageBlock.textContent = message.fail
              }
          })
    })
}



