# React Weather
A reactJS based weather application which displays weather data from the openweathermap api based on user location input.

This was made with createReactApp, documentation for that can be found in the CreateReactAppDoc file and it is highly recommended looking at it before using this weather application.

# To use:
Firstly, you must access your own api key from openweathermaps at https://openweathermap.org/api. I used the "Current Weather Data" api. With the api key they provide, replace the "YOURAPIKEYHERE" text in Weather.js and you should be good to go!

After loading the code into your text editor/IDE and bringing up a browser to run the code, enter a location into the white text input box. Locations include: a city(e.g: San Francisco), state/province(e.g: California), country(e.g: United States), continent(e.g: North America), or Earth/Globe. After submitting the location, a block appears under the input box which gives the name of the location, the current weather description, an image of the weather description(currently not working for some reason), the current temperature, the expected high and low temperatures of the day, and the "feels like" temperature. There is also a "see more" at the bottom of the block and clicking it displays another block which shows things such as wind speed, wind direction, and humidity. If you want to display another weather, you can type the location and hit enter or the submit button, and that next block will appear under the last. You can have up to 5 of these at the moment. There is no way at the moment to get rid of blocks other than refreshing the page but that is a feature I will be working to add! There is another feature as well which is the minimize/maximize button (abbreviated as minMax in the code) next to the location name in the weather block. As you can see by using the application, the weather blocks display the entire weather upon your first submit. However if you want, you can minimize this to just the location name and minMax button.

# Notes:
•If there is an error loading your location's weather, an error message will appear where the weather block would. Refer to the message when it pops up or in the code(it's in Weather.js) for more insight on what the message says.

•Temperatures are displayed in both fahrenheit and celsius and wind speeds are in meters/sec and miles/hour as should be labeled.

•If you have the see more block displayed and you minimize the original block, the see more block will disappear and reappear when you maximize.

•When I say "submit the location" that can be done by either hitting the enter key or clicking the submit button.

•Some weather descriptions may lack images, I just have those that I have come across. If you happen to find a weather description which lacks an image, please file an issue and I will be glad to look at it!

•The submit button is actually a special class for an a tag from the sbuttons repository here on Github! It was the first opensource project I had ever contributed to and I highly recommend reading into their documentation before using this application in case you want to include what they have in your use of this project or in any other project you may have!

•I used sbuttons' pink button here but changed the hex value a bit in sbuttons.min.css to better match a different shade which I was looking for, so this is why you might see a difference between mine and sbuttons' on their website or if you try to load your own pink-btn.

•Please feel free to call out any other issues you may come across while using this project. This was my first experience with either react or apis so there are sure to be errors or mistakes and things I could do better. I'm also rather new to creating projects and pushing them to Github, so any feedback on anything is much appreciated!
