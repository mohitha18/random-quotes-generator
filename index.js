const btnEl = document.getElementById("btn")
const quoteEl1 = document.getElementById("quote")
const authorEl = document.getElementById("author")



const apiURL = "https://api.quotable.io/random"

async function getQuote(){
    try{
    
    btnEl.disabled= true;
    btnEl.innerText='loading...';
    quoteEl1.innerText='Updating...';
    authorEl.innerText='Updating...'
    const response = await fetch(apiURL)
    const data = await response.json()
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl1.innerText = quoteContent;
    authorEl.innerText = "~ "+quoteAuthor;
    btnEl.disabled=false;
    btnEl.innerText= "Get a quote";
    
    

    }
    catch(error){
        quoteEl1.innerText="An error happened, try again later";
        authorEl.innerText="An error happened"
        btnEl.disabled= false;
        btnEl.innerText= "Get a quote";
    }
}
getQuote()

btnEl.addEventListener("click", getQuote)