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


## Quick install with Docker

Run

```sh
$ npm run docker:serve

# equals: docker-compose -f docker-compose.local.yml up
```

Open [http://localhost:5000](http://localhost:5000)

## Development

`yarn install` to install dependecies

`yarn start` to run dev server

## Testing

Lint and format

`yarn lint` runs eslint

`yarn format` runs prettier

`yarn test` runs unit tests

`yarn test:e2e` runs cypress tests

## Deployment

The `main` branch will be automatically deployed to production hosted in Vercel.
