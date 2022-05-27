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

!["Screenshot of URLs page"](https://github.com/rafnobrega/tinyapp/blob/main/docs/urls-page.png?raw=true)
!["Screenshot of register page"](https://github.com/rafnobrega/tinyapp/blob/main/docs/register-page.png?raw=true)
!["Screenshot of Edit URL page"](https://github.com/rafnobrega/tinyapp/blob/main/docs/edit-url-page.png?raw=true)


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
