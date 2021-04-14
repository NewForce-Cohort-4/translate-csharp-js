// Put your code here

// Declared array of strings
const locations = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Audiorium", "The Great Wall of China", "Giant donut of the sun"];

// Created function that receives two parameters:
// A string which is displayed as a list title
// An array to be iterated with each item displayed in Console
const displayLocations = (locationTitle, array) => {
    console.log(locationTitle);
    array.forEach(e => {
        console.log(e);        
    });
};

// Function is called with title string and array
displayLocations("All Place Names", locations);

// Console log is envoked with an empty string to seperate lists
console.log("");

// Function filters the array for strings which include the word 'The'
// displayLocations function is called again with new title and array returned by filter method.
const displayLocationsWithThe = (arrayParameter) => {
    const modifiedArray = arrayParameter.filter(place => place.includes('The'));
    displayLocations("'The' Place Names", modifiedArray)
};

// Function is called with the original array
displayLocationsWithThe(locations)