var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 1;
var b = "abrakadabara";
var c = true;
var d = null;
var e = undefined;
var f1 = [1, 2, 3, 4];
var f2 = [1, 2, 3, 4];
var g1 = ["abc", b, "def", "ghi"];
var g2 = ["abc", b, "def", "ghi"];
var g3 = ["abc", 1, 2, 34, "def"];
var g4 = [
    "abc",
    1,
    2,
    c,
    [1, 2, 3],
    "albert"
];
// {} what is the key?
var h1 = {
    loading: true,
    error: true,
    data: []
};
// record datatype of value(not preferable)
var h2 = {
    loading: true,
    error: true,
    data: []
};
// record datatype of value
var h3 = {
    loading: true,
    error: true
};
var i = [
    { name: "Ritesh", age: 28, place: "india" },
    { name: "Albert", age: 29, place: "kerala" }
];
var i2 = [
    { name: "Ritesh", place: "india" },
    { name: "Albert", place: "kerala" }
];
var add = function (a, b) {
    return a + b;
};
add(1, 2);
var j = [
    [1, 2],
    [3, 4],
    [4, 5]
];
var country = [
    "India",
    "China"
];
var country2 = [
    "India",
    "China"
];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Users = [
    { name: "abi", email: "abc", gender: Gender.Female },
    { name: "satha", email: "abcd", gender: Gender.Male }
];
var k1 = [
    ["a", 1],
    ["b", 1],
    ["c", 1],
    ["d", 1]
];
// void-means don't want to return anything
var doSomthingFunction = function (a, b) {
    console.log(a + b);
};
add(1, 2);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getTyres = function () {
        return 4;
    };
    Car.prototype.getEngine = function () {
        return "v8";
    };
    Car.prototype.getEngineType = function () {
        return "Petrol";
    };
    return Car;
}());
var Indica = /** @class */ (function (_super) {
    __extends(Indica, _super);
    function Indica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Indica.prototype.getEngineType = function () {
        return "Electrical";
    };
    return Indica;
}(Car));
var a1 = new Indica();
a1.getTyres();
a1.getEngineType();
