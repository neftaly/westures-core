# westures-core

This module contains the core functionality of the Westures JavaScript gesture
library. It is intended for use as a lighter-weight module to use if you do not
intend on using the base gestures included with the standard `westures` module.

Westures is a fork of [ZingTouch](https://github.com/zingchart/zingtouch). 

## Advisory

This is an alpha release of this library. Browser compatability has not been
tested except in the newest stable releases of Chrome and Firefox. Likewise, it
has only been tested on a very small selection of devices. 

That said, please do give it a try, and if something breaks, please let me know!
Or, even better, figure out why it broke, figure out a solution, and submit a
pull request!

## Table of Contents

- [Overview](#overview)
- [Basic Usage](#basic-usage)
- [Implementing Custom Gestures](#implementing-custom-gestures)
- [What's Changed](#changes-from-zingtouch)

## Overview

There are seven classes defined in this module:

- _Binding_: Bind a Gesture to an element within a Region.
- _Gesture_: Respond to input phase "hooks" to define a gesture.
- _Input_: Track a single pointer through its lifetime, and store the progress
    of gestures associated with that input.
- _Point2D_: Store and act on a 2-dimensional point.
- _PointerData_: Record data pertaining to a single user input event for a
    single pointer.
- _Region_: Listen for user input events and respond appropriately.
- _State_: Track all active Inputs within a Region.

These classes are structured as follows:

```text
Region
  \-Binding
  |  \-Gesture
  |
  \-State
     \-Input
        \-PointerData
           \-Point2D
```
## Basic Usage

### Importing the module

```javascript
const wes = require('westures-core');
```

### Declaring a Region

First, decide what region should listen for events. If you want elements to
continue to responding to input events from the `move` and `end` phases even if
the pointer moves outside the element, you should use an region that
contains the element. This can even be the window object if you want these
events to fire event if the pointer goes outside the browser window.

For example:

```javascript
const region = new wes.Region(window);
```

Of course, if you have lots of interactable elements on your page, you may want
to consider using smaller elements as binding regions, or event the interactable
element itself.

For example, if you have a canvas element with id `draw-struff` that you want to
interact with, you could do:

```javascript
const region = new wes.Region(document.querySelector('#draw-stuff'));
```

### Binding an element within a Region

Suppose you have a div (id 'pannable') within which you want to detect a Pan
gesture (assume that such a gesture is available). Your handler is called
`panner`.

```javascript
region.bind(document.querySelector('#pannable'), new Pan(), panner);
```

The `panner` function will now be called whenever a Pan hook returns non-null
data. The data returned by the hook will be available inside `panner` as such:

```javascript
function panner(data) {
  // data.x ...
  // data.y ...
  // and so on, depending on the Gesture
}
```

## Implementing Custom Gestures

The core technique used by Westures (originally conceived for ZingTouch) is to
process all user inputs and filter them through three key lifecycle phases:
`start`, `move`, and `end`. Gestures are defined by how they respond to these
phases.  To respond to the stages, a gesture extends the `Gesture` class
provided by this module and overrides the method (a.k.a. "hook") corresponding
to the name of the phase. 

The hook, when called, will receive the current State object of the region. To
maintain responsiveness, the functionality within a hook should be short and as
efficient as possible.

For example, a simple way to implement a 'Tap' gesture would be as follows:

```javascript
const { Gesture } = require('westures-core');

class Tap extends Gesture {
  end(state) {
    const {x,y} = state.getInputsInPhase('end')[0].current.point;
    return {x,y};
  }
}
```

The default hooks for all Gestures simple return null. Data will only be
forwarded to bound handlers when a non-null value is returned by a hook.

## Changes From ZingTouch
The fundamental idea of ZingTouch, the three-phase hook structure, remains more
or less the same. Most of the changes have to do with streamlining and
simplifying the code such that it is easier to use and has a wider range of
capabilities. Specifically:

- Reorganized and simplified code structure.
  - The arbiter-interpreter-dispatcher scheme has been significantly simplified.
    - There is no arbiter. instead the Region class has an 'arbitrate' function.
    - There is no interpreter. Instead the Binding class has an 'evaluateHook'
      function.
    - There is no dispatcher. The handlers are called directly.
  - Fewer levels of code and fewer attempts to ram multiple types of
    functionality into a single function. I've tried to keep all functions clear
    and simple.
- Creation and use of a Point2D class.
- Redesigned technique for handling inputs allows continuous use of touches.
  ZingTouch had a tendency to stop responding to touches if some gesture ended,
  this should no longer be the case. Users should now be able to seamlessly flow
  from one gesture to another (or even multiple simultaneously) without having
  to restart their touches.
- Support for using the window object as a region.
- Simplified hook interaction. A single 'state' object is passed, as that is
  all that is really needed.
- Simplified handler interaction. As the handlers are called directly instead of
  as the callback for an event, the parameters do not need to be wrapped up
  inside the 'details' property of an event object.


