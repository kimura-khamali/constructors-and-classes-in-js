// Constructors and Class Assignment
// Question1: (30 marks)
// You are working on a web application for a car rental company. They want 
// to keep track of their car inventory and rental information. Your task is to create a
//  JavaScript class or function constructor for representing cars in their inventory and 
// another one for representing rental information.

// Requirements:
// 1) Create a Car class or function constructor that has the following properties: 
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.

// The Car class or function constructor should also have a method called toggleAvailability 
// that changes the isAvailable property to its opposite value (true to false, false to true)

// 2) Create a Rental class or function constructor that has the following properties: ● car (Car object):
//  The car that has been rented.

// ● renterName (string): The name of the person who rented the car. ● rentalStartDate (Date object): The 
// start date of the rental period. ● rentalEndDate (Date object): The end date of the rental period.

// The Rental class or function constructor should also have a method called calculateRentalDuration that returns 
// the rental duration in days.

// 3) Create an instance of the Car class or function constructor for a car in the inventory. Then, create an instance 
// of the Rental class or function constructor for a rental involving the car you created. Finally, calculate the rental 
// duration using the calculateRentalDuration method.


class Car {
  constructor(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }

  toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    // if(this.isAvailable == true){
    //   return false;
    // }else{
    //   return true;
    // }
    }
  }


    // class Rental extends Car{
    //   constructor(make, model, year, isAvailable, renterName, rentalStartDate, rentalEndDate) {
    //    super(make, model, year, isAvailable)
    //     this.renterName = renterName;
    //     this.rentalStartDate = rentalStartDate;
    //     this.rentalEndDate = rentalEndDate;
    //   }
class Rental {
  constructor(car, renterName, rentalStartDate, rentalEndDate) {
    this.car = car;
    this.renterName = renterName;
    this.rentalStartDate = rentalStartDate;
    this.rentalEndDate = rentalEndDate;
  }

  calculateRentalDuration() {
    const startTime = new Date(this.rentalStartDate);
    const endTime = new Date(this.rentalEndDate);
    const durationInMillseconds = endTime - startTime;
   return (durationInMillseconds / (24 * 60 * 60 * 1000)); // Converting to days
    // return durationInMillseconds
  }
}

const car = new Car("Toyota", "Camry", 2020, true);
console.log(car.isAvailable)
car.toggleAvailability();
 
  console.log(car.isAvailable);
const rentalStartDate = new Date("2020-06-04");

const rentalEndDate = new Date("2020-06-23");


const rental = new Rental("Toyota","Camry", 2020,true, "Anne", rentalStartDate, rentalEndDate);
console.log(rental);
// const rental = new Rental(car, "Anne", rentalStartDate, rentalEndDate);
// console.log(rental);

const rentalDuration = rental.calculateRentalDuration();
console.log("Rental duration:", rentalDuration, "days");


/*********************************************function constuctors********************************************************************************** */

/*
  function Car (make, model, year, isAvailable) {
     
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
     this.toggleAvailability= function() {
          this.isAvailable = !this.isAvailable;
        // if(this.isAvailable == true){
        //   return false;
        // }else{
        //   return true;
        // }
        }
      }
  
  
      function Rental(car, renterName, rentalStartDate, rentalEndDate) {
        
         this.car = car
          this.renterName = renterName;
          this.rentalStartDate = rentalStartDate;
          this.rentalEndDate = rentalEndDate;
  
        this.calculateRentalDuration= function () {
          const startTime = new Date(this.rentalStartDate);
          const endTime = new Date(this.rentalEndDate);
          const durationInMillseconds = endTime - startTime;
         return (durationInMillseconds / (24 * 60 * 60 * 1000)) | 0; // Converting to days
          // return durationInMillseconds
        }
      }
      
      const car = new Car("Toyota", "Camry", 2020, true);
  console.log(car)
  const rentalStartDate = new Date("2020-06-04");
  
  const rentalEndDate = new Date("2020-06-23");
  
  const rental = new Rental(car, "Anne", rentalStartDate, rentalEndDate);
  console.log(rental);
  
  const rentalDuration = rental.calculateRentalDuration();
  console.log("Rental duration:", rentalDuration, "days");
  
  car.toggleAvailability();
  rental.calculateRentalDuration();*/
      
/***********************************extends*************************************************************** */  
/*
class Car {
  constructor(make, model, year, isAvailable) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }

  toggleAvailability() {
    //  this.isAvailable = !this.isAvailable;
    if(this.isAvailable == true){
      return false;
    }else{
      return true;
    }
    }
  }


    class Rental extends Car{
      constructor(make, model, year, isAvailable, renterName, rentalStartDate, rentalEndDate) {
       super(make, model, year, isAvailable)
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
      }
      calculateRentalDuration() {
        const startTime = new Date(this.rentalStartDate);
        const endTime = new Date(this.rentalEndDate);
        const durationInMillseconds = endTime - startTime;
       return (durationInMillseconds / (24 * 60 * 60 * 1000)) | 0; // Converting to days
        // return durationInMillseconds
      }
    }

 



 const car = new Car("Toyota", "Camry", 2020, true);
 console.log(car)
//  car.toggleAvailability();
 
//   console.log(car);
const rentalStartDate = new Date("2020-06-04");

const rentalEndDate = new Date("2020-06-23");


const rental = new Rental("Toyota","Camry", 2020,true, "Anne", rentalStartDate, rentalEndDate);
console.log(rental);


const rentalDuration = rental.calculateRentalDuration();
console.log("Rental duration:", rentalDuration, "days");*/




// Question 2 : (20 Marks)
// You are building a simple quiz app that contains multiple-choice questions. Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress.

// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options. 
// ● correctAnswer(string): The correct answer to the question.

// The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise.
// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class, and updates the score if the answer is correct.

class Question {
  constructor(text, options, correctAnswer) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }

  checkAnswer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}

class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
      this.score++;
    }
  }
}

const quiz = new Quiz();

const question = new Question(
  "What does E5 in Javascript contain?",
  ["constructor", "classes", "css", "html"],
  "constructor",
);
quiz.addQuestion(question);

const userAnswer = "constructor";

quiz.submitAnswer(userAnswer);

console.log("Your score is:", quiz.score);
/*
// # Check for Armstrong Number: Write a function called is_armstrong that takes a number as input
// # and returns True if it's an Armstrong number, False otherwise. Test it with different numbers.
*/
function isArmstrong(num) {
  const order = num.toString().length;
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, order);
    temp = parseInt(temp / 10);
  }
  return num == sum;
}
console.log(isArmstrong(153));


/* Reverse a String: Write a function called reverse_string
 that takes a string as input and returns the string reversed.
  Test it with different strings.








/**count the occurences of letters in a string 
function countLetters(array) {
  const letterCount = {};

  array.forEach(item => {
    if (typeof item === 'string') {
      // If the item is a string
      item.split('').forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
      });
    }
  });

  return letterCount;
}

// Example usage:
const array = ['a', 'b', 'c', 'a', 'b', 'a'];
const result = countLetters(array);
console.log(result); // Output: { a: 3, b: 2, c: 1 }


////contact list
class ContactList {
  constructor() {
      this.contacts = [];
  }

  addContact(name, number) {
      this.contacts.push({ name, number });
      console.log(`Contact added: ${name}, ${number}`);
  }

  removeContact(name) {
      this.contacts = this.contacts.filter(contact => contact.name !== name);
      console.log(`Contact removed: ${name}`);
  }

  displayContacts() {
      console.log("Contact List:");
      this.contacts.forEach(contact => console.log(`${contact.name}, ${contact.number}`));
  }
}

// Example usage
const contactList = new ContactList();
contactList.addContact("John Doe", "1234567890");
contactList.addContact("Jane Doe", "9876543210");
contactList.displayContacts();
contactList.removeContact("John Doe");
contactList.displayContacts();




/**Create a system that is known as weatherfocust and has a city temperatur name and description 
 *  be able to add a city on this  and printit out 

class WeatherFocust {
  constructor(){
    this.city = [];
  }
  addCity(temp,name,city){
    this.city.push(temp,name,city)
    console.log(`addCity ${name} ${city} ${temp}`);
  }
};

const weather = new WeatherFocust();
WeatherFocust.addCity(`Kitui`,`city`,23.8);*/


/**write a program thet  retrieves the location of a nearby driver to the passengers location. */








/*
const books = [
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
  { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
  { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];


function getBooksByAuthor(author) {
  
   const name = books.filter(book => book.author === author);
   return name;
  
}

console.log(getBooksByAuthor());


/*function getAvailableBooks() {
  return books.filter(book => book.isAvailable);
}

console.log(getAvailableBooks())*/
/*function addNewBook(newBook) {
  if (!newBook.title ||!newBook.author ||!newBook.publicationYear || typeof newBook.isAvailable!== 'boolean') {
    throw new Error('All required properties must be provided.');
  }
  books.push(newBook);
}*/


/*function checkoutBook(title) {
  const book = books.find(book => book.title === title);
  if (!book) {
    return 'The book is not available.';
  }
  book.isAvailable = false;
  return 'Book checked out successfully.';
}

console.log(checkoutBook())*/



function countVowels(inputString) {
  let counter = 0;
  for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          counter++;
      }
  }
  return counter;
}

console.log(countVowels("Hello, World")); // Output: 3



/*Track pages on a website on how many times they are use
 and give out the five most used website according to the data given*/ 

/*
 // Simulate page visits
let pageVisits = {
  "Home": 0,
  "About": 0,
  "Contact": 0,
  "Services": 0,
  "Blog": 0
};

// Simulate adding visits
function addVisit(page) {
  pageVisits[page]++;
}

// Simulate getting the top five pages
function getTopFivePages() {
  let sortedPages = Object.entries(pageVisits).sort((a, b) => b[1] - a[1]);
  return sortedPages.slice(0, 5);
}

// Example usage
addVisit("Home");
addVisit("About");
addVisit("Contact");
addVisit("Services");
addVisit("Blog");
addVisit("Home");

console.log(getTopFivePages());
*/

// Initialize an array to hold page names and their visit counts
let pageVisits = [
  ["Home", 0],
  ["About", 0],
  ["Contact", 0],
  ["Services", 0],
  ["Blog", 0]
];

// Function to add a visit to a page
function addVisit(page) {
  // Find the index of the page in the array
  let pageIndex = pageVisits.findIndex(p => p[0] === page);
  if (pageIndex!== -1) {
      // Increment the visit count for the page
      pageVisits[pageIndex][1]++;
  }
}

// Function to get the top five pages
function getTopFivePages() {
  // Sort the array by the second element (visit count) in descending order
  pageVisits.sort((a, b) => b[1] - a[1]);
  
  // Return the first five elements (top five pages)
  return pageVisits.slice(0, 5);
}

// Example usage
addVisit("Home");
addVisit("About");
addVisit("Contact");
addVisit("Services");
addVisit("Blog");
addVisit("Home");

console.log(getTopFivePages());





function isPrimeOptimized(number) {
  if (number < 2) {
    return false;
  }

  if (number === 2 || number === 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

// Usage example
const number = 17;
console.log(`${number} is prime:`, isPrimeOptimized(number));


// You are creating a social media platform where each follower follows each other. You as a developer  
//  create a system where you store the followers for each users using you knowledge in data structure
/*You are developing a social media application where users can follow other users.
Show how you will use your knowledge in data structures to store followers for each
user.*/

class UserGraph {
  constructor() {
      this.users = {};
  }

  addUser(user) {
      if (!this.users[user]) {
          this.users[user] = [];
      }
  }

  addFollower(user, follower) {
      if (this.users[user]) {
          this.users[user].push(follower);
      }
  }

  getFollowers(user) {
      return this.users[user] || [];
  }
}

// Example usage
const socialMedia = new UserGraph();
socialMedia.addUser('Alice');
socialMedia.addUser('Bob');
socialMedia.addUser('Charlie');
socialMedia.addUser('Ann');

socialMedia.addFollower('Alice', 'Bob');
socialMedia.addFollower('Alice', 'Charlie');
socialMedia.addFollower('Ann','Bob');
socialMedia.addFollower('Ann', 'Charlie');
socialMedia.addFollower('Ann', 'Alice');

console.log(socialMedia.getFollowers('Ann')); // ['Bob', 'Charlie']



//make a healthcare  appointment for sceduling doctors based on the doctors availability,
// patient preference and the  and giving out reminders on the appointed time.


// Define classes for Doctor and Appointment
class Doctor {
  constructor(id, name, specializations, availableTimes) {
      this.id = id;
      this.name = name;
      this.specializations = specializations;
      this.availableTimes = availableTimes;
  }
}

class Appointment {
  constructor(doctorId, patientName, appointmentTime) {
      this.doctorId = doctorId;
      this.patientName = patientName;
      this.appointmentTime = appointmentTime;
  }
}

// Function to schedule an appointment
function scheduleAppointment(doctors, patientName, preferredSpecialization) {
  for (let doctor of doctors) {
      if (doctor.specializations.includes(preferredSpecialization)) {
          let earliestAvailableTime = doctor.availableTimes.sort((a, b) => a.localeCompare(b))[0];
          if (earliestAvailableTime) {
              return new Appointment(doctor.id, patientName, earliestAvailableTime);
          }
      }
  }
  return null; // No available slots found
}

// Function to update doctor availability
function updateDoctorAvailability(doctors, appointment) {
  let doctorIndex = doctors.findIndex(doctor => doctor.id === appointment.doctorId);
  if (doctorIndex!== -1) {
      doctors[doctorIndex].availableTimes = doctors[doctorIndex].availableTimes.filter(time => time!== appointment.appointmentTime);
  }
}

// Placeholder function for sending reminders
function sendReminder(appointment) {
  console.log(`Sending reminder to ${appointment.patientName} for ${appointment.appointmentTime} ${appointment.doctorId}.`);
  // Implement actual reminder sending logic here
}

// Main function to demonstrate the process
function main() {
  let doctors = [
      new Doctor(1, "Dr. Smith", ["Cardiology"], ["10:00", "11:00", "14:00"]),
      new Doctor(2, "Dr. Johnson", ["Dermatology"], ["09:00", "12:00"])
  ];

  let appointment = scheduleAppointment(doctors, "Jane Doe", "Cardiology");
  if (appointment) {
      updateDoctorAvailability(doctors, appointment);
      sendReminder(appointment);
  } else {
      console.log("No available slots found.");
  }
}

// Call the main function to start the process
main();





//Develop a system for scheduling appointments at a healthcare facility. Consider factors like 
//doctor availability, patient preferences, and appointment reminders.

const doctors = [
  { name: "Dr. Smith", availability: ["10:00", "11:00", "14:00"] },
  { name: "Dr. Johnson", availability: ["10:30", "12:00", "13:30"] }
];

const appointments = [
  { patientName: "John Doe", doctor: doctors[0], time: "10:00" },
  { patientName: "Jane Doe", doctor: doctors[1], time: "12:00" }
];

// Reminder system
appointments.forEach(appointment => {
  console.log(`Reminder: ${appointment.patientName} has an appointment with ${appointment.doctor.name} at ${appointment.time}`);
});



/*create a task scheduling system where a tasks can be organized in the task a user should be able to add a 
task,edit a task and delete task.Also the task can be set priority and deadline.the user should
 be able to receive reminder on tasks do it in python ,kotlin and javascript*/

/*
 let tasks = {};

function addTask(taskId, description, priority, deadline) {
    tasks[taskId] = { description, priority, deadline };
}

function editTask(taskId, description, priority, deadline) {
    if (tasks[taskId]) {
        tasks[taskId].description = description || tasks[taskId].description;
        tasks[taskId].priority = priority || tasks[taskId].priority;
        tasks[taskId].deadline = deadline || tasks[taskId].deadline;
    }
}

function deleteTask(taskId) {
    delete tasks[taskId];
}

function sendReminder(taskId) {
    const task = tasks[taskId];
    if (task) {
        console.log(`Reminder: ${task.description} is due today.`);
    }
}

// Example usage
addTask("task1", "Finish project report", 1, "2024-06-01");
sendReminder("task1");
*/


class Task {
  constructor(id, description, priority, deadline) {
      this.id = id;
      this.description = description;
      this.priority = priority;
      this.deadline = new Date(deadline);
  }

  isOverdue() {
      return new Date() > this.deadline;
  }
}

class TaskManager {
  constructor() {
      this.tasks = [];
  }

  addTask(task) {
      this.tasks.push(task);
  }

  editTask(id, description, priority, deadline) {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
          task.description = description || task.description;
          task.priority = priority || task.priority;
          task.deadline = new Date(deadline);
      }
  }

  deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id!== id);
  }

  sendReminders() {
      this.tasks.forEach(task => {
          if (task.isOverdue()) {
              console.log(`Reminder: ${task.description} is overdue.`);
          }
      });
  }
}

// Example usage
const manager = new TaskManager();
const task = new Task("task1", "Finish project report", 1, "2024-06-01");
manager.addTask(task);
manager.sendReminders();
