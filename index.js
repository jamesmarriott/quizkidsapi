//variables

const urlBase = "https://quiz-kids-api.herokuapp.com/questions"
const getQuests = document.getElementById("getqs");

// county displayed item
const productCounter = document.getElementById("header")
const qDiv = document.querySelector('.questions-container')

getQuests.addEventListener("click", () => {
  getProducts().then(renderHTML).catch(err => console.log(err))
})

async function getProducts(){
  const promise = await fetch(urlBase)
  const json = await promise.json()
  console.log(json)
  return json
}

function renderHTML(json) {
    let qHTML = ""
    json.forEach(item => 
      {
        qHTML += `
        <div class='product-wrapper'>
          <p>Question Number: ${item.ID}</p>
          <p>Category: ${item.Category}.</p>
          <p>Level: ${item.CEFRlevel}</p>
          <p>Theme: ${item.Theme}</p>
          <p>Question 1: ${item.QL1}.</p>
          <p>Question 2: ${item.QL2}</p>
          <p>Answer 1: ${item.A1.value}. Correct: ${item.A1.correct ? "Yes" : "No"}</p>
          <p>Answer 2: ${item.A2.value}. Correct: ${item.A2.correct ? "Yes" : "No"}</p>
          <p>Answer 3: ${item.A3.value}. Correct: ${item.A3.correct ? "Yes" : "No"}</p>
        </div>
        `
    })
      qDiv.innerHTML += qHTML
}