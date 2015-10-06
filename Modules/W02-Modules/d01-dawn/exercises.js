var clubs =  [
    {
        name: 'Yearbook',
        students: [
            { first: 'Joe', last: 'Lakin' },
            { first: 'Evalyn', last: 'Bradtke' },
            { first: 'Samuel', last: 'Black' }
        ], 
        teacher: 'James Friar'
    },
    {
        name: 'Jazz Band',
        students: [
            { first: 'Douglas', last: 'Wisoky' },
            { first: 'Cora', last: 'Thompson' },
            { first: 'Samuel', last: 'Ziemann' },
            { first: 'Alana', last: 'Cortez'}
        ], 
        teacher: 'Luther Richards'
    },
    {
        name: 'Swim Team',
        students: [
            { first: 'Cora', last: 'Thompson' },
            { first: 'Samuel', last: 'Black' },
            { first: 'Alana', last: 'Cortez'},
            { first: 'Joe', last: 'Lakin' }
        ], 
        teacher: 'Carol Darby'
    }
];


// the array that contains all the student club data
console.log(clubs);

// the number of clubs
console.log(clubs.length());

// the object that contains all of the information for the second club
console.log(clubs[1]);

// the teacher of the first club
console.log(clubs[0].teacher);

// the array of students in the second team
console.log(clubs[1].students);

// the last name of the second student on the third team
console.log(clubs[2].students[1].last);

// Create an object literal representing a student with your name, and assign it to a variable.
var jeehyeKim = {first: 'Jeehye', last: 'Kim'};


// Add yourself to one of the clubs as a student member. Add a comment saying which club you're joining.
clubs[0].students.push(jeehyeKim);


// Create an object literal representing a new club, and assign it to a variable. Make sure it has values for name, students, and teacher.
var newClub = {name:'', students:[], teacher:''};


// Add your new club to the array of clubs.
clubs.push(newClub);

// Add yourself as a student in the new club.
clubs[3].students[0]= jeehyeKim;

// Update Samuel Black's first name to Sam everywhere it occurs.
clubs[0].students[2].first = "Sam";
clubs[2].students[1].first = "Sam";


// Oops, the school is losing extracurricular funding. Remove one of the clubs from the array. Add a comment to say which club has been defunded.
clubs[3].pop();















