// Constructors and Class Assignment 
// Question1: (30 marks)
// You are working on a web application for a car rental company. They want to keep track of their car inventory and rental information. Your task is to create a JavaScript class or function constructor for representing cars in their inventory and another one for representing rental information. 
// Requirements: 
// 1) Create a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
// b. model (string): The model of the car, e.g., "Camry". 
// c. year (number): The year the car was manufactured, e.g., 2020. 
// d. isAvailable (boolean): Indicates if the car is currently available for rent. 
// The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 
// 2) Create a Rental class or function constructor that has the following properties: ● car (Car object): The car that has been rented. 
// ● renterName (string): The name of the person who rented the car. ● rentalStartDate (Date object): The start date of the rental period. ● rentalEndDate (Date object): The end date of the rental period. 
// The Rental class or function constructor should also have a method called calculateRentalDuration that returns the rental duration in days. 
// 3) Create an instance of the Car class or function constructor for a car in the inventory. Then, create an instance of the Rental class or function constructor for a rental involving the car you created. Finally, calculate the rental duration using the calculateRentalDuration method.


class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}

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
         return (durationInMillseconds / (24 * 60 * 60 * 1000)) | 0; // Converting to days
    
      }
    }

const car = new Car("Toyota", "Camry", 2020, true);


const rentalStartDate = new Date("2020-06-04");
const rentalEndDate = new Date("2020-06-23");
const rental = new Rental(car, "Anne", rentalStartDate, rentalEndDate);
console.log(rental);

const rentalDuration = rental.calculateRentalDuration();
console.log("Rental duration:", rentalDuration, "days");



  // Question 2 : (20 Marks)
// You are building a simple quiz app that contains multiple-choice questions. Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress. 

// 1. Create a Question class with the following properties: 
// ● text(string): The text of the question. 
// ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question. 
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


const question = new Question("What does E5 in Javascript contain?", ["constructor", "classes", "css", "html"], "constructor");
quiz.addQuestion(question);


const userAnswer = "constructor";

quiz.submitAnswer(userAnswer);


console.log("Your score is:", quiz.score);