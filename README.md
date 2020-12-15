# React Weather
A reactJS based weather application which displays weather data from the openweathermap api based on user location input.

This was made with createReactApp, documentation for that can be found in the CreateReactAppDoc file and it is highly recommended looking at it before using this weather 
application.

# To use:
Firstly, you must access your own api key from openweathermaps at https://openweathermap.org/api. I used the "Current Weather Data" api. With the api key they provide, replace the
"YOURAPIKEYHERE" text in Weather.js and you should be good to go!

After loading the code into your text editor/IDE and bringing up a browser to run the code, enter a location into the white text input box. Locations include: a 
city(e.g: San Francisco), state/province(e.g: California), country(e.g: United States), continent(e.g: North America), or Earth/Globe. After pressing the submit button, a block
appears under the input box which gives the name of the location, the current weather description, an image of the weather description, the current temperature, and the expected
high and low temperatures of the day. Clicking the submit button again will get rid of the block, and clicking it again will re-display it. If you wish to display another weather,
you can type the location at any time but if a previous weather block is displayed you'll have to click the submit button to undisplay it and then submit the new location to 
display the new location's weather. There is another feature as well which is the minimize/maximize button (abbreviated as minMax in the code) next to the location name in the 
weather block. As you can see by using the application, the weather blocks display the entire weather upon your first submit. However if you wish, you may minimize this to just
the location name and minMax button. I added this because I want to later add a feature of being able to add multiple blocks of weather for different locations and having them 
stacked in a minimized fashion would save space. It also is just a cool feature and I wanted to include it somewhere!

# Notes:
•If there is an error loading your location's weather, an error message will appear where the weather block would. Refer to the message when it pops up or in the code(it's in
Weather.js) for more insight on what the message says.

•Temperatures are displayed in both fahrenheit and celsius as should be labeled. They are separated by the | character.

•Some weather descriptions may lack images, I just have those that I have come across. If you happen to find a weather description which lacks an image, please file an issue and
I will be glad to look at it!

•The submit button is actually a special class for an a tag from the sbuttons repository here on Github! It was the first opensource project I had ever contributed to and I highly
recommend reading into their documentation before using this application in case you want to include what they have in your use of this project or in any other project you may have!

•I used sbuttons pink button here but changed the hex value a bit in sbuttons.min.css to better match a different shade which I was looking for, so this is why you might see a
difference between mine and sbutton's on their website or if you try to load your own pink-btn.

•Please feel free to file any other issues you may come across while using this project. This was my first experience with either react or apis so there are sure to be errors or
mistakes and things I could do better. I'm also rather new to creating projects and pushing them to github, so any feedback on anything is much appreciated!
