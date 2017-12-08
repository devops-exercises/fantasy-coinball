Welcome to the Fantasy Coinball project!

There are two parts to this: a react project (in fantasy-coinball-react\) and a C# API (in FantasyCoinball.sln).

There are two steps to get it up and running:
1. Launch the API. You need to load FantasyCoinball.sln in Visual Studio and run the API project.
Don't worry about the error when it launches, there's no default route, but the API is going.
2. Start the react project - run 'npm start' from the fantasy-coinball-react\ folder.
3. We haven't sorted out how to let the javascript call the API yet - so you'll need a Chrome addon like Meosif CORS running.

We've come up with some tasks:
- Get some persistence going so we can store people's profiles and scores.
- Build a turn interface, so people can take a turn and see how their coin value grows.
- Build a scoring system on the backend that has some complex rules about how various team members interact and add value.
- Fix CORS or whatever we need so you don't need a Chrome add-on.
- Improve our styling so it looks nicer.
- Add a leaderboard to people can see top scorers.