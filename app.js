let books = ["JavaScript", "HTML", "CSS", "React", "Python", "Java"];


//1
console.log("1 kitablarin sayi :", books.length);
console.log("İlk kitab:", books[0]);
console.log("Son kitab:", books[books.length - 1]);

//2
books.push("TypeScript");
books.unshift("Git");
console.log(" yeni siyahi :", books);

//3?


//4?


//5
let hasReact = books.includes("React");
console.log("React var?:", hasReact);

//6?

//7
let longNames = books.filter(function(book) {
    return book.length > 4;
});
console.log(" Adi 4 herfden uzun olnalar :", longNames);

//8
let booksWithSuffix = books.map(function(book) {
    return book + " kitabi";
});
console.log(" Yeni massiv :", booksWithSuffix);
console.log("esas books massivi dəyişmədi:", books);

//9
let bookWithA = books.find(function(book) {
    return book.includes("a");
});
console.log("Adinda 'a' herfi olan ilk kitab:", bookWithA);

//10?


//11
console.log("massivin son veziyyeti :", books);