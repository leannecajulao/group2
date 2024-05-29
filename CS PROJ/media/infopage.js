var userDataString = localStorage.getItem('userData');
    var userData = JSON.parse(userDataString);
        
        
    if(userData) {
            var userDataDiv = document.getElementById('userData');
            userDataDiv.innerHTML = `
                <p><strong>First Name:</strong> ${userData.firstName}</p>
                <p><strong>Last Name:</strong> ${userData.lastName}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Gender:</strong> ${userData.gender}</p>
                <p><strong>Contact Number:</strong> ${userData.contactnum || "N/A"}</p>
                <p><strong>Support:</strong> ${userData.support}</p>
            `;
        } else {
            console.log("No user data found in local storage.");
        }