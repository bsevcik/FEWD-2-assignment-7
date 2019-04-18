var recipe = {
    title: "Guacamole",
    serves: 4,
    ingredients: [
        "3 Avocados",
        "1 Lime",
        "1 Teaspoon Salt",
        "1/2 Cup Onion",
        "3 Tablespoons Cilantro",
        "2 Diced Tomatoes",
        "1 Teaspoon Garlic",
        "1 Pinch Ground Pepper"
    ],
    log: function() {
        window.output = '';
        for (var property in recipe) {
            // output += property + ': ' + recipe[property]+ '; \r';
            console.log(property + ": \r" + recipe[property]);
        }
        console.log(output);
    }
}