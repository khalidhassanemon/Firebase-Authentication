/*
1.Go to firebase.google.com
2.create a new firebase project.
3.Visit doc (go to docs):Build>Authentication>Web>Getting started
4.Register web app>firebase project home>click Web>Give name and register
5.install firebase for our project
6.Dangerous:get firebase config and put it in firebase.init.js
7.export app from firebase.init.js
8.create auth using getauth from firebase by using app from firebase.init.js
9.create a google auth provider do not forget to use new GoogleAuthProvider();
10.Go to firebase>Build>Authentication>Sign In Method
11.Enable Google Sign In Method
12.Create a button for google sign in method & add a click handler
13.inside event handler,call signInWithPopup with auth,provider.
14.after singInWithPopup.Then result,error
*/