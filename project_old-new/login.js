document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

   
    if (username === "user123" && password === "password123") {
        alert("Login successful");
        
    } else {
        alert("Invalid username or password") ;
    }
});
