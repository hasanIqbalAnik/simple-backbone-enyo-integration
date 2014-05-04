## About
Sample project for integrating Backbone Model and Collection with Enyo Views. Lucid resources on these are scanty.

## Description
Tried to keep it as simple as hell. It contains just four things. A product model, product collection, product view and collection view.

Initially, a product table is created in the websql database, if it isn't already present. If product table isn't empty, then components are created with those data.
Newer entries are saved into the database as well as shown in the webpage. When the page is reloaded, it destroys previous components and re-renders it from the database.

## Running
Just point to index.html
