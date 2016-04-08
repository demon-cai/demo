//Basic Type
var isDone: boolean = false;
var height: number = 6;
var name: string = "demo";
// Array Type
var list: number[] = [1,2,3];
var list_another: Array<number> = [1, 2, 3];
var list_s: string[] = ['1', '2', '3'];
var list_s_another: Array<string> = ['1', '2', '3'];
enum Color { Red = 1, Green=4, Blue }; 
var c: Color = Color.Green;﻿​
// any type
var notSure: any = 4;
notSure = "string";
notSure = false;
// void type
function warnUser(): void {
    alert("this is my warn message");
}
// interface
interface SquareConfig {
    color: string;
    width?: number;//Optional Property
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare({ color: "black" });

// interface function
interface SearchFunc{
    (source: string, subStr: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function(src: string, sub:string){
    var result = src.search(sub);
    if(result==-1){
        return false;
    }else{
        return true;
    }
}
// interface Array
interface StringArray {
    [index: number]: string;
}

var myArray: StringArray;
myArray = ["2", "1"];

// interface class 
interface ClockInterface{
    currentTime: Date;
    setData(d: Date,k:string);
}

class Clock implements ClockInterface {
    currentTime: Date;

    setData(d: Date) {
        this.currentTime = d;
    }
    setTime(d:Date){
        this.currentTime = d;
    }
    constructor(h: number;m: number) {
    }
}

import validation = require('./Validation');
var numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
if(isDone==true){
    alert(isDone);
}