# Lab 9: Programmatic UI Sampler

## Getting Started

There are no starter files for this lab. Create a new `.xcodeproj`, name it whatever you want and put it in a `lab9` folder.

Welcome to the sampler lab for programmatic UI! In this lab, you'll be implementing a navigation controller, a button, and a push segue without touching Storyboard. This lab should be an amalgam of new content and stuff you've already seen before (like AutoLayout and Navigation Controllers), so don't hesitate to ask a TA if you're stuck or lost!

As a reminder, sampler labs are short mini-labs designed to introduce you to a particular concept. They should be fairly simple and straightforward to implement, and shouldn't take too long to complete. You only need to complete three out of the five sampler labs we assign to recieve full credit, so we recommend you do the ones that you think might be most relevant to your project or that you find the most interesting. You have until **April 30** to turn them in, so you're welcome to work on these in any order and at any time.

<center>
<img src="assets/final-product.jpg" width="600">
</center>

## Part 1: Goodbye Storyboard!

To get started, first open XCode and Create a New Project. We'll begin with a Single View App, just as we have been for the past labs. Give your app a snazzy name and we'll begin.

First, we need to **delete our Main.storyboard and our LaunchScreen.storyboard files.** After you've moved both of these to the trash, you'll notice that while your application will build, it will immediately crash when Simulator opens.

Go to your Project Navigator Settings (blue icon with your project name at the top of your Project Navigator sidebar) and scroll down to the Deployment Info header. Now, **remove the name Main from the Main Interface field.** This will ensure that XCode is aware that we will not be building our User Interface from Interface Builder.

Now, open your AppDelegate.swift file and in the 'didFinishLaunchingWithOptions' function, add code to initialize your root view controller. First, **initialize the optional `window` variable declared above the function to a UIWindow with the frame `UIScreen.main.bounds`.** Next, **make the `window?` variable key and visible using the .makeKeyAndVisible() function.** This will show the current window and position it in front of all other windows at the same level or lower. Finally, to configure your root view controller **set the `rootViewController` property of the UIWindow to an instance of your ViewController.**

Running your app should now show a white screen — this presents your ViewController.swift but to double-check your understanding, **in the `viewDidLoad` function of your ViewController.swift file, set the `view.backgroundColor` property to a color of your choosing.** This change should be reflected in Simulator when you run the app.


## Part 2: Adding a Navigation Controller

Now that you've got the initial view displaying without the use of Storyboard, let's change it around so that our initial view is a Navigation Controller!

Recall how Navigation Controllers work - you can set views as their subviews, and define one of those subviews as the *root view controller* (the view that shows up when the navigation controller is initialized). If we set the navigation controller as our initial view controller for our app, the resulting built app will display the root view controller with a navigation bar on the top.

In Storyboard, this relationship is represented as such:

<center>
<img src="assets/root-controller-explanation.png" width="400">
</center>


Let's implement that relationship programmatically. In `AppDelegate.swift`, under `didFinishLaunchingWithOptions`, define a `UINavigationController`. Set the `rootViewController` parameter to be an instance of the view we just defined.

Then, replace the initial view controller (`window?.rootViewController`) with the navigation controller instance we just defined.

Your app should look like this now:

<center>
<img src="assets/part-2.png" width="400">
</center>


## Part 3: Adding a Button

Let's create a UIButton to add onto our view controller. Start by defining a `UIButton()` instance variable, and naming it something informative (like `nextButton`). 

Now, in `viewDidLoad()`, we can start writing code to define our button's looks and functionality. Give your button the following properties:

 - *Background Color*: White
 - *Title Color*: red (as for the `for` parameter, you can set it to `.normal`)
 - *Title*: "NEXT"

Then, add your button to your main view's subview using the `view.addSubview` function.

If we try to build and run the app now, it should crash because Swift doesn't know where to place the button. Let's fix this by setting some AutoLayout constraints! Note that you must do this below where you've added the button to the view's subview - AutoLayout can't constrain things if they don't exist!

<small>*Note*: You can access `nextButton`'s constraints with `nextButton.[constraintName].constraint`. Autofill suggestions are your friend for figuring out what parameters are required!</small>

 - *Leading Anchor*: Equal to the view's leading anchor + 20
 - *Trailing Anchor*: Equal to the view's trailing anchor - 20
 - *Height Anchor*: Equal to 50 (constant)
 - *Center Y Anchor*: Equal to the view's center Y anchor

Remember, you'll also need to set these constraints as active once you've defined them - you can do that with `[yourConstraintName].isActive = true`

Finally, in order to get AutoLayout to configure properly, you'll need to add this line of code below your constraints:

```swift
nextButton.translatesAutoresizingMaskIntoConstraints = false
```

We won't go in depth about what it does here as it's out of the scope of this class, but if you're interested in learning more about it you can [read this](https://developer.apple.com/documentation/uikit/uiview/1622572-translatesautoresizingmaskintoco).

## Part 4: Adding a Segue

Our button is quite lonely, isn't it? Let's add a segue so our button actually has a bit of functionality.

First things first, create a new `ViewController` file named `SecondViewController.swift` and have it extend `UIViewController`. You don't need to do much in here - all we've done is set the background color to `.black`. 

Now, let's give our button some functionality. We'll need to add a target; use the `nextButton.addTarget` function to do this. Set `target` to `self`, and `for` to `.touchUpInside`.

As for the `action` parameter, we'll be using a selector. Selectors are a remenant from Objective-C; they were primarily used to pass in methods to objects or structs at runtime. You can read more about them [here](https://www.hackingwithswift.com/example-code/language/what-is-a-selector). For our purposes, we'll set our `action` to `#selector(nextButtonTapped)`. 

Now, we have to define a function `nextButtonTapped`. Define it below `viewDidLoad`, and give it a `@objc` attribute before `func` (as we need to notify Swift that we're passing it in as a selector). Place this code in that function:

```swift
let nextScreen = SecondViewController()
navigationController?.pushViewController(nextScreen, animated: true)
```

Essentially, we're defining an instance of our second view controller and pushing it onto the view stack programmatically. We're using the `pushViewController` function of `navigationController?` rather than the `present` that we're used to, since we want the navigation controller to display at the top (and have a "back" button!)


## Part 5: Animate your Button!

So far, we've been using the default UIButtons for all of our needs. However, just as we can customize properties of a UIButton like its fill, shape, and text, we can also override or extend properties like animation and presentation to provide a more interesting UI.

We'll start by **creating an extension for the class UIButton in our ViewController.swift file and defining a function `pulse()`.** In this function, we'll first **declare a constant `pulse` and initialize it to a CASpringAnimation object with its `keyPath` parameter set to `"transform.scale"`.** There are many keyPaths available, from position to opacity. Next, **copy the following code into your `pulse()` function:**

```swift
pulse.duration = 0.5
pulse.fromValue = 0.9
pulse.toValue = 1.0
pulse.initialVelocity = 0.9
pulse.damping = 1.0

layer.add(pulse, forKey:nil)
```

To expose our function to our `#selector`, **add an `@objc` decorator to the name of your function `pulse()`.**

We've completed the code to animate our UIButton, but to call our function, we must first define a custom `@objc` function to use the new UIButton functionality. **Copy the following function into your ViewController.swift file:**

```swift
@objc func pulseButton(_ sender:UIButton) {
        sender.pulse()
    }
```

We'll call this function with another `#selector`. **Add the following line to `viewDidLoad()`:**

```swift
nextButton.addTarget(self, action: #selector(nextButtonTapped), for: .touchUpInside)
```

If everything worked out properly, touching and holding over your button should make it bounce slightly!

## Part 6: Checkoff
Congrats on finishing this sampler lab - hopefully you have a idea now of how you can design UIs programmatically and how similar it is to working with Storyboard!

As this lab is a sampler lab, you can check it off any time between when it is assigned and **Tuesday, 4/30**. Good luck with the rest of the sampler labs, and your final project!



<br>