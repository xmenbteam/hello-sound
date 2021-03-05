"use strict";
var audioContext = new AudioContext();
$(function () {
  let $onOff = $("#on-off");
  let $messageText = $("span");
  let $waveformTypes = $("li");
  let $freqSliderVal = $("freq-slide").eq(1).val();

  let selectedWaveform = "sawtooth";

  let osc = false;

  $("li").on("click", function () {
    selectedWaveform = this.id;
    $("li").removeClass("selected-waveform");
    $(this).addClass("selected-waveform");
  });

  setInterval(() => {
    if (!osc) {
      console.log("Oscillator is stopped m8");
    } else {
      $freqSliderVal = $("#freq-slide").val();
      osc.frequency.value = $freqSliderVal;
      osc.type = selectedWaveform;
      console.log(
        `Oscillator is playing. Frequency value is ${$freqSliderVal}`
      );
    }
  }, 50);

  $onOff.on("click", function () {
    if (!osc) {
      osc = audioContext.createOscillator();
      osc.type = selectedWaveform;
      $freqSliderVal = osc.frequency.value;
      osc.connect(audioContext.destination);
      osc.start(audioContext.currentTime);
      $onOff.val("stop");
      $messageText.text("Click to Stop Oscillator ");
    } else {
      osc.stop(audioContext.currentTime);
      osc = false;
      $onOff.val("start");
      $messageText.text("Click to Start Oscillator ");
    }
  });
});
