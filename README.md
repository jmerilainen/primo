<div align="center">
    <br/>
    <h1>Primo 🌤</h1>
    <i>The start</i>
    <br/>
</div>

<br/>
<br/>

Primo is a one-view starting page for the browsers. It shows the weather for the next 12 hours.
With a few themes available you can match the colors by your preferences.

Primo is heavily inspired by an actual Chrome extension that I used many years ago.
Unfortunately, I can't remember the exact name nor find it from Chrome Store to give
full credits.

<br/>
<br/>

<div align="center">
    <img src="./docs/primo.jpg" alt="Example view of the app" />
</div>

<br/>
<br/>

## Usage

Primo uses the browser's geolocation to get your current position to fetch weather forecasts
for the location. If you don't allow location Primo will only show the current time.

From the top right, you can switch themes. Selection will be saved to local storage.

## About

This project is built for fun and learning purposes. The main idea was to try React and
different libraries.

 * Built with React by using [Create React App](https://github.com/facebook/create-react-app)
 * Refactored to TypeScript
 * Animations with [Framer Motion](https://github.com/framer/motion)
 * Data fetching with [SWR](https://github.com/vercel/swr)
 * Weather data from [met.no API](https://www.met.no/en)
 * Styles with [Tailwind](https://github.com/tailwindlabs/tailwindcss)
 * Custom hooks with [use-react](https://github.com/streamich/react-use)
 * Hosted in [Vercel](https://vercel.com)

Some of the libraries wouldn't be necessary to use with this small project but
was used to trying things out.

Originally built in 2020 and refactored in 2022.

## Development

See [`README.CRA.md`](./README.CRA.md).
