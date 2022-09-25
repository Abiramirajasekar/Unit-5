let a: number = 1;

let b: string = "abrakadabara";

let c: boolean = true;

let d: null = null;

let e: undefined = undefined;

let f1: number[] = [1, 2, 3, 4];
let f2: Array<number> = [1, 2, 3, 4]

let g1: string[] = ["abc", b, "def", "ghi"];
let g2: Array<string> = ["abc", b, "def", "ghi"];

let g3: Array<string | number> = ["abc", 1, 2, 34, "def"]

let g4: Array<string | number | boolean | Array<number>> = [
    "abc",
    1,
    2,
    c,
    [1, 2, 3],
    "albert"
]

// {} what is the key?

let h1: {
    loading: boolean,
    error: boolean,
    data: []

} = {
    loading: true,
    error: true,
    data: []
}
// record datatype of value(not preferable)
let h2: Record<string, boolean | []> = {
    loading: true,
    error: true,
    data: []
}
// record datatype of value
let h3: Record<string, boolean> = {
    loading: true,
    error: true,

}

let i: Array<{
    name: string;
    age: number;
    place: string;
}> = [
        { name: "Ritesh", age: 28, place: "india" },
        { name: "Albert", age: 29, place: "kerala" }
    ]

let i2: Array<Record<string, string>> = [
    { name: "Ritesh", place: "india" },
    { name: "Albert", place: "kerala" }
]

const add = (a: number, b: number) => {
    return a + b
}
add(1, 2)

let j: Array<number[]> = [
    [1, 2],
    [3, 4],
    [4, 5]
]

let country: Array<"India" | "China"> = [
    "India",
    "China"
]

type country1 = "India" | "China"


let country2: Array<country1> = [
    "India",
    "China"
]

enum Gender { "Male", "Female" }
type User = {
    name: string;
    age?: number;
    email: string;
    // gender?: "Male" | "Female";
    gender?: Gender;
}
let Users: Array<User> = [
    { name: "abi", email: "abc", gender: Gender.Female },
    { name: "satha", email: "abcd", gender: Gender.Male }
]

// tuple syntax u can add extra arguments,and addd opitional
type k = [string, number];

let k1: k[] = [
    ["a", 1],
    ["b", 1],
    ["c", 1],
    ["d", 1]
]

// void-means don't want to return anything
const doSomthingFunction = (a: number, b: number) => {
    console.log(a + b)
}
add(1, 2)
// constractor Genric type
class Car {
    getTyres() {
        return 4;
    }
    getEngine() {
        return "v8"
    }
    getEngineType() {
        return "Petrol"
    }
}
class Indica extends Car {
    getEngineType() {
        return "Electrical"
    }
}
let a1 = new Indica()
a1.getTyres()
a1.getEngineType()