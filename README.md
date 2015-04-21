react-flux-rails-demo
=====================

This is a really simple example of using [ReactJS](https://facebook.github.io/react/) inside a Rails view to make a better form experience.

![screenshot](/screenshot.png)

### Installation

    git clone https://github.com/zhubert/react-flux-rails-demo
    cd react-flux-rails-demo
    bundle
    rails server
    
### What's it doing?

This is an example of using the [Flux pattern](https://facebook.github.io/flux/docs/overview.html) to manage transient state (in this case, an unsubmitted form).

At a high level what this means is that all data flows in one direction and components aren't aware of each other.  They all are "listening" to the data and re-rendering themselves when appropriate.

### Rails Integration

* Rails initially feeds data into the React side via props
* `<SelectionsForForm/>` dumps the data into what would be hidden inputs for submitting in the usual fashion back to Rails

### Thanks!

* [Alt.js](http://alt.js.org/) - an implementation of Flux pattern
* [Facebook](http://www.facebook.com): for making React in the first place
* [Planning Center Online](http://get.planningcenteronline.com/): awesome company where I work that embraces cool technology
