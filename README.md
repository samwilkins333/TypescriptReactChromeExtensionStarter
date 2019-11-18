# TypescriptReactChromeExtensionStarter
Get off the ground quickly with this boilerplate code!

Here's how to get started:
1) Clone the repository
2) In the project root directory, run `npm install && npm run build` to download the necessary dependencies and then to build and consolidate the existing source code and content scripts into the build output folder
3) Open up Chrome and navigate to chrome://extensions/
4) Make sure the `Developer Mode` toggle is activated
5) Select `Load unpacked` and, in the file picker, navigate to your project root, then select the `build` folder
6) You should now see an `I` on a black square next to your browser bar. Clicking on it should reveal the CreateReactApp boilerplate UI.
7) In a new tab, navigate to any valid webpage and, in the developer console, you'll see that the HTML document has been logged. This was the work of index.js in src/content_scripts/index.js
