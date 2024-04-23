//Students Management System Program
//This project is a simple console based Student Management System. 
//In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, 
//how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, 
//pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled 
//and balance.This is one of the best projects to implement the Object Oriented Programming concepts.
//Making Class student
class Student {
    name;
    studentID;
    coursesEnrolled;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.coursesEnrolled = [];
        this.balance = 0;
    }
    //generate 5 digits students id
    generateStudentID() {
        const id = Math.floor(10000 + Math.random() * 20000).toString();
        return id;
    }
    enroll(course, tuitionFee) {
        this.coursesEnrolled.push(course);
        this.balance += tuitionFee;
    }
    //Pay tuition Fees
    payTuition(amount) {
        if (amount <= 0) {
            console.log("Invalid payment amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Payment exceeds balance");
            return;
        }
        this.balance -= amount;
        console.log(`Payment of ${amount} successfully made`);
    }
    //Check balance
    checkBalance() {
        return this.balance;
    }
    getStatus() {
        if (this.balance === 0) {
            return "No outstanding balance";
        }
        else if (this.balance < 0) {
            return "Balance in credit";
        }
        else {
            return "Balance due";
        }
    }
}
let student1 = new Student("John");
student1.enroll("Javascript", 500);
student1.enroll("Typescript", 600);
student1.enroll("Node.js", 2500);
console.log("Student ID:", student1.studentID);
console.log(student1);
console.log("Courses Enrolled:", student1.coursesEnrolled);
console.log("Current Balance:", student1.checkBalance());
student1.payTuition(300);
console.log("Current Balance:", student1.checkBalance());
console.log("Status:", student1.getStatus());
let student2 = new Student("Faisal");
student2.enroll("Javascript", 500);
student2.enroll("Typescript", 600);
console.log("Student ID:", student2.studentID);
console.log(student2);
console.log("Courses Enrolled:", student2.coursesEnrolled);
console.log("Current Balance:", student2.checkBalance());
student2.payTuition(400);
console.log("Current Balance:", student2.checkBalance());
console.log("Status:", student2.getStatus());
//add New students
//Making Class of students Manager
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    addnewStudent(name) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        console.log("\nNew Students Enrolled ");
        console.log(`Student ${name}`);
    }
    findStudentByID(studentID) {
        return this.students.find(student => student.studentID === studentID);
    }
    listStudents() {
        console.log("List of Students:");
        this.students.forEach(student => {
            console.log(`Name: ${student.name}, Student ID: ${student.studentID}`);
        });
    }
}
let studentManager = new StudentManager();
studentManager.addnewStudent("Nabeel");
studentManager.addnewStudent("Rizwan");
let student3 = new Student("Nabeel");
student3.enroll("Javascript", 500);
student3.enroll("Node.js", 2500);
// console.log("Student ID:", student3.studentID);
console.log(student3);
console.log("Courses Enrolled:", student3.coursesEnrolled);
console.log("Current Balance:", student3.checkBalance());
student3.payTuition(300);
console.log("Current Balance:", student3.checkBalance());
console.log("Status:", student3.getStatus());
let student4 = new Student("Rizwan");
student4.enroll("Node.js", 2500);
// console.log("Student ID:", student4.studentID);
console.log(student4);
console.log("Courses Enrolled:", student4.coursesEnrolled);
console.log("Current Balance:", student4.checkBalance());
student4.payTuition(300);
console.log("Current Balance:", student4.checkBalance());
console.log("Status:", student4.getStatus());
export {};
