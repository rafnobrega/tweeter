# Tweeter Project

SpringFace is a simple, responsive single-page Twitter clone.

SpringFace is a full-stack web application built to practice my HTML, CSS, JS, jQuery and AJAX front-end skills, and my Node, and Express back-end skills.

- The page does not need to be refreshed to display new user-created tweets. 
- The new tweets will be displayed on top of the existing ones.
- New tweet validations in place: 
  - users cannot post an empty tweet.
  - users cannot post a tweet that exceeds the maximum number of characters (140).
- XSS is prevented by Escaping.

- Each time the page is opened, or a new tweet is posted, the background of the avatar area will change.
- Users can click on the bouncing yellow arrow to toggle the tweet composer field.
- Users can click on the back-to-top button that appears once page scrolling is detected.



## Final Product

!["Desktop view"](https://github.com/rafnobrega/tweeter/blob/master/docs/desktop%20app.png?raw=true)
!["Desktop view - posting a new tweet"](https://github.com/rafnobrega/tweeter/blob/master/docs/Desktop%20view%20-%20posting%20a%20new%20tweet.gif?raw=true)
!["Desktop view - Tweet exceeds 140 characters"](https://github.com/rafnobrega/tweeter/blob/master/docs/140%20characters%20exceeded%20error%20message.png?raw=true)
!["Tablet view - Tweet is empty"](https://github.com/rafnobrega/tweeter/blob/master/docs/empty%20tweet%20error%20message.png?raw=true)
!["Mobile view - Posting a new tweet"](https://github.com/rafnobrega/tweeter/blob/master/docs/mobile%20view%20-%20posting%20a%20new%20tweet.gif?raw=true)


## Getting Started

1. Fork this repository.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
