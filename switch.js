// Employee
let employee = {
    firstName: "David",
    lastName: "Tucker",
    startDate: new Date(2016, 01, 03),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
};

// switch statment with the expression to be evaluated matching the expression's value against a series of clauses. It executes after the first case clause whith a matching value, until a break statment is encountered
switch (employee.department) {
    // clauses
    case 'Engineering':
        console.log('Meet in Building 1'); // this gets executed.
        break; // break out of the switch code if the case matches the expression's value. //! 'break' statment is mandatory for each clause

    case 'Marketing':
        console.log('Meet in Building 2');
        break;

    case 'HR':
        console.log('Meet in Building 1');
        break;

    default: //! 'default' clause is mandatory after all the case clauses. If none of the conditions above resolve to true, default is executed.
        console.log('Meet in Building 3');
}

switch (employee.department) {
    // fall through the next case unless you include a break point. So if the employee's department was 'HR' instead of "Engineering" it would also log 'Meet in Building 1'.
    case 'Engineering':
    case 'HR':
        console.log('Meet in Building 1'); // this gets executed.
        break;

    case 'Marketing':
        console.log('Meet in Building 2');
        break;

    default: 
        console.log('Meet in Building 3');
}
