"use strict";

let audioContext = new AudioContext();

window.onload = () => {
  let onOff = document.getElementById("on-off");
  let span = document.getElementsByTagName("span")[0];
  let waveformTypes = document.getElementsByTagName("li");

  let selectedWaveform = "sawtooth";

  let osc = false;

  setInterval(() => {
    if (!osc) {
      console.log("Oscillator is stopped m8");
    } else {
      let freqSliderVal = document.getElementById("freq-slide").value;
      osc.frequency.value = freqSliderVal;
      osc.type = selectedWaveform;
      console.log(`Oscillator is playing. Frequency value is ${freqSliderVal}`);
    }
  }, 50);

  function select() {
    selectedWaveform = document.getElementById(this.id).id;
    console.log(selectedWaveform);
    let selectedWaveformElement = document.getElementById(this.id);
    for (let i = 0; i < waveformTypes.length; i++) {
      waveformTypes[i].classList.remove("selected-waveform");
      selectedWaveformElement.classList.add("selected-waveform");
    }
  }

  for (var i = 0; i < waveformTypes.length; i++) {
    waveformTypes[i].addEventListener("click", select);
  }

  onOff.addEventListener("click", () => {
    let freqSliderVal = document.getElementById("freq-slide").value;
    console.log(freqSliderVal);

    if (!osc) {
      osc = audioContext.createOscillator();
      osc.type = selectedWaveform;
      osc.frequency.value = freqSliderVal;
      osc.connect(audioContext.destination);
      osc.start(audioContext.currentTime);
      onOff.value = "stop";
      span.innerHTML = "Click to Stop Oscillator";
    } else {
      osc.stop(audioContext.currentTime);
      osc = false;
      onOff.value = "start";
      span.innerHTML = "Click to Start Oscillator";
    }
  });
};

// let osc = audioContext.createOscillator();

// let saw = "sawtooth";
// let sine = "sine";
// let tri = "triangle";
// let square = "square";

// let currentWaveform;
// currentWaveform = square;

// let waveformType = "square";
// osc.type = currentWaveform;
// osc.connect(audioContext.destination);
// // osc.start(audioContext.currentTime);
// console.log(currentWaveform);

// var audioContext = new AudioContext(); //___Initializes web audio api

// function playOsc(oscType, freq) {
//   var osc = audioContext.createOscillator();
//   osc.type = oscType;
//   osc.frequency.value = freq; //____freq is a parameter
//   osc.connect(audioContext.destination);
//   osc.start(audioContext.currentTime);
// }

// playOsc("sine", 330); //____Plays oscillator at 330hz

/*____We can play multiple oscillators at once using only
  one line of code each time! Adding another sine at 340 will
  create a pulsating effect*/

// playOsc("sine", 340);

// var audioContext = new AudioContext();
//___________________________________BEGIN Custom sound
// function customSound(filterVal) {
//   var osc_1 = audioContext.createOscillator();
//   var osc_2 = audioContext.createOscillator();
//   var filter = audioContext.createBiquadFilter();
//   filter.type = "lowpass";
//   osc_1.type = "sawtooth";
//   osc_1.frequency.value = 300;
//   osc_2.type = "sawtooth";
//   osc_2.frequency.value = 402;
//   filter.frequency.value = filterVal || filter.frequency.value;
//   osc_1.connect(filter);
//   osc_2.connect(filter);
//   filter.connect(audioContext.destination);
//   osc_1.start(audioContext.currentTime);
//   osc_2.start(audioContext.currentTime);
// }
// //___________________________________END Custom sound

// //___________________________________BEGIN square wave
// function square(filterVal) {
//   var osc = audioContext.createOscillator();
//   var filter = audioContext.createBiquadFilter();
//   filter.type = "lowpass";
//   osc.type = "square";
//   osc.frequency.value = 100;
//   filter.frequency.value = filterVal || filter.frequency.value;
//   osc.connect(filter);
//   filter.connect(audioContext.destination);
//   osc.start(audioContext.currentTime);
// }
// //___________________________________END square wave

// //___________________________________BEGIN effectsBox

// function effectsBox(sourceInput, filterParam) {
//   sourceInput(filterParam);
// }
// //___________________________________END effectsBox
// effectsBox(customSound, 100);

// function playOsc(oscType) {
//   //_______Set default of oscType to sawtooth
//   if (arguments[0] === undefined) {
//     oscType = "sawtooth";
//   }
//   return oscType;
// }
// console.log(playOsc()); //___sawtooth
// console.log(playOsc("sine")); //___sine

// const loopFromTwo = (start, end) => {
//   console.log(start);
//   if (start < end) {
//     return loopFromTwo((start += 1), end);
//   }
// };

// loopFromTwo(1, 1000);

// var song = {
//   name: "Funky Shuffle",
//   artist: "James Jackson",
//   format: "wave",
//   sampleRate: 44100,
// };
// //______________________BEGIN for in loop
// for (var prop in song) {
//   console.log(prop + ":"); //__Outputs each key
//   console.log(song[prop]); //__Outputs each value
// }
// //______________________END for in loop

// var blastSound = {
//   name: "Blast",
// };

// function descriptor(message) {
//   return this.name + ": " + message;
// }

// var describeBlastSound = descriptor.bind(blastSound);
// console.log(describeBlastSound("This is an explosive sound"));
// //Blast: This is an explosive sound

// var album = {
//   name: "Funky Shuffle",
//   artist: "James Jackson",
//   format: "wave",
//   sampleRate: 44100,
// };
// var song = {
//   name: "Analogue Heaven",
//   artist: "The Keep It Reels",

//   getNameAndArtist: function () {
//     return "Name: " + this.name + " | Artist: " + this.artist;
//   },
// };
// var getNameOfAlbum = song.getNameAndArtist.bind(album);
// console.log(getNameOfAlbum()); /*Name: Funky Shuffle | Artist:
//   James Jackson*/

// var audioContext = new AudioContext();
// //_____________BEGIN create oscillator and filter
// var filter = audioContext.createBiquadFilter();
// var oscillator = audioContext.createOscillator();
// //_____________END create oscillator and filter
// //______________BEGIN connect oscillator to filter
// oscillator.connect(filter);
// //_____________END connect oscillator to filter
// //_____________BEGIN connect filter to computer speakers
// filter.connect(audioContext.destination);
// //_____________END connect filter to computer speakers

// //_____________BEGIN start oscillator playing

// oscillator.start(audioContext.currentTime);
// //_____________END start oscillator playing

// var oscillator = audioContext.createOscillator();
// oscillator.connect(audioContext.destination);
// oscillator.start(audioContext.currentTime);
// oscillator.stop(audioContext.currentTime + 3);
// console.log(currentTime);

// oscillator.onended = function () {
//   oscillator = audioContext.createOscillator();
//   oscillator.connect(audioContext.destination);
//   oscillator.start(audioContext.currentTime + 1); /*start in
//     one second*/
//   oscillator.stop(audioContext.currentTime + 3);
// };

// var audioContext = new AudioContext();
// var oscillator = audioContext.createOscillator();
// oscillator.connect(audioContext.destination);
// oscillator.frequency.value = 130.81; //________C3
// oscillator.start(audioContext.currentTime);
// oscillator.stop(audioContext.currentTime + 2);

// oscillator.onended = function () {
//   oscillator = audioContext.createOscillator();
//   oscillator.frequency.value = 130.81; // C3 note
//   oscillator.detune.value = 100; /*sets the note to one half step
//     higher to C#3*/
//   oscillator.connect(audioContext.destination);
//   oscillator.start(audioContext.currentTime + 0.5);
//   oscillator.stop(audioContext.currentTime + 2.5);
// };
