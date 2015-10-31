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
> I am going with jade. Check out my [index file](../blob/master/views/index.jade) in the ``views`` folder.

Now run the following in the terminal(paths of files are specific to your folder structure)
```bash
webpack ./src/entry.js ./src/bundle.js
```
> You can think of the first option as the source and the second as the output. The above command is literally just taking
> my ``entry.js`` located in my ``src`` folder and produces the output in the same folder as ``bundle.js``.

Refresh the page and... **it still works**!
