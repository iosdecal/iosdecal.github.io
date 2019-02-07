# Lab 2: Workplace


## Getting Started

1. Open Terminal and navigate to the `iosdecal-sp19` directory using `cd`.

2. Use `git pull` to fetch this lab's starter code (`lab/Workplace.playground`)

Today, we'll be working with enums, structs, protocols, and extensions. Protocols and extensions can be tricky, so to familiarize you with them we'll be working with "Protocol Oriented Programming" (POP) as opposed to Object Oriented Programming (OOP). We will be building our structures horizontally (POP) rather than vertically (OOP). When designing your various classes vertically, you're utilizing inheritance, creating a base class, then adding functionality through subclassing.

With protocols, we're not stuck with subclassing from one base class. We can adopt as many protocols as we need and plug them in, take them out as we please during our development cycle.

In this lab, you will design a simple workplace. Our end goal is to create these two structs:

- `Manager`
- `Worker`

In creating these structs, there's a lot of similarity shared between them. Historically this problem was solved using inheritance (OOP), but we're going to start with a protocol, not a class. And as stated, we're going to be creating these as structures, not classes.

Good luck, and don't be afraid to ask other students in your group or the TAs for help if you're stuck!

 
## Part 1: Implementing Protocols and Extensions

### 1: Payable

Create a protocol called `Payable` that has one function requirement, `wages()`. It takes in no arguments but returns back a `Double`.

Then, create an extension on the `Payable` protocol and implement the `wages()` function. In your implementation, it should just return back `50_000.00`. 

<small>
*Note: Notice the underscore here, this can act as a comma (as if you were writing it in on paper), it doesn't do anything in code. It just makes your code more readable instead of having to see a bunch of zeros next to each other.*
</small>

<details> <summary>**Hint**</summary>
You can think of **protocols** as a "blueprint" that defines various requirements that suit a particular task or piece of functionality, and **extensions** as small modules that add more functionality to an existing class, struct, enum, or protocol.

Here is the Swift documentation for [protocols](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html) and [extensions](https://docs.swift.org/swift-book/LanguageGuide/Extensions.html). It might be worth your time to skim over the code examples of both documents with your partner.
</details>


### 2: TimeOff

Create another protocol called `TimeOff` which includes a property named `vacationDays` of type `Int` that will be both gettable and settable. It should include a function called `requestForVacation(_:)` which takes in one argument named `days` of type `Int` and returns a `Bool`.

Now, create an extension on the `TimeOff` protocol where we will provide some default implementation to the `requestForVacation(_:)` function. In our implementation of the `requestForVacation(_:)` function, you should return `true` if and only if there are enough `vacationDays` to satisfy the request.

### 3: Work

Create an enum called Task which has three cases: `spreadsheet`, `emails` and `coffee`.

Create a protocol called `Work` which requires that there be one function. That one function should be called `doWork(_:)` which takes in one argument `task` of type `Task`. It should return a `String`.

Create an extension on `Work` and provide a default implementation of the `doWork(_:)` function. In your implementation, you should switch on the `task` argument and return the following `String` based upon the specific case.

- If `task` is `.spreadsheet`: *"Balancing the company budget"*
- If `task` is `.emails`: *"Checking emails"*
- If `task` is `.coffee`: *"Getting coffee"*

<details> <summary>**Hint**</summary>
**Enumerations** define a common type for a group of related values and enables you to work with those values in a type-safe way within your code. If you've worked with enums in C before, these behave in much the same way.

Here's the Swift documentation on [enumerations](https://docs.swift.org/swift-book/LanguageGuide/Enumerations.html). It includes syntax for declaring enums and using them in `switch` statements.
</details>

## Part 2: Putting It All Together

### 4: Manager

Create a new `struct` called `Manager ` which has two instance properties (both of which should be variables). One should be called `name` of type `String`. The other should be called `vacationDays` of type `Int` with a default value of `30`. In addition, implement the function `wages()` similar to the one you wrote in `Payable` (takes in no arguments, returns a `Double`), but you should return `100_000.00` instead.

Now we'll do something that will show how powerful these protocols really are. Extend the `Manager` struct and adopt the following the following protocols in this extension.

- `Payable`
- `TimeOff`

Do not implement any functions within this extension. You are just adopting the various protocols. The `Payable` protocol requires that we implement the `wages()` function, which we already did when we created our structure. But we also created a default implementation of this `wages()` function in the extension of our protocol. Because of how we defined it, if we were to call on `wages()` on an instance of `Manager`, it will refer to the implementation that we created in our declaration of the `Manager` class and return `100_000.00`, not `50_000.00`.

Similarly, the `TimeOff` protocol asks us to conform to it by supplying a gettable / settable property named `vacationDays`, which we've already done. It also asks to implement a function `requestForVacation(_:)` which we didn't do, nor do we have to. We provided a default implementation in our extension of the protocol, so there's nothing else we need to do here.

<details> <summary>**Hint**</summary>
Recall that **structures** are a bit like Classes, except structs are value types and classes are reference type. Because of this, `let` and `var` behave differently with structs and classes. We're using structs here because we don't need the reference capabilities of classes for this particular lab, but you could implement either without much impact here.

Here's the Swift documentation on [structs](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html). Note that the syntax for declaring and initializing structs is quite similar to the syntax for classes.
</details>

### 5: Worker

Create a struct called `Worker` which has two instance properties (both should be variables): one called `name` of type `String`; the other is called `vacationDays` of type `Int` with a default value of `15`. Don't implement the `wages()` function.

Create an extension on Worker and have it adopt the following protocols:

- `Payable`
- `TimeOff`
- `Work`

Do not implement anything in this extension, it should be blank.


### 6: Employee

There's one more neat thing you can do here. Notice that each struct here shares the `Payable` and `TimeOff` protocol. Those seem to be something inherit to every single employee. Well, we can create an `Employee` protocol which adopts both the `Payable` and `TimeOff` protocols to make our lives easier in the long run. Crazy stuff, lets do it.

Going back to end of Part 1 / beginning of Part 2, lets create our `Employee` protocol. It should adopt our `Payable` and `TimeOff` protocols, and be empty inside.

Now anyone that adopts this `Employee` protocol must also conform to the `Payable` and `TimeOff` protocols as well! So let's go back to our `Manager` struct and `Teacher` extension, take out where they are adopting the `Payable` and `TimeOff` protocol, and replace it with the `Employee` protocol (which now accounts for both of those).


<small>
Note: Before you check off your lab with a TA, you might find it useful to run the included tests at the bottom of the playground file and compare your output with the expected results if you haven't already.
</small>

<br><br>