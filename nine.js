// <!--  9. “Write a function called validatePasswords(first, second), which takes two string arguments called first and second. Your function needs to check if:
// passwords are equal
// passwords follow the provided password policy.
// If both the conditions are met then return true, otherwise return false.
// Password policy: “Minimum 8 characters long, at least 1 letter, 1 number and 1 special character”" -->



function validatePassword(first , second) {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    
    if (regex.test(first) && first === second) {
        console.log("Password is valid");
    } else {
        console.log("Password must be at least 8 characters long, contain at least 1 letter, 1 number, and 1 special character.");
    }
}

validatePassword("12@qq#rt" , "12@qq#rt");  
