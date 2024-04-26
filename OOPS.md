# OOPS Interview Questions in typescript

1. **What is Object-Oriented Programming (OOP), and why is it important?**
   - Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of objects, which are instances of classes. OOP focuses on organizing code into objects that interact with each other to accomplish tasks. It emphasizes concepts such as encapsulation, inheritance, polymorphism, and abstraction. OOP is important because it offers several benefits, including code reusability, modularity, scalability, and easier maintenance. It also provides a more intuitive way of modeling real-world entities and relationships, making it easier to design and develop complex software systems.

2. **What are the four principles of OOP, and can you explain each one?**
   - The four principles of OOP are:
     - **Encapsulation:** Encapsulation is the bundling of data and methods that operate on the data into a single unit, called a class. It hides the internal state of an object from the outside world and only exposes the necessary functionalities through well-defined interfaces.
     - **Inheritance:** Inheritance is the mechanism by which a class can inherit properties and methods from another class, called the superclass or base class. It allows for code reuse and facilitates the creation of hierarchical relationships between classes.
     - **Polymorphism:** Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to be called on objects of different types, leading to more flexible and extensible code.
     - **Abstraction:** Abstraction is the process of simplifying complex systems by focusing on essential aspects while hiding unnecessary details. It allows developers to create models that represent real-world entities and interactions in a simplified manner.

3. **How does TypeScript support OOP concepts?**
   - TypeScript supports OOP concepts through features such as classes, interfaces, inheritance, access modifiers, static members, abstract classes, and more. It provides a strong static type system that allows developers to define and enforce types for variables, parameters, and return values, enhancing code safety and maintainability. TypeScript's syntax is similar to traditional object-oriented languages like Java and C#, making it familiar to developers who are already proficient in OOP.

4. **Explain the concept of classes in TypeScript.**
   - In TypeScript, a class is a blueprint for creating objects that encapsulate data and behavior. It serves as a template for creating objects with predefined properties and methods. Classes in TypeScript can contain constructors, properties, methods, access modifiers (public, private, protected), static members, and more. They allow for code organization, reuse, and maintainability by promoting encapsulation and abstraction.

5. **What are constructors in TypeScript classes, and how are they used?**
   - Constructors in TypeScript classes are special methods that are called when an object of the class is instantiated. They are used to initialize the state of an object and perform any necessary setup tasks. Constructors are defined using the `constructor` keyword followed by a parameter list and optional method body. When an object is created using the `new` keyword, the constructor is automatically invoked to initialize the object's properties and set its initial state. Constructors can also take parameters to initialize object properties with specific values during instantiation.

6. **What is inheritance, and how is it implemented in TypeScript?**
   - Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class, known as the superclass or base class. The class that inherits from the superclass is called the subclass or derived class. In TypeScript, inheritance is implemented using the `extends` keyword. Subclasses can inherit properties and methods from a superclass by extending it. They can also override inherited methods and add new methods or properties.

7. **How do you achieve method overriding in TypeScript?**
   - Method overriding in TypeScript refers to the ability of a subclass to provide a new implementation for a method that is already defined in its superclass. To achieve method overriding in TypeScript, you define a method in the subclass with the same name and signature as the method in the superclass. When an object of the subclass calls the overridden method, the subclass's implementation is executed instead of the superclass's implementation.

8. **Explain the difference between `super` and `this` in TypeScript classes.**
   - In TypeScript classes, `super` and `this` serve different purposes:
     - `super`: `super` is used to call methods or access properties of the superclass from within a subclass. It is typically used to invoke the constructor of the superclass (`super()`), access overridden methods or properties of the superclass, or call methods defined in the superclass.
     - `this`: `this` refers to the current instance of the class. It is used to access properties or methods of the current object within the class. Unlike `super`, which specifically refers to the superclass, `this` is used to refer to the current object's properties and methods.

9. **What is encapsulation, and how is it implemented in TypeScript?**
   - Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit, called a class. It allows for the implementation details of a class to be hidden from the outside world, providing a way to protect the data from unauthorized access or modification. In TypeScript, encapsulation is implemented using access modifiers such as `public`, `private`, and `protected`, which control the visibility and accessibility of class members.

10. **How do you implement encapsulation using access modifiers in TypeScript?**
    - In TypeScript, access modifiers control the visibility and accessibility of class members (properties and methods). There are three types of access modifiers:
      - `public`: Public members are accessible from outside the class and can be accessed by any code that has access to the class instance.
      - `private`: Private members are only accessible within the class in which they are defined. They cannot be accessed from outside the class or from subclasses.
      - `protected`: Protected members are accessible within the class in which they are defined and within subclasses. They cannot be accessed from outside the class hierarchy.
    - By using access modifiers appropriately, you can implement encapsulation in TypeScript to hide implementation details and expose only the necessary interfaces to the outside world. This helps ensure data integrity and promotes code maintainability and reusability.


11. **What are access modifiers in TypeScript, and what are their different levels?**
   - Access modifiers in TypeScript are keywords used to control the accessibility of class members (properties and methods). TypeScript supports three access modifiers:
     - `public`: Public members are accessible from outside the class. They can be accessed by any code that has access to the class instance.
     - `private`: Private members are accessible only within the class in which they are defined. They cannot be accessed from outside the class, including subclasses.
     - `protected`: Protected members are accessible within the class in which they are defined and within subclasses. They cannot be accessed from outside the class hierarchy.

12. **Explain the concept of abstraction in TypeScript.**
   - Abstraction is the process of simplifying complex systems by focusing on essential aspects while hiding unnecessary details. In TypeScript, abstraction allows you to define models or interfaces that represent real-world entities and interactions in a simplified manner. Abstraction is achieved by defining abstract classes or interfaces that provide a blueprint for concrete implementations. It allows you to define the structure and behavior of objects without specifying the implementation details, promoting code reusability, maintainability, and flexibility.

13. **How do you achieve abstraction using abstract classes and methods in TypeScript?**
   - Abstraction in TypeScript can be achieved using abstract classes and methods. An abstract class is a class that cannot be instantiated directly and may contain one or more abstract methods. Abstract methods are method declarations without an implementation. Subclasses of an abstract class must provide implementations for all abstract methods, making them concrete classes. Abstract classes and methods provide a way to define a common interface for a group of related classes while allowing for variations in behavior among subclasses.

14. **What are interfaces in TypeScript, and how do they differ from classes?**
   - Interfaces in TypeScript are used to define contracts for objects, specifying the structure and behavior that classes must adhere to. Unlike classes, interfaces do not provide implementations for methods or properties. Instead, they define the shape of objects and serve as blueprints for class implementations. Interfaces can contain method signatures, property declarations, and optional members. They are primarily used for type-checking and enforcing contracts between different parts of a program.

15. **Can a TypeScript class implement multiple interfaces? If yes, how?**
    - Yes, a TypeScript class can implement multiple interfaces by using the `implements` keyword followed by a comma-separated list of interface names. When a class implements multiple interfaces, it must provide implementations for all methods and properties declared in each interface. This allows for greater flexibility and code reuse by allowing a class to conform to multiple contracts defined by different interfaces. Example:
    ```typescript
    interface Printable {
        print(): void;
    }

    interface Loggable {
        log(): void;
    }

    class Logger implements Printable, Loggable {
        print() {
            console.log('Printing...');
        }

        log() {
            console.log('Logging...');
        }
    }

    const logger = new Logger();
    logger.print(); // Output: Printing...
    logger.log();   // Output: Logging...
    ```


16. **What is the purpose of getters and setters in TypeScript classes?**
   - Getters and setters in TypeScript classes provide a way to encapsulate access to object properties and control how they are accessed and modified. Getters are used to retrieve the value of a property, while setters are used to set or update the value of a property. They allow for additional logic to be executed when reading or writing to a property, such as validation or computation.

   ```typescript
   class Circle {
       private _radius: number;

       constructor(radius: number) {
           this._radius = radius;
       }

       // Getter for radius
       get radius(): number {
           return this._radius;
       }

       // Setter for radius
       set radius(value: number) {
           if (value >= 0) {
               this._radius = value;
           } else {
               console.error('Radius must be a non-negative number.');
           }
       }
   }

   const circle = new Circle(5);
   console.log(circle.radius); // Output: 5
   circle.radius = 10; // Setter called
   console.log(circle.radius); // Output: 10
   ```

17. **How do you define static properties and methods in TypeScript classes?**
   - Static properties and methods in TypeScript classes belong to the class itself rather than instances of the class. They are accessed using the class name rather than an object instance. Static properties store data that is shared among all instances of the class, while static methods perform operations that are not specific to any particular instance.

   ```typescript
   class MathUtils {
       static PI: number = 3.14;

       static calculateArea(radius: number): number {
           return this.PI * radius * radius;
       }
   }

   console.log(MathUtils.PI); // Output: 3.14
   console.log(MathUtils.calculateArea(5)); // Output: 78.5
   ```

18. **Explain the concept of polymorphism in TypeScript.**
   - Polymorphism in TypeScript refers to the ability of objects of different classes to be treated as objects of a common superclass. It allows for methods to be called on objects of different types, leading to more flexible and extensible code. Polymorphism enables code reuse and simplifies the implementation of generic algorithms and data structures.

19. **How do you achieve runtime polymorphism in TypeScript?**
   - Runtime polymorphism in TypeScript is achieved through method overriding. When a subclass provides a specific implementation for a method that is already defined in its superclass, objects of the subclass can be treated as objects of the superclass. This allows for dynamic dispatch, where the appropriate method implementation is selected at runtime based on the actual type of the object.

   ```typescript
   class Animal {
       speak(): void {
           console.log('Animal speaks');
       }
   }

   class Dog extends Animal {
       speak(): void {
           console.log('Dog barks');
       }
   }

   const animal: Animal = new Dog();
   animal.speak(); // Output: Dog barks
   ```

20. **What is method overloading, and does TypeScript support it?**
   - Method overloading is a feature that allows a class to have multiple methods with the same name but different parameter lists. Each method provides a different implementation based on the number or types of parameters it accepts. TypeScript supports method overloading using function overloading syntax, where multiple function signatures are declared for a single function name.

   ```typescript
   function add(x: number, y: number): number;
   function add(x: string, y: string): string;
   function add(x: any, y: any): any {
       if (typeof x === 'number' && typeof y === 'number') {
           return x + y;
       } else if (typeof x === 'string' && typeof y === 'string') {
           return x.concat(y);
       } else {
           throw new Error('Unsupported types');
       }
   }

   console.log(add(5, 3)); // Output: 8
   console.log(add('Hello', 'World')); // Output: HelloWorld
   ```


21. **How does TypeScript handle method overloading?**
   - TypeScript supports method overloading by allowing developers to declare multiple function signatures for a single function name. When the function is called, TypeScript selects the appropriate overload based on the number and types of arguments provided. However, only a single implementation of the function is allowed, which is defined separately from the overloaded signatures.

   ```typescript
   function add(x: number, y: number): number;
   function add(x: string, y: string): string;
   function add(x: any, y: any): any {
       if (typeof x === 'number' && typeof y === 'number') {
           return x + y;
       } else if (typeof x === 'string' && typeof y === 'string') {
           return x.concat(y);
       } else {
           throw new Error('Unsupported types');
       }
   }

   console.log(add(5, 3)); // Output: 8
   console.log(add('Hello', 'World')); // Output: HelloWorld
   ```

22. **What is composition, and how can it be implemented in TypeScript?**
   - Composition is a design principle in OOP where objects are composed of other objects to achieve reuse and modularity. It promotes building complex objects by combining simpler components rather than relying on inheritance hierarchies. In TypeScript, composition can be implemented by creating classes that contain instances of other classes as properties. This allows for greater flexibility and code reuse compared to inheritance.

   ```typescript
   class Engine {
       start() {
           console.log('Engine started');
       }
   }

   class Car {
       private engine: Engine;

       constructor() {
           this.engine = new Engine();
       }

       startEngine() {
           this.engine.start();
       }
   }

   const car = new Car();
   car.startEngine(); // Output: Engine started
   ```

23. **What is the difference between composition and inheritance?**
   - Composition and inheritance are two different approaches to achieving code reuse and modularity in OOP:
     - **Inheritance**: Inheritance involves creating a new class by extending an existing class, inheriting its properties and methods. It promotes code reuse by allowing subclasses to reuse behavior from a superclass. However, it can lead to tight coupling and a rigid class hierarchy.
     - **Composition**: Composition involves building complex objects by combining simpler components, or "has-a" relationships. It promotes code reuse and modularity by assembling objects from smaller building blocks. Composition offers more flexibility and is often preferred over inheritance for designing reusable and maintainable code.

24. **Explain the concept of SOLID principles in OOP, and how does TypeScript support them?**
   - SOLID is an acronym for five design principles that promote clean, modular, and maintainable code in OOP:
     - **S - Single Responsibility Principle**: A class should have only one reason to change.
     - **O - Open/Closed Principle**: Software entities should be open for extension but closed for modification.
     - **L - Liskov Substitution Principle**: Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
     - **I - Interface Segregation Principle**: Clients should not be forced to depend on interfaces they do not use.
     - **D - Dependency Inversion Principle**: High-level modules should not depend on low-level modules. Both should depend on abstractions.
   - TypeScript supports these principles by providing features such as interfaces, abstract classes, access modifiers, and static typing, which help enforce these principles and facilitate the creation of modular and maintainable code.

25. **Can you provide an example of a real-world scenario where you would use OOP principles in TypeScript?**
    - One example of using OOP principles in TypeScript is modeling a banking system. You could create classes such as `Account`, `SavingsAccount`, and `CheckingAccount`, each encapsulating its own data and behavior. Inheritance could be used to represent the relationship between different types of accounts, while composition could be used to include features such as interest calculation or transaction history. Interfaces could define common behaviors like `Deposit` and `Withdraw`, promoting code reuse and adherence to SOLID principles.

