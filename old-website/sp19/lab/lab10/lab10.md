# Lab 10: Data Persistance (Realm) Sampler

## Getting Started

1. Open Terminal and navigate to the `iosdecal-sp19` directory using `cd`.

2. Use `git pull` to fetch this lab's starter files.

Welcome to the sampler lab for data persistance! In this lab, you'll be using [Realm Database](https://realm.io/products/realm-database) to create an app similar to the demo from lecture. Here, we'll be creating an app to keep track of famous Craigs, called "List of Craigs" (because the alternative has already been trademarked 🤔). We'll be using a Realm to store our Craigs' last names and birthdays, and use a simple `UITableViewController` to display the data.

This lab will be more free-form than the other sampler labs, because we want you to explore what Realm Database can do. We think that telling you exactly what to do as is the style of the other sampler labs doesn't work particularly well for this particular lab as you're mostly adapting a pre-built app to work with Realm, but if you have any feedback about this style of lab please let us (especially David) know!

<center>
<img src="assets/final-product.gif" width="600">
</center>

As a reminder, sampler labs are short mini-labs designed to introduce you to a particular concept. They should be fairly simple and straightforward to implement, and shouldn't take too long to complete. You only need to complete three out of the five sampler labs we assign to recieve full credit, so we recommend you do the ones that you think might be most relevant to your project or that you find the most interesting. You have until **April 30** to turn them in, so you're welcome to work on these in any order and at any time.

## Part 0: Getting Started

Open the file `ListofCraigs.xcodeproj` to start the lab. We have provided the following files for you to use. 

1. `Main.storyboard` - The main storyboard file. Everything here should already be set up for you, so you won't need to touch anything.

2. `CraigTableViewController.swift` - Our main controller file, and where you'll be writing your code for this lab. We've already connected the outlets and actions that you'll need.

Be sure to fully read through `CraigTableViewController.swift` and build/run the app before starting this lab! It helps to understand what all of the functions do, especially since we haven't implemented these Craigs as objects (even though we've given you a boilerplate object to do so with).

One thing in particular that is worth pointing out is the `commit` function at the bottom. It turns out that the "Swipe to Delete" functionality is built into newer versions of iOS, and all we need to do to take advantage of it is to intercept it by overriding its default function.

## Part 1: Why Realm?

Realm (originally TightDB) was one of the original data persistance solutions for mobile, having been around since 2014-ish. It used to be the de-facto on-device database service before Firebase's Firestore was released, but it still has a significant following today - including the Amazon, Dropbox, Netflix, and Starbucks apps. 

Realm is particularly good at being a middle-of-the-road solution to on-device storage: CoreData is great for a small amount of data, but quickly gets complicated when your app needs to store and access multiple objects and databases on device. Firebase is a much more comprehensive solution, but is also quite resource and network intensive and may not be the best tool to use for apps that need to be light and fast. Furthermore, Realm is great for splitting and sharing data across multiple processes or devices/clusters, which is something that can't be done in CoreData or Firestore without heavy tinkering (we won't be covering this particular aspect in our class).

Realm installation follows exactly the same steps as the installation of any other CocoaPod - run `pod init` in your project directory, add `pod 'RealmSwift'` to the `podfile`, and run `pod install` to install the dependencies. As a reminder, **be sure to only use the `.xcworkspace` from now on!** Be sure to import `RealmSwift` (not `Realm`!) at the top of whichever files you'll need it in - in our case, just `CraigTableViewController`

I also highly recommend installing [Realm Studio](https://realm.io/products/realm-studio/) - it's a great way to view and edit your app's Realm database live. You can print the location of your app's database by sticking this line of code in `viewDidLoad` after you initialize your database:

```swift
print(Realm.Configuration.defaultConfiguration.fileURL!)
```

## Part n: Implementing Data Persistance with Realm

This is the part of the lab where we set you free. You should use the [Realm Database Swift documentation](https://realm.io/docs/swift/latest#getting-started) as your primary resource, but don't be afraid to search your issues on StackOverflow (as the documentation is a bit lacking in some areas)!

Rather than specific instructions and code, here's a list of steps to follow in case you get stuck.

1. Install and configure `RealmSwift` and Realm Studio.
2. Initialize a Realm (`let realm = try! Realm()`), and open its file in Realm Studio
3. Edit the given `Craig`s object to work with Realm ([here's a hint](https://stackoverflow.com/a/47955157)), and try adding and deleting Craigs to your Realm (`self.realm.add` and `self.realm.delete`). You should see them pop up in Realm Studio when you run your app!
4. Once you have some `Craig`s in your database, edit the `numberOfRowsInSection` and `cellForRowAt` functions to display the `Craig`s in your database. Hint: read [this StackOverflow answer](https://stackoverflow.com/a/40049459) if you're stuck on how to fetch items from your database. You may need to keep a running list of `Craig`s from the database - you can initialize that with `var realmCraigs: Results<Craig>!`
5. Edit the `addButtonPressed` function (specifically `saveAction`) to add elements to your database rather than the `craigs` list given. Be sure to update `realmCraigs` before refreshing the table view if you're using it.
6. Edit the `commit` function to delete from the database. [This StackOverflow post](https://stackoverflow.com/a/54278474) might help.

Once you're done, you should be able to make changes in your app, and see them happen in real-time in Realm Studio! You should also be able to retain the data between app closures.

## Part n+1: Checkoff
Congrats on finishing this sampler lab - now you have experience working with the three big methods of storing data on iOS! (CoreData, Realm, and Firebase). Pick whichever solution works the best for your app - most of you will probably want to stick to using Firestore, but if your app requires quick data storing and fetching you may want to take a look at Realm over CoreData.

As this lab is a sampler lab, you can check it off any time between when it is assigned and **Tuesday, 4/30**. Good luck with the rest of the sampler labs, and your final project!



<br><br>