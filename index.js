// @ts-nocheck

// this will select the drop down menu
let dropdown = document.querySelectorAll("#dropdown")[0];


// This will add a event listener on the drop down itself to listen for clicks
dropdown.addEventListener("click", val => {

    // this will remove all the existing items in the area where the items will be displayed
    document.getElementById("products").innerHTML = "";

    // making fetch request to get data from a json file
    fetch("./data.json").then(res => res.json()).then(e => {

        // checking what the user has selected 
        /**
         *  val is the event object above ^
         *  val.target <= This is just selecting the dropdown you can select it directly
         *  val.target.value <= This is getting the value selected by the user { it might show a error line in some code editors but its completely valid and works in every browser }
         */
        if (val.target.value == "Cat") {

            // looping through that specific item list and adding elements to DOM
            e.Cat.forEach(element => {
                let template = `
                    <div class = "card">
                        <img src="https://www.thepaws.net/wp-content/uploads/2019/02/native-american-cat-names-758x542.jpg" alt = "" >
                        <h3> ${element.name} </h3> 
                        <p>
                            ${element.text} 
                        </p> 
                        </div >
                `;

                document.getElementById("products").innerHTML += template;

            });

            /**
             * Same thing as above just repeat the same thing for all the categories
             */
        } else if (val.target.value == "Dog") {
            e.Dog.forEach(element => {
                let template = `
                    <div class = "card">
                        <img src = "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt = "" >
                        <h3> ${element.name} </h3> 
                        <p>
                            ${element.text} 
                        </p> 
                        </div >
                `;

                document.getElementById("products").innerHTML += template;

            });
        }
    });
});
