console.log(randomData);

function randomUserGenerator() {
    let randomIndex = Math.floor(Math.random() * randomData.length);

    let user = randomData[randomIndex];
    console.log(user);

    let userimage = document.getElementById("userImage");
    userimage.src = user.picture["large"];

    let username = document.getElementById("name"); // apparently innerHTML only works on id selectors
    username.innerHTML = "Name: " + user.name["first"] + " " + user.name["last"];
    
    let usergender = document.getElementById("gender");
    usergender.innerHTML = "Gender: " + user.gender;

    let userEmail = document.getElementById("email");
    userEmail.innerHTML = "Email: " + user.email;

    let userPhoneNumber = document.getElementById("phoneNumber");
    userPhoneNumber.innerHTML = "Phone Number: " + user.phone;
}

let button = document.getElementById("randomButton");
button.onclick = randomUserGenerator;
   