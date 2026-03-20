# Javascript and classes

Technically js doesn't have classes. but in general it does have classes, it's imp to note that javascript is prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanism.

# OOPs
- Base Four pillar of OOP
    Encapsulation: Bundles data (attributes) and methods into a single unit (class) while restricting direct access to internal data, ensuring integrity.
        Example: A BankAccount class holding balance as a private variable, updated only via public deposit() or withdraw() methods.
    Abstraction: Hides complex internal implementation details, exposing only essential features to the user.
        Example: Using a start_engine() method in a car without needing to understand the underlying, complex mechanics.
    Inheritance: Allows a child class to acquire properties and behaviors from a parent class, promoting code reusability and establishing a "is-a" relationship.
        Example: A Dog class inheriting general attributes from an Animal class, while adding specific methods like bark().
    Polymorphism: Enables objects of different classes to be treated as a common superclass, allowing one interface to act differently based on the object type.
        Example: Calling a draw() method on a collection containing both Circle and Square objects, causing each to render appropriately.

- it's a programming paradigm - style/process to write code 
- Collection of properties and methods.
 Ex:- toLowerCase()
- NEED - code gonna messup alot OOP handles readability and handles messuped code easily.

- Terms to discuss related to OOP
    - Object literal
    - Constructor functions
    //Remaining parts from 12th file.
    - Prototypes  
    - Classes
    - Instances (new, this) 

# BTS of 'new' keyword...

- A new object is created: The new keyword initiates the creation of a new Javascript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be the intented return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

