# js-spa-example

**Example Single Page Application (SPA) Using Only JavaScript**  
This project demonstrates the implementation of a single-page application (also known as a "SPA") using pure JavaScript for all front-end functions.

---

## Installation & Execution

**Step 1:** Clone the Repository

> `git clone git@github.com:FredLackey/js-spa-example.git`

**Step 2:** Install Dependencies

> `cd js-spa-example.git`  
> `npm install`

**Step 3:** Compile

The modern JavaScript, within the demo application, must be compiled into a browser-friendly (aka "older") version. We use WebPack to do this. You may run WebPack once, to simply compile it, or you may add the "watch" suffix to keep it running in the background watching for changes to the code:

> `npm run webpack`

... or ...

> `npm run webpack:watch`

**Step4:** Run the Applciation

Now that the JavaScrip is ready for the browser, we launch the development server. Similar to the "Compile" step, above, you may either launch it once, to simply view the app, or you may keep it running throughout development by adding the "watch" suffix to the command:

> `npm run dev`

... or ...

> `npm run dev:watch`

**Note:**  
If you will be developing the app, and using the "watch" suffix for the commands above, you must execute each command in a separate terminal instance.

**Step 4:** Launch Browser

Once the project is running, launch the browser and navigate to the following URL:

[http://localhost:8080](http://localhost:8080)

---

## Versions

**v0.0.1 :** Initial setup
**v0.0.2 :** Clean up structure, move back end to es6/7, prep api
