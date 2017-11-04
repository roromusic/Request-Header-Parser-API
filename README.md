# FreeCodeCamp - Timestamp Microservice

The first API project for the Back End Development Certification on [FreeCodeCamp](https://freecodecamp.com). It uses Nodejs and Expressjs to return, as a JSON object, the Unix timestamp and the natural representation of a date string passed to it.

## Demo
[Click here](https://timestamp-api-.glitch.me/) to see the demo hosted on Glitch.

## Project Description

Objective: Build a full stack JavaScript app that is functionally similar to [this](https://timestamp-ms.herokuapp.com/) and deploy it to Glitch.

User stories:

1. I can pass a string as a parameter, and it will check to see whether that string contains
either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage:

[https://timestamp-api-.glitch.me/December%2015,%202015](https://timestamp-api-.glitch.me//December%2015,%202015)

[https://timestamp-api-.glitch.me//1450137600](https://timestamp-api-.glitch.me//1450137600)

### Example output:

	{ "unix": 1450137600, "natural": "December 15, 2015" }
