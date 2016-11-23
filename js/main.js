var synth = new Tone.Synth().toMaster();

$('#play').on('click', function () {
    $.getJSON(
        "http://api.openweathermap.org/data/2.5/forecast/daily?q=Sydney&mode=json&units=metric&cnt=1&appid=c989bce9f69b008a0b1e46d4c0acaa80",
        function (result) {
            $('#board').append(result.list[0].humidity);
            synth.triggerAttackRelease((result.list[0].weather[0].main === "Rain" ? "C4" : "C3"), "1n");
        });
});
