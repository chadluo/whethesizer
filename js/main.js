const synth = new Tone.PolySynth(3, Tone.MonoSynth).toMaster();

const c4 = 440;
const major = [1, Math.pow(2, 1 / 3), Math.pow(2, 7 / 12)];
const minor = [1, Math.pow(2, 1 / 4), Math.pow(2, 7 / 12)];

const url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Sydney&mode=json&units=metric&cnt=1&appid=c989bce9f69b008a0b1e46d4c0acaa80";

$.getJSON(url, function (result) {

    const forecast = result.list[0];
    const temperature = forecast.temp.day;
    const weather = forecast.weather[0].main;
    const root = Math.pow(2, (temperature - 23) / 7) * c4;
    const chord = (weather === 'Clear' ? major : minor).map((i) => i * root);

    $('#play').on('click', () => synth.triggerAttackRelease(chord, "1n"));
});
