# Lab 1: Swift Playground


## Getting Started

1. If you've installed Xcode and its command line tools properly, Git should already be installed on your computer. If it isn't, you can install it following [the instructions on the Git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) or [using Homebrew](https://formulae.brew.sh/formula/git).

2. Open Terminal, and navigate to whichever directory you want to store assignments for this class in using the `cd` command.

3. Clone the repository with this command:

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

If you do end up using a dictionary, you'll want to take a closer look at **optionals** - you may need the `if let __ ` notation if you plan on accessing elements in the dictionary.
</details>

<details> <summary>**Hint 2**</summary>
You can use the `sort(by: )` function to sort an array by increasing or decreasing elements. Check out [this documentation article](https://developer.apple.com/documentation/swift/array/1688499-sort).
</details>

## Checkoff

Congrats on completing the first lab! Flag down your group's TA (or another TA, if they aren't available), and ask to get checked off. In general, check-offs consist of two parts: 

1. A quick run-through of your lab just to make sure everything is working properly.
2. A conceptual question or two to make sure you've understood what happened.

After you've checked off, you're free to leave. But if you want a bit more practice thinking in Swift (or you're done early), give this next question a try :)

## Problem 4 (Optional): Roman Numerals to Integer

<small>*Adapted from this [LeetCode question](https://leetcode.com/problems/roman-to-integer/)*</small>

This is a pretty common "whiteboard interview" question, but for the purposes of learning we're more concerned with your code working than it being fully optimized.

First, some background: roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

<center>

| Symbol | Value |
|:-:|:-:|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

</center>

For example, `2` is written as `II`: just two one's added together. 12 is written as `XII`: `X` + `II`. 

Roman numerals are generally written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, 4 is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to 9, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Implement a function `romanToInt` that takes a roman numeral as a string `num` and converts it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Here's some sample output:

```swift
romanToInt("III")      // returns 3

romanToInt("LVIII")    // returns 58
// Explanation: L = 50, V= 5, III = 3

romanToInt("MCMXCIV")  // returns 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4
```

We'll leave this one as a challenge to you for the most part, so it may be worth sketching out the solution on scratch paper before starting and trawling the Apple Developer Documentation and StackOverflow if you're confused as to how to implement something. Please ask a TA if you're stuck; that's what we're here for!

<details> <summary>**Hint**</summary>
If you need a nudge in the right direction, it may be worth considering the *conditional ternary operator*. It takes the form `question ? answer1 : answer2`, and is essentially a shortcut for evaluating one of two expressions based on whether the question is true or false.

Here's the relevant [Swift documentation](https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html#ID71).
</details>

<br><br><br>
