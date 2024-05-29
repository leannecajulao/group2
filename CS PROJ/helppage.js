document.getElementById("userform").addEventListener('submit', function(event){
    event.preventDefault();

    var firstName = document.getElementById('fn').value;
    var lastName = document.getElementById('ln').value;
    var email = document.getElementById('em').value;
    var password = document.getElementById('pass').value;
    var gender = document.getElementById('gn').value;
    var support = document.getElementById('sup').value; 
    var con = document.getElementById('contact').value; 

    var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,   
        password: password,
        gender: gender,
        support: support,
        con: con
    };


    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = "page1.html";
});

        function borderRed(element) {
            if (element.value.trim() === '') {
                element.style.border = "2px solid red";
                element.style.fontWeight = "bold";
            } else {
                element.style.border = "2px solid lime";
                element.style.fontWeight = "bold";
            }
        }

        function borderGreen(element) {
            element.style.border = "2px solid lime";
            element.style.fontWeight = "bold";
        }

        function res() {
            var display = document.getElementById("display");
            if (display) {
                display.innerHTML = '';
            }
        }
