# Loading Spinner Web Component

A highly customizable loading spinner as a pure web component.

![Preview](https://media.giphy.com/media/26vIg1eDTCsCWYFGM/giphy.gif)

## Credit

The code for this spinner was written by [seanwuapps](https://github.com/seanwuapps/stencil-loading-spinner). All the props to him. I just submitted it to npm. I also followed [this](https://www.twilio.com/blog/2018/02/creating-and-publishing-web-components-with-stencil.html) tutorial about publishing stencil components from the wonderful folks at Twilio, specifically [DOMINIK KUNDEL](https://www.twitter.com/dkundel).

## Installation

`npm install @thebrockellis/loading-spinner`

## Usage

At the top of your component/page, import the package like so:

`import '@thebrockellis/loading-spinner';`

## Configuration

```html
<loading-spinner type="android" color="green"></loading-spinner>
<loading-spinner type="circle" color="#333333"></loading-spinner>
<loading-spinner type="bars" color="orange"></loading-spinner>
<loading-spinner type="bars" color="blue"></loading-spinner>
<loading-spinner type="ios" color="red"></loading-spinner>
```
