import React from 'react';
import AnalogClockContainer from './components/analog-clock-container/analog-clock-container.component';
import './App.css';

const App = () => {
    return (
        <div className='app-container'>
            <div className='clock-container'>
                <AnalogClockContainer
                    size={250}
                    borderWidth={8}
                    hourHandWidth={8}
                    minuteHandWidth={5}
                />
            </div>
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
            <div className='clock-container'>
                <AnalogClockContainer
                    size={250}
                    backgroundColor={'#242e50'}
                    borderWidth={8}
                    borderColor={'#242e50'}
                    hourHandWidth={8}
                    minuteHandWidth={5}
                    hourMarksWidth={3}
                    hourMarksHeight={12}
                    minuteMarksWidth={2}
                    minuteMarksHeight={5}
                />
            </div>
            <div className='clock-container'>
                <AnalogClockContainer
                    size={250}
                    backgroundColor={'white'}
                    centerNodeColor={'black'}
                    hourHandColor={'#d0d0d0'}
                    minuteHandColor={'#d0d0d0'}
                    borderWidth={8}
                    borderColor={'#242e50'}
                    hourHandWidth={8}
                    minuteHandWidth={5}
                    hourMarksWidth={3}
                    hourMarksHeight={12}
                    hourMarksColor={'black'}
                    renderMinuteMarks={false}
                />
            </div>
            <div className='clock-container'>
                <AnalogClockContainer
                    size={250}
                    backgroundColor={'#1d123a'}
                    centerNodeColor={'white'}
                    hourHandColor={'#d0d0d0'}
                    minuteHandColor={'#d0d0d0'}
                    borderWidth={8}
                    borderColor={'#1d123a'}
                    hourHandWidth={8}
                    minuteHandWidth={5}
                    hourMarksWidth={3}
                    hourMarksHeight={12}
                    hourMarksColor={'white'}
                    renderMinuteMarks={false}
                />
            </div>
            <div className='clock-container'>
                <AnalogClockContainer
                    size={250}
                    backgroundColor={'white'}
                    centerNodeColor={'black'}
                    hourHandColor={'#d0d0d0'}
                    minuteHandColor={'#d0d0d0'}
                    borderWidth={12}
                    borderColor={'#f1921d'}
                    hourHandWidth={8}
                    minuteHandWidth={5}
                    hourMarksWidth={3}
                    hourMarksHeight={12}
                    hourMarksColor={'black'}
                    minuteMarksWidth={2}
                    minuteMarksHeight={5}
                />
            </div>
        </div>
    )
};

export default App;