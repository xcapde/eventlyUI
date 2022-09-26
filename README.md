
# Evently App 📅📌
React App developed as Final Project for Factoria F5 FullStack Web Development Bootcamp. 

This application is the result of merging the different projects our team members had in mind. Before starting with the development we gathered to brainstorm and came along with three potential projects. The first one was an application to share hobbies with other users, the second one was an application to help either students and mentors getting in touch, and finally, the last one had the aim to provide a solution for social entities or councils to organize their social activities.

Evently was designed to achieve all the features we spoke about in those three projects. It allows the user organize events and share them with other users becoming a small social network to share hobbies, knowledge and create bonds.

## Tech Stack
+ HTML 5
+ CSS 3
+ ES6
+ REACT
+ Axios
+ npm
+ Styled-Components
+ React Select

### Rest API
+ [Evently API](https://github.com/afonttorres/eventlyAPI)

### Version control
+ GIT
+ Git Hub

### Development tools
+ Visual Studio Code
+ Postman

## Objectives
The objectives of this project were described by the group teammates and all the functional requirements were divided in sprints which were developed by importance using Agile Methodologies as Kanban and Scrum.

Being the Event the main entity of the application our first objective was to display a list of all Events, allow logged users to create new ones, update or delete them. Every Event should contain a title, description, location, date and its publisher. Moving on with our requirements, the next one was to be able to add a location to them. Depending on Event type (offline or online) users should be able to add an Adress in offline events and a URL in online events.
Continuing with the application features, we thought about adding details such as Tags, Requirements and Images to Events. Each of these details should be able to be seen by everyone and created and deleted by the Event Publisher.

Once we got satisfied with the Events we moved to the next feature, to allow users to join or unjoin events by becoming  participants and show the user if they are participating or not. Logged users should be able to see if they joined an Event and not logged users should appear as non-participants.

To help users find their target Events, we added a seacher so users could look for Events by its Tags, location, title, description, date or type. 

Since one of the aims of our project was to ease user's social life we decided to add a week calendar in users' profile so users can see those Events they joined planned for the week.

Lastly we thought it would be a shame for users to miss if Events had been modified or deleted so we thought about notifing Event participants of those changes by sending an email on each modification and display a Notification in our application. This notification could be seen in user's profile on Desktop version and in notifications in Mobile version. Each of this Notifications should be able to be deleted or to be modified by checking or unchecking them.

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
+ Create a participation (between authenticated User and Event)
+ Delete a participation
+ Display if User is participating

### Details CRD
+ Create, delete and display Tags
+ Create, delete and display Requirements
+ Create, delete and display Images

### Notifications CRUD
+ Create a Notification (when the Event is deleted or modified)
+ Display all Notifications
+ Delete a modification
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
#### Desktop
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()

#### Mobile
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()
![App Screenshot]()

## Next
Since we've just got started we are planning to add a lot of new features to our application . 

First of all we'd like to add a map to spot Event location on its detail page so User does not need to look for it himself. Following with this feature we'd like to fetch address data from a location API and use it in our location form to ensure the adress is real. It could be also cool to add realtime weather in Event detail page keeping in mind the idea of easing user's experience when using the app.

On the user side we thougth about updating users data by allowing them to upload avatars, banners and modify their information in their profile.

One of the features we've been thinking about since the first day is to let users upload their Social Proof of the Events they participated in so they can rate the Events and other users can take this information into account to decide wether to join an Event or not. It is also important for Event publisher to have a feedback about its Event and how it went.

Following with the user side we'd like to add volunteering so those who want to actively participate in Event organization can do so.

Finally, we'd like to add a reminder when user has an incoming event.

We'd like to add many more features, some of them are: groupal chats so participants can chat about the Events, giving the user the ability to save an Event without joining it,  print the details and following user accounts. 

We expect many more features will come on the go.

## Authors
+ [Xavier Capdevila](https://github.com/xcapde)
+ [Laura Parra](https://github.com/lauraparra00)
+ [Joel Blasi](https://github.com/JoelBlasi)
+ [Robert Camara](https://github.com/rocailos)
+ [Agnès Font](https://github.com/afonttorres)


## Design
The design of the application was inspired by [Azizul Haque](https://dribbble.com/shots/17979187-Events-App/attachments/13161575?mode=media).

## Installation
This project was bootstrapped with Create React App therefore requires node.js and npm.  Once you've verified node is installed in your directory take the following steps:

#### 1. Clone the repository
```bash
 https://github.com/xcapde/eventlyUI.git
```


#### 2. Run the app in development mode
```bash
 npm start
 ``` 