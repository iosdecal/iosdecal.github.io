# Lab 4: ImagePicker

## Getting Started

1. Open Terminal and navigate to the `iosdecal-sp19` directory using `cd`.

2. Use `git pull` to fetch this lab's starter code.

In today's lab, we'll be creating our first multiview application and get some practice working with image assets in our app. 

This app will display a grid of 12 square images. Clicking an image will display a new view controller with a large preview of the image. Clicking this preview will return to the original grid. We will also include a button to randomize the order of our images in the grid. 

<center>
![](assets/final-product.gif)
</center>

Open the file `ImagePicker.xcodeproj` to start the lab. We have provided the following files for you to use. 

1. `MainViewController.swift` in the `Controller` folder - this file contains the ViewController class that will connect our View created in Interface Builder to our Model. You will be adding code to this file in this lab.

2. `Main.storyboard` in the `View` folder. We've laid out the objects in the Main View for you, but you'll be creating and linking another view controller later in the lab.

3. `Assets.xcassets` - Where we will put the images of our choice. 

Good luck, and don't be afraid to ask other students in your group or the TAs for help if you're stuck!

## Part 1: Images

We want this grid of buttons to display 12 different images. **Source 12 images of your choice and add them to your `Assets.xcassets` folder.** We've provided a selection of images for you to use (in the `Images` folder) - but you're more than welcome to find your own! [Here's a guide](https://github.com/codepath/ios_guides/wiki/Adding-Image-Assets) for how to handle image assets, if you need it.

<small>
*Hint: If you use your own images, you may want to rename the image files to something like `image-1`, `image-2`, etc.*
</small>

Create a model file called `ImagePicker.swift`. In it, write a function `randomize() -> [String]` that will return an array of 12 image file names in random order. Be sure to test it before continuing!

In `MainViewController.swift`, create an instance of your model and use your `randomize` method to have your `UIButtons` display the images. 

Finally, connect the "Randomize" button to your `MainViewController`, and implement the following effect:

<center>
![](assets/randomize.gif)
</center>

<details> <summary>**Hint 1**</summary>
To create an image from a filename, use the `UIImage(named: String)` constructor. 

To set a `UIButton` image, use the method `UIButton.setImage(image: UIImage, for: UIControlState.normal)`.
</details>

<details> <summary>**Hint 2**</summary>
In order to prevent image warping, you can set `UIButton.imageView?.contentMode = .scaleAspectFill` for each of your buttons. 
</details>

## Part 2: Image Preview

Now that you have your randomized image grid, it's time to add functionality to preview the images. 

1. Add a new `ViewController` object to your Storyboard, and create a large square UIButton in the center. You'll be using this to display the enlarged images. 

2. Create a new Cocoa Touch file titled `ImageViewController` that subclasses `UIViewController`, and connect the Storyboard `ViewController` you just created to `ImageViewController`. You can do this from the Identity Inspector, as shown below:

<center>
![](assets/identity-inspector.png)
</center>

Now that you've set up the second view controller, **implement the viewer functionality as demonstrated in the demo in the "Getting Started" section.** When you tap a picture from the selector screen it should bring up a larger version of the image (displayed on the button you defined above). Then, when a user taps the image the view should dismiss. You're responsible for figuring out how the segue should work, and what variables and logic you may need to pass through between views using the `prepare` and `viewDidLoad` methods. Refer to the demo files posted on the course website if you need a refresher on this.


<details> <summary>**Hint 1**</summary>
It's possible to iterate through elements in StackViews! Assuming your StackView is connected to your controller through an outlet named `stack`, use the following syntax:

```swift
for view in stack.arrangedSubviews {
    // Functionality here
}
```

Inside, you can use optional chaining on `view` to "cast" it as whatever particular object type you need.

</details>

<details> <summary>**Hint 2**</summary>
If you find yourself needing to use one of your sender buttons' properties in the `prepare` method *(hint hint)*, use the following syntax to do double optional chaining so you can access both the properties of `UIButton` and `ImageViewController `:

```swift
if let button = sender as? UIButton, let dest = segue.destination as? ImageViewController {
	// Functionality here
}
```
</details>

## Part 3: Checkoff
We'll be checking you off on the following criteria:

1. Randomizing functionality

2. Segue to display single image if image is clicked

3. Return to the inital view controller if single image is clicked




