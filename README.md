[![Build Status](https://travis-ci.org/Willibaur/airport-JavaScript.svg?branch=master)](https://travis-ci.org/Willibaur/airport-JavaScript)
=================

Airport Emulator JavaScript
=================

Task
-----

This is a solution to control the flow of planes at an airport. The planes can land and take off if the weather is sunny.

Occasionally it may be stormy weather, in which case no planes can land or take off.  

Here are the user stories used.

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

Technologies used
-----------------

* Continuois integration
  * Travis CI

* Testing
  * Jasmine

* Back end framework
  * JavaScript


Setting up testing environment
------------------------------

In order to play around with this app you need to clone the repo shown below and
execute the following commands to be functional.

```sh
$ git clone git@github.com:Willibaur/airport-JavaScript.git
$ cd airport-JavaScript
```

If you want to run all tests written previously, you need to execute:

```sh
$ open SpecRunner.html            // For Macs
$ google-chrome SpecRunner.html   // For Linux Mint Debian
```

This will open a window in your default browser where you can see all info related to the tests written in Jasmine.


Contributors
------------

* [William Bautista](https://github.com/Willibaur)
