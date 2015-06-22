// A linked list is a data structure that contains a value and a reference to
// some next node in the list. The last node will alwasy have null as it's next
// value
// Given the list: A - B - C - D - null
// We would call A the "Head" and D the "Last"
// We can represent this list with the following object:

var list = {
    value: "A",
    next: {
        value: "B",
        next: {
            value: "C",
            next: {
                value: "D",
                next: null
            }
        }
    }
}

// Write a function that finds the last element given a linked list
