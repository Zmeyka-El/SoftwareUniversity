function solve(first, second, third,) {
    let form = first;
a = Number(second);
b = Number(third);

if (form === "square") {
    let square = a * a;
    console.log(square.toFixed(3));
} else if (form === "rectangle") {
    let rectangle = a * b;
    console.log(rectangle.toFixed(3));
} else if (form === "circle") {
    let circle = a * a * Math.PI;
    console.log(circle.toFixed(3));
}else {(form === "triangle") 
    let triangle = (a / 2) * b;
    console.log(triangle.toFixed(3));
}
}
solve("square", "5"),
solve("rectangle",
"7","2.5"),
solve("circle",
"6"),
solve("triangle",
"4.5",
"20")
