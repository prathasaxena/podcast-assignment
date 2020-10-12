# podcast-assignment

Install the diawi apk from this link : https://i.diawi.com/saQP37

<div style="flex-direction:row">
<img src="screenshots/Home.jpeg" width="200">
<img src="screenshots/episodeList.png" width="200">
<img src="screenshots/player.jpeg" width="200">
<img src="screenshots/notification.jpeg" width="200">
</div>

## Features
• Parse one feed of your choosing and display episodes in a list.

• User can tap episode and navigate to a "play" interface.

• Play interface will show artwork, progress timeline, forward and reverse 30 seconds and a play / pause button.

• User should also have the ability to view episode notes.

• User can go back to the episode list from the play interface.
## Additional feature

• User can listen to the podcast even if the app is in background state.

• User can control currently playing podcast through notification bar. 

• User can follow channels/albums. 

## File Structure
components distribution
<div style="flex-direction:column">

<img src="screenshots/componentDirectory.jpg">
</div>

## Main third party library used


• "react-native-track-player",


• "react-native-vector-icons", 


• "react-redux",


• "react-navigation" 

## Data structure
   
  7 audio files has been uploaded to firebase cloud which has been used repeatedly in the app.
  
  The data object has been defined inside data folder which is placed under src folder.
  The blueprint of data object is as follows:
  
        {
         "image": "String",
         "channelName": "String",
         "following":boolean,
         "titleDesc":"String",
         "listOfEpisodes":[
            {
                 "name": "String",
                 "episode": number,
                 "duration":number,
                "description":"String",
                "audio":"String"
            },
           ]
          }
