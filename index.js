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
        console.log(item)
        qHTML += `
        <div class='product-wrapper'>
          <p>Category ${item.Category}<p>
          <p>Question ${item.QL1}<p>
          <p>Question ${item.QL2}<p>
          <a>Answer ${item.A1.value}<p>
        </div>
        `
    })
      qDiv.innerHTML += qHTML
}