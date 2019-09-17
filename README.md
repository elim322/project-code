# Project C.O.D.E

## About the C.O.D.E initiative

- Serving differently-abled students of ages 8-18
- Complementing to traditional learning environment
- Equipping students with highly sought-after skills

## Project Goal

**To responsive web app for parents and volunteers to arrange learning sessions.**

## Technologies used

- React for a highly-customizable frontend
  - Fullcalendar.js is a powerful calendar UI component that allows us to display and interact with events using a calendar on our dashboard
- GraphQL & Apollo for querying the backend
- Graphcool for the backend databases

## What we achieved

- UI designs for both desktop and mobile web apps
- A backend schema in Graphcool (uses GraphQL data structures)
- The basic React app with user flows for Volunteers and Parents/Learners
- Calendar component integration

## What's coming next?

- Full backend integration
- Several updates to the UI, including a responsive calendar view
- Authentication using Facebook or Google sign-in
- Deploying it to a webserver

## GraphQL Database Schema

```
type File @model {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type User @model {
  createdAt: DateTime!
  id: ID! @isUnique
  type: String!
  parent: Parent @relation(name: "ParentRole")
  learner: Learner @relation(name: "LearnerRole")
  volunteer: Volunteer @relation(name: "VolunteerRole")
  updatedAt: DateTime!
  email: String!
  password: String!
}

type Parent @model {
  id: ID! @isUnique
  learner: [Learner!]! @relation(name: "Children")
  user: User @relation(name: "ParentRole")
  name: String!
  phone: Int!
  prefContact: String!
}

type Learner @model {
  id: ID! @isUnique
  parent: Parent @relation(name: "Children")
  user: User @relation(name: "LearnerRole")
  booking: [Bookings!]! @relation(name: "LearnerBooking")
  name: String!
  age: Int!
  city: City! @relation(name: "LearnerLocation")
  accessibilityNeeds: String!
}

type Volunteer @model {
  id: ID! @isUnique
  user: User @relation(name: "VolunteerRole")
  event: [Events!]! @relation(name: "VolunteerBooking")
  name: String!
  city: City! @relation(name: "Location")
  phone: Int!
  skills: String!
}

type Events @model {
  id: ID! @isUnique
  startTime: String!
  endTime: String!
  booking: Bookings @relation(name: "Bookings")
  volunteer: Volunteer @relation(name: "VolunteerBooking")
  createdAt: DateTime!
  city: City! @relation(name: "EventLocation")
}

type Bookings @model {
  id: ID! @isUnique
  event: Events @relation(name: "Bookings")
  learner: Learner @relation(name: "LearnerBooking")
}

type City @model {
  id: ID! @isUnique
  name: String! @isUnique
  colour: String! @isUnique
  volunteers: [Volunteer!]! @relation(name: "Location")
  events: [Events!]! @relation(name: "EventLocation")
  learners: [Learner!]! @relation(name: "LearnerLocation")
}
```

## GraphQL + Graph cool API link

1. Add config.json in the root of the project folder.
2. Inside config.json add `{ "GRAPHQLAPI": "INSERT GRAPHQL API LINK HERE" }`
3. Save file.

## Project Contributors

- Timothy Chan
- Einer Lim
- Anita Sun
- Gilbert Fung
- Aditya Chinchure
