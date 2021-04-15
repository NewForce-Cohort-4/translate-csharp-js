// Put your code here

// Declare an array of Objects to store enemy data
const enemyData = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: [
            "Being a jerky jerk in elemetary school",
            "Not being a generally nice guy"
        ],
        isReallyHated: true,
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offenses: [
            "Cut off Luke's hand",
            "Picked a red light saber",
            "Unkind management practices"
        ],
        isReallyHated: false,
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        offenses: [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ],
        isReallyHated: true,
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        offenses: [
            "Keeps giving me a hotplace"
        ],
        isReallyHated: false,
    }
]

// Declare a function which accepts array of objects
const crapList = (enemyArray) => {
    // Console log header information
    console.log("My Enemies List!");
    console.log("----------------");

    // local function to create a concataneted string
    // function excepts an indivdual object and a string
    // Conditional adjust displayed message if enemyReminder parameter is not passed
    const displayEnemy = (enemyObject, enemyReminder) => {
        if (enemyReminder === undefined) {
            console.log(`${enemyObject.firstName} ${enemyObject.lastName}`)
        } else {            
            console.log(`${enemyObject.firstName} ${enemyObject.lastName} ${enemyReminder}`);
        }
        
    };

    // forEach array method iterates through objects and displays a reminder message
    // For any entry where isReallyHated boolean is true
    enemyArray.forEach(e => {
        if (e.isReallyHated) {
            displayEnemy(e, "( Really, really dislike! )")
        } else {
            displayEnemy(e)
        }
    });
};

// Function is envoked and array of objects is passed
crapList(enemyData);