// ___________________Solution no. 1___________________

function filterEvenNumbers(numbers: number[]): number[] {
    let answer: number[] = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            answer.push(numbers[i]);
        }
    }

    return answer;
}





// ___________________Solution no. 2___________________

function reverseString(text: string): string {

    let reversedArray = text.split("");
    reversedArray.reverse();
    return reversedArray.join("");

}





// ___________________Solution no. 3___________________

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}



// ___________________Solution no. 4_________________



function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
// const user = { id: 1, name: "John Doe", age: 21 };



// ___________________Solution no. 5_________________



interface Book {
    title: string;
    author: string;
    publishedYear: number;
}


function toggleReadStatus(book: Book) {

    const { title, author, publishedYear } = book;

    return {
        title,
        author,
        publishedYear,
        isRead: true
    };
}
// const myBook = {
//     title: "TypeScript Guide",
//     author: "Jane Doe",
//     publishedYear: 2024
// };



//   ___________________  Solution no. 6_________________



class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {

        return "Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade;
    }
}
// const student = new Student("Alice", 20, "A");






//   _____________________Solution no. 07_________________



function getIntersection(arr1: number[], arr2: number[]): number[] {
    let ans: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !ans.includes(arr1[i])) {
            ans.push(arr1[i]);
        }
    }

    return ans;
}