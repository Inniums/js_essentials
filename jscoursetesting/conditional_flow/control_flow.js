// @all declarations
let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

// ends here

// conditional statement
// #1 If Else statement
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
};

// #2 Nested Else If Statement
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

// #3 Switch Statement
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

// #4 Tenary Statement
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// Conditional Statement => ends here

// dev tool logs
console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);