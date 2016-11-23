var synth = new Tone.PolySynth(3, Tone.MonoSynth).toMaster();

$('#play').on('click', function () {
    $.getJSON(
        "http://api.openweathermap.org/data/2.5/forecast/daily?q=Sydney&mode=json&units=metric&cnt=1&appid=c989bce9f69b008a0b1e46d4c0acaa80",
        function (result) {
            const humidity = result.list[0].humidity;
            synth.triggerAttackRelease(humidity > 75 ? ["C3", "Eb3", "G3"] : ["C4", "E4", "G4"], "1n");
        });
});
