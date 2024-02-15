

const searchText = document.getElementById("search_text");
const searchButton = document.getElementById("search_button");
const foodCardContainer = document.getElementById("food_card_container");
const spinner = document.getElementById("spinner");

searchButton.addEventListener("click",getData);

window.addEventListener("load",getData);

function getData(){
    spinner.classList.remove("hidden");
    const food_name = searchText.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`;

    fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            displayCards(data.meals);
        })
        .catch((err)=>{
            console.log(err);
        })
}


function displayCards(data){
    spinner.classList.add("hidden");

    if(!data){
        food_card_container.innerHTML = "<h1>Not Found</h1>"
        return;
    }
    
    let foodCard = "";

    for(const item of data){

        const {strMealThumb,strMeal,strInstructions} = item;

        const card = `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src=${strMealThumb} alt="food" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${strMeal}</h2>
                        <p>${strInstructions.slice(0,200)}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Order Now</button>
                        </div>
                    </div>
            </div>`;

        foodCard = foodCard + card;

    }

    foodCardContainer.innerHTML = foodCard;
}


