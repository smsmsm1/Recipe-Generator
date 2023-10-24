// Form hides when user submits and shows the recipe generator
var submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function () {
  event.preventDefault();
  const form = document.getElementById("form");
  var generator = document.querySelector(".container");
  const videoTut = document.querySelector(".video-tut")
  form.style.display = "none";
  generator.style.display = "block";
  videoTut.style.display = "block";
});
function onChange(input) {
  return (document.getElementById("firstName").value = input);
  var firstNameInput = document.getElementById("firstName");
  return (firstNameInput.value = input);
}

// Function which takes all the information submitted by the user
let mealPlan = "";
let newArray = [];
let calorieInput;
function info() {
  const firstName = document.getElementById("firstName").value;
  calorieInput = document.getElementById("calorieInput").value;

  var veganCheckbox = document.getElementById("vegan");
  var vegetarianCheckbox = document.getElementById("vegetarian");
  var pescatarianCheckbox = document.getElementById("pescatarian");

  if (veganCheckbox.checked == true) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].plan === "Vegan") {
        mealPlan = recipes[i].plan;
      }
    }
  } else if (vegetarianCheckbox.checked == true) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].plan === "Vegetarian") {
        mealPlan = recipes[i].plan;
      }
    }
  } else if (pescatarianCheckbox.checked == true) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].plan === "Pescatarian") {
        mealPlan = recipes[i].plan;
      }
    }
  }
  let introduction = document.getElementById("userInfo");
  introduction.innerHTML = `
    <p>Hello ${firstName}💝!</p>
    <p>Your meal plan is: ${mealPlan}.</b>
    <p>Your daily calorie intake is: ${calorieInput}.</p>
    <p><b>Please click on the Generate Recipe button to begin</b></p>`;

  // New Array for selected meal plan
  let i = 0;
  let j = 0;
  while (i < recipes.length)
    {
      if (recipes[i].plan === mealPlan) {
      newArray[j] = recipes[i];
      j++;
      i++;
      }
      else{
        i++;
      }
    }
}

// Define an array of recipes with calorie information
var recipes = [
  {
    plan: "Vegan",
    category: "Breakfast",
    title: "Vegan Pancakes",
    ingredients: [
      { name: "all-purpose flour", calories: 120 },
      { name: "sugar", calories: 50 },
      { name: "baking powder", calories: 10 },
      { name: "salt", calories: 0 },
      { name: "almond milk", calories: 30 },
      { name: "vegetable oil", calories: 120 },
      { name: "vanilla extract", calories: 10 }
    ],
    instructions: [
      "In a mixing bowl, whisk together flour, sugar, baking powder, and salt.",
      "In a separate bowl, combine almond milk, vegetable oil, and vanilla extract.",
      "Pour the wet ingredients into the dry ingredients and stir until just combined.",
      "Heat a non-stick skillet over medium heat.",
      "Pour 1/4 cup of batter onto the skillet for each pancake.",
      "Cook until bubbles form on the surface, then flip and cook the other side until golden brown.",
      "Serve with your favorite toppings."
    ]
  },
  {
    plan: "Vegan",
    category: "Lunch",
    title: "Vegan Buddha Bowl",
    ingredients: [
      { name: "quinoa", calories: 120 },
      { name: "roasted sweet potatoes", calories: 150 },
      { name: "steamed broccoli", calories: 50 },
      { name: "chickpeas", calories: 60 },
      { name: "sliced avocado", calories: 80 },
      { name: "tahini", calories: 100 },
      { name: "lemon juice", calories: 10 },
      { name: "tamari sauce", calories: 15 },
      { name: "maple syrup", calories: 50 }
    ],
    instructions: [
      "In a bowl, arrange quinoa, roasted sweet potatoes, steamed broccoli, chickpeas, and sliced avocado.",
      "In a separate bowl, whisk together tahini, lemon juice, tamari sauce, and maple syrup to make the dressing.",
      "Drizzle the dressing over the Buddha bowl and toss to combine.",
      "Enjoy!"
    ]
  },
  {
    plan: "Pescatarian",
    category: "Dinner",
    title: "Instant Pot Salmon",
    ingredients: [
      { name: "water", calories: 0 },
      { name: "wild-caught Alaskan salmon, cut into 4 fillets", calories: 161 },
      { name: "pepper", calories: 0 },
      { name: "salt", calories: 0 }
    ],
    instructions: [
      "Pour a cup of water into the Instant Pot and arrange the metal trivet on top. Place the salmon fillets into a single layer on the trivet and sprinkle them generously with salt and pepper.",
      "Secure the lid and turn the pressure release valve to sealing. Use the manual setting to cook on high pressure for 3 minutes. If using frozen fish fillets, cook them on high pressure for 5 minutes instead. No need to thaw.",
      "When the cooking cycle has completed, quickly turn the pressure release valve to venting to release the pressure. Serve the fish warm with your favorite sauce and side dish."
    ]
  },
  {
    plan: "Vegetarian",
    category: "Dinner",
    title: "Low Carb High Taste Zoodles",
    ingredients: [
      { name: "1 medium zucchini", calories: 33 },
      { name: "1 cup basil, fresh", calories: 1 },
      { name: "1 tbsp pesto", calories: 92 },
      { name: "1 handful cherry tomatoes", calories: 100 },
      { name: "1 handful walnuts", calories: 200 },
      { name: "salt", calories: 0 },
      { name: "pepper", calories: 0 }
    ],
    instructions: [
      "Use a spiral maker to get those lovely zucchini noodles aka zoodles. If you don’t have that magical thingy, you can also simply dice up the zucchini.",
      "Off it goes into the pan with a little bit of olive oil. Set it on medium heat.",
      "Cut the cherry tomatoes in halves and add them to the pan. Also add the walnuts.",
      "Give it a nice toss. After around 7-8 minutes add the pesto and give it another toss.",
      "To finish off the zoodles garnish with basil leaves (and feta cheese, if you have it around)",
      "Ready. Enjoy!"
    ]
  },
    {
    plan: "Vegetarian",
    category: "Lunch",
    title: "Microwave sweet potato & black bean chilli",
    ingredients: [
      { name: "2 sweet potatoes", calories: 224 },
      { name: "10g salted butter", calories: 100 },
      { name: "1 garlic clove, crushed", calories: 3 },
      { name: "½ small onion, finely chopped", calories: 22 },
      { name: "½ x 400g can black beans, drained and rinsed", calories: 182 },
      { name: "½ x 400g can chopped tomatoes", calories: 200 },
      { name: "½ tsp chilli powder", calories: 8 },
      { name: "1 tsp ground cumin", calories: 8 },
      { name: "100g frozen sweetcorn", calories: 86 }
    ],
    instructions: [
      "Prick the sweet potatoes all over with a fork and put on a microwave-safe plate. Microwave on high for 5-6 mins until tender – a sharp knife inserted into the thickest part should go in easily.",
      "Melt the butter in a large microwave-safe bowl, then stir in the garlic and onion. Loosely cover and cook on high for 1 min until softened. Stir in the black beans, chopped tomatoes, chilli powder, cumin and sweetcorn.",
      "Cover again and microwave on high for 5 mins until bubbling and hot, then season and spoon this over the sweet potatoes. Top with soured cream, guacamole, coriander leaves and some black pepper, and serve with lime wedges for squeezing over, if you like."
    ]
  }
  // Add more recipes with different ingredients and calorie values
];

// Function to update the total calories
var totalCalories = 0;
function updateTotalCalories() {
  var sumOfCaloriesInMealElement = document.getElementById(
    "sumOfCaloriesInMeal"
  );
  sumOfCaloriesInMealElement.textContent =
    `${newArray[randomRecipeIndex].title}'s Calories: ${mealCalories}`;
  
  if ((mealCalories + totalCalories) < calorieInput)
    {
  totalCalories = mealCalories + totalCalories;
    }
  else if ((mealCalories + totalCalories) > calorieInput)
    {
      alert(`The next generated recipe is the 🌟${newArray[randomRecipeIndex].title}🌟. This recipe will surpass your ${calorieInput} daily calorie intake. Please try generating a new recipe.`)
    }
  return totalCalories;
}

// Generate a random recipe
var randomRecipeIndex;
var generateRecipeButton = document.getElementById("generateRecipeButton");
generateRecipeButton.addEventListener("click", function () {
  randomRecipeIndex = Math.floor(Math.random() * newArray.length);
  var randomRecipe = newArray[randomRecipeIndex];

  var recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = `
  
    <h3>${randomRecipe.category} Recipe</h3>
    <h4>${randomRecipe.title}</h4>
    <h5>Ingredients:</h5>
    <ul>
      ${randomRecipe.ingredients
        .map((ingredient) => `<li>${ingredient.name}</li>`)
        .join("")}
    </ul>
    <h5>Instructions:</h5>
    <ol>
      ${randomRecipe.instructions
        .map((instruction) => `<li>${instruction}</li>`)
        .join("")}
    </ol>
  `;

  // Calculate and update total calories
  mealCalories = randomRecipe.ingredients.reduce(
    (sum, ingredient) => sum + ingredient.calories,
    0
  );
  updateTotalCalories(mealCalories);
  document.getElementById("total-calories").textContent = `Total Calories from Meals Combined: ${totalCalories}`;
    
});
const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0]);
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }

  const newInnerHTML = `
    <div class="row">
      <div class="columns five">
        <img src="${meal.strMealThumb}" alt="Meal Image">
        ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h5>Ingredients:</h5>
        <ul>
          ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <div class="columns seven">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
      </div>
    </div>
    ${meal.strYoutube ? `
    <div class="row">
      <h5>Video Recipe</h5>
      <div class="videoWrapper">
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
        </iframe>
      </div>
    </div>` : ''}
  `;

  meal_container.innerHTML = newInnerHTML;
};
