To Setup
=======================
```
git clone git@github.com:jefffriesen/webpack-react-quickstart.git mynewapp

// Change remote git url to what you will be using: [set-url doc](https://help.github.com/articles/changing-a-remote-s-url/)
git remote set-url origin git@github.com:USERNAME/YOURREPO.git

// Confirm new remote url
git remote -v

npm install
```


To Run
=======================
```
// Development: including hot reloading
npm start

// Production: generate assets to `/build` for deployment
npm build
```

Features
=======================
* Webpack build and serve with hot reloading

* React & ES6

* React Router with HTML5 history API (Router.HistoryLocation) for clean URLs

* CSS & Less loaders

* Bootstrap css & fonts


TODO
=======================
(or fork and create other versions)

* Add basic Express API endpoint

* Reorganize login (doesn't really make sense now). Maybe hook it up to fake auth with Express

* RxJS-style Flux architecture


Inspired from:
=======================
http://jmfurlott.com/tutorial-setting-up-a-single-page-react-web-app-with-react-router-and-webpack/
