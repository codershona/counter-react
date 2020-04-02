#### Project : Counter App (React/Redux)


### Builded By Falguni Islam (Self-taught Software Developer)


* NOTES :

```
   * Redux :Setting up Reducer and Store :
      - Installing Redux : npm install --save redux ;
      - Creating file name : redux-basics.js ;
      - run this : node redux-basics.js  ;
      - Run again: node redux-basics.js (Result: { counter: 0 }) ;
      
      * Connecting Store to React : 
        - npm install --save react-redux ;
      
  * TYPES of STATE ------- EXAMPLE ------------ USE REDUX?
  1) Local UI State ---- Show/Hide BackDrop --- Mostly handled within components.

  2) Persistent State ---- All users, all posts,... --- Stored on Server, releveant slice managed by Redux .

  3) Client State ---- Is Authenticated? Filters set by User, ... --- Managed via Redux .


    * REDUX ADVANCED :
      - Adding Middleware;
      - Install redux devtools for working on firefox/chrome browser ;
      - Handling Asynchoronous Code : npm install --save redux-thunk ;
      - Where to put the Logic ?
       Ans : 

       1) Action Creators : [ Can run Async Code , Should not prepare the State Update too Much ]
       2) Reducer: [ Pure, Sync Code only! , Core Redux Concept: Reducers update the State ]
       


```


