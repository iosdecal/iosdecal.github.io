# Lab 1: Swift Playground


## Getting Started

0: If you've installed Xcode and its command line tools properly, Git should already be installed on your computer. If it isn't, you can install it following [the instructions on the Git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) or [using Homebrew](https://formulae.brew.sh/formula/git).

1: Open Terminal, and navigate to whichever directory you want to store assignments for this class in using the `cd` command.

2: Clone the repository with this command:

```bash
git clone https://github.com/iosdecal/iosdecal-sp19.git
```

<small>
*Note: In the future, you can get new assignments when we update the repository by `cd`-ing to the repo's directory and using `git pull`* </small>

For this lab (and all subsequent labs), you'll be working with a partner from your group.

When you and your partner are done, ask your TA to check you off. If you haven't finished the lab in the allotted time (or are otherwise unable to get checked off), you can get checked off with your partner on next Tuesday's office hours, but we will not be checking off labs any later than that.

Good luck, and don't be afraid to ask other students in your group or the TAs for help if you're stuck!

## Problem 1: Swift Warmup
 
 Implement the following functions:
 
 1. A function `tossCoin`, which takes in no arguments and randomly returns the strings "Heads" or "Tails". Recall that the function `arc4random()` will give you a random integer.
 
 2. A function `simulateTosses`, which takes in an integer `n` as function parameter `numTosses`. It should use `tossCoin` to toss a coin `n` times and return the number of heads shown as an integer.

<details> <summary>**Hint 1**</summary>
The modulo operator (`%`) returns true if a number is divisible by another number and false otherwise. For example, `n % 5` will tell you whether or not `n` is divisible by 5. You might be able to use this in `tossCoin`.
</details>

<details> <summary>**Hint 2**</summary>
The range operator (`...`) allows you to iterate through a range of values (inclusive) if you use it inside a `for` loop.
</details>


## Problem 2: Digits

Implement a function `digits` that takes an integer `n` and returns an array containing its digits in order.

Here's some sample output:

```swift
digits(123)  // [1, 2, 3]
digits(0)    // returns [0]
```

Again, recall that you can use `_` to ignore the external parameter name.

<details> <summary>**Hint 1**</summary>
Give recursion a try! What is the base case, and what should the recursive case do?
</details>

<details> <summary>**Hint 2**</summary>
You can append an element onto the end of an array either using the `+` operator or the `append` function.

```swift
let a = [1, 2]
a += [3]    // a is now [1, 2, 3]
a.append(4) // a is now [1, 2, 3, 4] 
```
</details>

## Problem 3: Number Frequency

Implement a function `frequency` that takes in an unsorted array of integers `arr` as function parameter `ofNumbers`. It should return a string containing the frequency of each one in this format: 

```swift
"num1:freq1, num2:freq2..."
```

The frequency of a number is the number of times it appears in the array. The numbers should in ascending order followed by their frequency, and the last entry must not be followed by a comma. 

Here's some sample output:

```swift
ns = [3, 1, 2, 3, 2, 1, 2, 3, 2, 2]
frequency(ofNumbers: ns)  // returns "1:2, 2:5, 3:3"
```

<details> <summary>**Hint 1**</summary>
There are multiple ways to solve this problem, but the easiest way is probably to use a dictionary. How might a dictionary's hashing property benefit us in this problem?

If you do end up using a dictionary, you may want to look ahead a bit to learn about **optionals** - you may need the `if let __ ` notation if you plan on accessing elements in the dictionary.
</details>

<details> <summary>**Hint 2**</summary>
You can use the `sort(by: )` function to sort an array by increasing or decreasing elements. Check out [this documentation article](https://developer.apple.com/documentation/swift/array/1688499-sort).
</details>


<br><br>
