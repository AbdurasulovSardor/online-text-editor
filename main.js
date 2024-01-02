let optionsButtons = document.querySelectorAll(".option-button")
let advancedOptionButton = document.querySelectorAll(".adv-option-button")
let fontName = document.getElementById("fontName")
let fontSizeRef = document.getElementById("fontSize")
let writingArea = document.getElementById("text-input")
let linkButton = document.getElementById("createLink")
let alignButtons = document.querySelectorAll(".align")
let spacingButtons = document.querySelectorAll(".spacing")
let formatButtons = document.querySelectorAll(".format")
let scriptButtons = document.querySelectorAll(".script")

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive"
]

const intializer = () => {
  highlighter(alignButtons, true)
  highlighter(spacingButtons, true)
  highlighter(formatButtons, false)
  highlighter(scriptButtons, true)

  fontList.map(value => {
    let option = document.createElement("option")
    option.value = value
    option.innerHTML = value
    fontName.appendChild(option)
  })

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option")
    option.value = i
    option.innerHTML = i
    fontSizeRef.appendChild(option)
  }

  fontSizeRef.value = 3
}

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value)
}

optionsButtons.forEach(button => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null)
  })
})

advancedOptionButton.forEach(button => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value)
  })
})

linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL?")
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink)
  } else {
    userLink = "http://" + userLink
    modifyText(linkButton.id, false, userLink)
  }
})

const highlighter = (className, needsRemoval) => {
  className.forEach(button => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false
        if (button.classList.contains("active")) {
          alreadyActive = true
        }
        highlighterRemover(className)
        if (!alreadyActive) {
          button.classList.add("active")
        } else {
          button.classList.togglr("active")
        }
      }
    })
  })
}

const highlighterRemover = (className) => {
  className.forEach(button => {
    button.classList.remove("active")
  })
}

window.onload = intializer()

const array = {
  beginner: {
    unit1: [
      {
        id: 1,
        key: "n",
        text_uz: "manzil",
        text_en: "address",
        description: "What is your home address?",
      },
      {
        id: 2,
        key: "n",
        text_uz: "alifbo",
        text_en: "alphabet",
        description: "The English alphabet has twenty-six letters",
      },
      {
        id: 3,
        key: "n",
        text_uz: "shahar",
        text_en: "city",
        description: "What city are you from?",
      },
      {
        id: 4,
        key: "adj",
        text_uz: "yaxshi",
        text_en: "fine",
        description: "I'm fine thanks",
      },
      {
        id: 5,
        key: "v",
        text_uz: "bo'ginlash",
        text_en: "spell",
        description: "How do you spell your name?",
      },
    ],
    unit2: [],
    unit3: [],
    unit4: [],
    unit5: [],
    unit6: [],
    unit7: [],
    unit8: [],
    unit9: [],
    unit10: [],
  }

const array2 = [
    {
      unit1: []
    }
  ]