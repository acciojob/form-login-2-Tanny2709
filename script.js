// your JS code here. If required
document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const phone = document.getElementById("phoneNumber").value;
    const email = document.getElementById("emailId").value;

    alert(
        "First Name: " + first + " " +
        "Last Name: " + last + " " +
        "Phone Number: " + phone + " " +
        "Email ID: " + email
    );
});
