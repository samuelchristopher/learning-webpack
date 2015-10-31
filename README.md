# learning-webpack

Hey, I made this repository just to document my experience learning [webpack](http://webpack.github.io), obviously! Haha!
Feel free to use this as a reference when your learning webpack. Enjoy!

## Install webpack

```bash
npm i webpack -g
```
> Keep in mind that you need to have [node js](http://nodejs.org) installed

## Setup the compilation

Create ``entry.js`` file. This the file that it to the bundled up and included at a later stage.

> A quick note: For those using express(like me) you may need to include
> ```javascript
> app.use('/src', express.static(__dirname + '/src'));
> ```

Next, we do something different. Instead of including the ``entry.js`` file directly, we are going to get webpack
to bundle the file(s) that we have and concatinate them into one _massive_ file: ``bundle.js``. You do not have to
name is ``bundle.js``, just saying for those who were curious.

Create a index.html file and include the ``bundle.js`` file.

```html
<script src="src/bundle.js" />
```

> Those using node or express, you can either create a ``index.ejs`` file or a ``index.jade`` file.
> I am going with jade. Check out my [index file](../master/views/index.jade) in the ``views`` folder.

Now run the following in the terminal(paths of files are specific to your folder structure)
```bash
webpack ./src/entry.js ./src/bundle.js
```
> You can think of the first option as the source and the second as the output. The above command is literally just taking
> my ``entry.js`` located in my ``src`` folder and produces the output in the same folder as ``bundle.js``.

Refresh the page and... **it still works**!

## Second file

Now we will take things up a notch and require another module(javascript file) from the ``entry.js`` file
and get webpack to concatinate these files.

### Create a ``module.js`` file

In the ``module.js`` file
```javascript
module.exports = "I am a module! :)";
```

After that we need to add the following lines to the ``entry.js`` file
```javascript
var module = require('./module');
console.log(module);
```

Then we recompile the code by entering the same command as before
```bash
webpack ./src/entry.js ./src/bundle.js
```

####### We refresh and it still works!

## The first loader

In the real world we need to also include style sheets. On the contrary, webpack natively supports javascript files
only. To solve this problems we need to add two loaders to process the css files. We need the ``css-loader`` to process
css files and we need the ``style-loader`` to apply the styles in the css files.

To install the loaders run the following command in the terminal
```bash
npm i css-loader style-loader --save
```

> A quick note: You do not have to include the global ``-g`` flag or the ``--save`` flag. The reason for the latter is that
> if you do not have a package.json file you would not need to do this.

### Create a ``main.css`` file

Add the following in that file
```css
body {
  font-family: sans-serif;
  color: white;
  font-weight: bold;
  background-color: coral;
}
```

And we update the ``entry.js`` file
```javascript
require("style!css!./main.css");
```

The first ``style!`` actually calls the ``style loader`` where the ``css!`` calls the ``css-loader`` to process the css file specified.
i.e ``./main.css``

Recompile the code and refresh your browser. You should see that the ``background-color`` is ``coral`` and all of the other
styles that we applied come through.

## Binding loaders

Honestly, I do not want to be writing such a long require statement each time I include a css file. I believe that you
feel the same way too. We can solve this problem by binding the loaders with our recompile command.

First, change your ``entry.js`` file
```javascript
require('./main.css');
```
And remove the the statement we added previously. Then, run this command
```bash
webpack ./src/entry.js ./src/bundle.js --module-bind 'css=style!css'
```
You should see the same result.
