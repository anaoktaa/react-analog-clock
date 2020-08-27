# React-Analog-Clock

React analog clock is a customizable analog clock component build using React. It provides an easy way of adding a clock for your application. It is customizable by passing properties to the component.

<p align="center">
  <img src='./src/assets/gif/react-analog-clock.gif' />
</p>


## Demo

[Online demo](https://anaoktaa.github.io/react-analog-clock/) is available!

## Installation

```bash
$ npm install
$ npm start
```

### Usage

```js
import React from 'react';
import AnalogClockContainer from './components/analog-clock-container/analog-clock-container.component';
import './App.css';

const App = () => {
    return (
        <div className='app-container'>
            <div className='clock-container'>
                <AnalogClockContainer
                    size={250}
                    borderWidth={0}
                    hourHandWidth={8}
                    minuteHandWidth={5}
                    backgroundColor={'#444434'}
                    borderColor={'#444434'}
                    secondHandColor={'#676757'}
                    centerNodeColor={'#ee864a'}
                    hourHandColor={'white'}
                    minuteHandColor={'white'}
                    renderMinuteMarks={false}
                    renderHourMarks={false}
                />
            </div>
        </div>
    )
};

export default App;
```

### Available Props

|Prop name|Description|Default value|Example values|
|----|----|----|----|
|size|Size clock, in px.|`300`|`200`|
|backgroundColor|Background color clock (string)|`rgba(0, 0, 0, .8)`|`black`|
|border|Whether border shall be rendered|`true`|`false`|
|centerNodeColor|Center node color (string)|`white`|`#efefef`|
|centerNodeSize|Center node size, in pixels.|`20`|`15`|
|borderColor|Border color clock (string)|`#5f5f5f`|`white`|
|borderWidth|Border width, in px.|`10`|`15`|
|hourHandLength|Hour hand length, in %.|`30`|`25`|
|hourHandWidth|Hour hand width, in px.|`12`|`10`|
|hourHandColor|Hour hand color (string)|`rgba(255, 255, 255, .8)`|`yellow`|
|minuteHandLength|Minute hand length, in %.|`39`|`30`|
|minuteHandWidth|Minute hand width, in px.|`8`|`5`|
|minuteHandColor|Minute hand color (string)|`grey`|`#929292`|
|secondHandLength|Second hand length, in %.|`46`|`40`|
|secondHandWidth|Second hand width, in px.|`3`|`4`|
|secondHandColor|Second hand color (string)|`red`|`yellow`|
|renderMinuteMarks|Whether minute marks shall be rendered.|`true`|`false`|
|renderHourMarks|Whether hour marks shall be rendered.|`true`|`true`|
|hourMarksColor|Hour marks color (string)|`white`|`#fff`|
|hourMarksWidth|Hour marks width, in px.|`8`|`10`|
|hourMarksHeight|Hour marks height, in px.|`10`|`12`|
|minuteMarksColor|Minute marks color (string)|`#7b7b7b`|`#68a244`|
|minuteMarksWidth|Minute marks width, in px.|`4`|`5`|
|minuteMarksHeight|Minute marks height, in px.|`4`|`5`|

