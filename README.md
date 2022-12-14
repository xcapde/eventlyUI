
# Evently App 📅📌
React App developed as Final Project for Factoria F5 FullStack Web Development Bootcamp. 

This application is the result of merging the different projects our team members had in mind. Before starting with the development we gathered to brainstorm and came along with three potential projects. The first one was an application to share hobbies with other Users, the second one was an application to help either students and mentors getting in touch, and finally, the last one had the aim to provide a solution for social entities or councils to organize their social activities.

Evently was designed to achieve all the features we spoke about in those three projects. It allows the User organize Events and share them with other Users becoming a small social network to share hobbies, knowledge and create bonds.

## Tech Stack
+ HTML 5
+ CSS 3
+ JavaScript ES6
+ REACT
+ Axios
+ npm
+ Styled-Components
+ React Select

### Rest API
+ [Evently API](https://github.com/afonttorres/EventlyAPI)

### Version control
+ GIT
+ Git Hub

### Development tools
+ Visual Studio Code
+ Postman

## Objectives
The objectives of this project were described by the group teammates and all the functional requirements were divided in sprints which were developed by importance using Agile Methodologies as Kanban and Scrum.

Being the Event the main entity of the application our first objective was to display a list of all Events, allow logged Users to create new ones, update or delete them. Every Event should contain a title, description, location, date and its publisher. Moving on with our requirements, the next one was to be able to add a location to them. Depending on Event type (offline or online) Users should be able to add an Adress in offline Events and a URL in online Events.
Continuing with the application features, we thought about adding details such as Tags, Requirements and Images to Events. Each of these details should be able to be seen by everyone and created and deleted by the Event Publisher.

Once we got satisfied with the Events we moved to the next feature, to allow Users to join or unjoin Events by becoming  participants and show the User if they are participating or not. Logged Users should be able to see if they joined an Event and not logged Users should appear as non-participants.

To help Users find their target Events, we added a seacher so Users could look for Events by its Tags, location, title, description, date or type. 

Since one of the aims of our project was to ease User's social life we decided to add a week calendar in Users' profile so Users can see those Events they joined planned for the week.

Lastly we thought it would be a shame for Users to miss if Events had been modified or deleted so we thought about notifing Event participants of those changes by sending an email on each modification and display a Notification in our application. This Notification could be seen in User's profile on Desktop version and in Notifications in Mobile version. Each of this Notifications should be able to be deleted or to be modified by checking or unchecking them.

Given the deadline of the project (four weeks time) this project turns out to be unfinished but we are looking forward to add new features and end those which are not finished yet.

## Features
### Event CRUD
+ Display all Events
+ Display the detail of a single Event
+ Create an Event
+ Update an Event
+ Delete an Event
+ Search Events by location, description, title, date or Tag
+ Display Users' joined Events
+ Display Users' published Events

### Join CRUD
+ Create a Participation (between authenticated User and Event)
+ Delete a Participation
+ Display if User is participating

### Details CRD
+ Create, delete and display Tags
+ Create, delete and display Requirements
+ Create, delete and display Images

### Notification CRUD
+ Create a Notification (when the Event is deleted or modified)
+ Display all Notifications
+ Delete a Notification
+ Update a Notification (checking or uncheking it)

### User CR
+ Create a User (sign up)
+ Display Users
+ Authenticate User (log in)


### Design
+ Responsive Web Design
+ Modularity and Scalability (by using React components)
+ UX (Calendar, Slider, Multistep form, Notifications...)

## Preview
#### Mobile
![Landing](https://user-images.githubusercontent.com/9727006/192732469-9bcd1db6-9f67-4de6-aa35-dd017ceed053.png)
![Login](https://user-images.githubusercontent.com/9727006/192732487-98a295d5-cb82-4369-b7d4-d31222ab4694.png)
![Home](https://user-images.githubusercontent.com/9727006/192732507-0bd98dff-b8b8-4bbc-a921-e08466927d7b.png)
![Detail](https://user-images.githubusercontent.com/9727006/192732538-99731396-c765-4c07-95c5-0e131f678b52.png)
![Upload](https://user-images.githubusercontent.com/9727006/192732582-57c2742b-7ab4-4a37-8d96-8cdc79562c0e.png)
![Notifications](https://user-images.githubusercontent.com/9727006/192732555-151ad5a9-2052-439a-93d4-8875384bd9fb.png)
![Search](https://user-images.githubusercontent.com/9727006/192732576-fa65fbc4-d8ca-4dac-9df1-147fb08c0bf6.png)

#### Desktop
![App Screenshot](https://res.cloudinary.com/dkju5on5v/image/upload/v1664353593/localhost_3000__bav8eh.png)
![App Screenshot](https://res.cloudinary.com/dkju5on5v/image/upload/v1664353305/localhost_3000_profile_2_vvs19f.png)
![App Screenshot](https://res.cloudinary.com/dkju5on5v/image/upload/v1664353305/localhost_3000_profile_1_kpif15.png)
![App Screenshot](https://res.cloudinary.com/dkju5on5v/image/upload/v1664353305/localhost_3000_profile_h94bph.png)
![App Screenshot](https://res.cloudinary.com/dkju5on5v/image/upload/v1664353304/localhost_3000_profile_3_vlztrr.png)

## Next
Since we've just got started we are planning to add a lot of new features to our application . 

In order to avoid User looking for the addres we'd like to add a map to spot Event location on its detail page. Following with this feature we'd like to fetch address data from a location API and use it in our location form to ensure the adress is real. It could be also cool to add realtime weather in Event detail page keeping in mind the idea of easing User's experience when using the app.

On the User side we thougth about updating Users data by allowing them to upload avatars, banners and modify their information in their profile.

One of the features we've been thinking about since the first day is to let Users upload their Social Proof of the Events they participated in so they can rate the Events and other Users can take this information into account to decide wether to join an Event or not. It is also important for Event publisher to have a feedback about its Event and how it went.

Following with the User side we'd like to add volunteering so those who want to actively participate in Event organization can do so.

Finally, we'd like to add a reminder when User has an incoming Event.

We'd like to add many more features, some of them are: groupal chats so participants can chat about the Events, giving the User the ability to save an Event without joining it,  print the details and following User accounts. 

We expect many more features will come on the go.

## Authors
+ [Xavier Capdevila](https://github.com/xcapde)
+ [Laura Parra](https://github.com/lauraparra00)
+ [Joel Blasi](https://github.com/JoelBlasi)
+ [Robert Camara](https://github.com/rocailos)
+ [Agnès Font](https://github.com/afonttorres)


## Design
The design of the application was inspired by [Azizul Haque](https://dribbble.com/shots/17979187-Events-App/attachments/13161575?mode=media).

## Color reference
![palette](https://user-images.githubusercontent.com/9727006/192609275-3f40f38b-cc98-49fb-9949-4464a4e9ec8d.png)

## Installation
This project was bootstrapped with Create React App therefore requires node.js and npm.  Once you've verified node is installed in your directory take the following steps:

#### 1. Clone the repository
```bash
 https://github.com/xcapde/EventlyUI.git
```


#### 2. Run the app in development mode
```bash
 npm start
 ``` 
