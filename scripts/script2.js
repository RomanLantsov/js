"use strict";
import { co } from "./myLittleLib.js";


////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
////~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 function createColoredClock(){
    let clockWrapper = document.createElement('div');
    let clock_h = document.createElement('span');
    let clock_m = document.createElement('span');
    let clock_s = document.createElement('span');

    clockWrapper.append(clock_h,clock_m,clock_s,);

    clock_h.classList.add('colorClock_hh')
    clock_m.classList.add('colorClock_mm')
    clock_s.classList.add('colorClock_ss')

    let date = (new Date);
    clock_h.append(date.getHours())
    clock_m.append(date.getMinutes())
    clock_s.append(date.getSeconds())

    let timerID;
    clockWrapper.start = ()=>{timerID = setInterval(()=>{
       let date = (new Date); 
        clock_h.firstChild.replaceWith(date.getHours() )    
        clock_m.firstChild.replaceWith(`:${date.getMinutes()}:` )    
        clock_s.firstChild.replaceWith(`${date.getSeconds()<10?'0':''}${date.getSeconds()}`)    
    },1000)}

    clockWrapper.stop = ()=>{clearInterval(timerID)}

    return clockWrapper;
 }

 let newClock = createColoredClock();
 let startButton = document.createElement('button');
 let stopButton = document.createElement('button');

 startButton.addEventListener('click', newClock.start)
 stopButton.addEventListener('click', newClock.stop)
 document.body.append(newClock,startButton,stopButton);
