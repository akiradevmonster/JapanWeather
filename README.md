# JapanWeather

A small website for Japan weather via OpenWeather's API

Build with [Vue] and [Vuetify].
Clone the repo and `npm install; npm run serve` to try it on your own machine. Instead, a docker container backed up with a systemctl service is running at [this address] (it is a temporary one though, I'll update this readme if it comes to change).

The UI is pretty simple, and should be understandable and usable by most people.
One can select a city by three different means: via the map, the research field and the list.
The city page features the weather at the moment, of today (if it's before 21h00) and of the next five days.

I wanted to add a bit more fluff to the pages, like some graphs for the temperatures or precipitations and a more stylish svg map, but I didn't want to push too much the "time limit" of 8h.

[Vue]: <https://vuejs.org/>
[Vuetify]: <https://vuetifyjs.com/en/>
[this address]: <http://35.200.35.76/>
