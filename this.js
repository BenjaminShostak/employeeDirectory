// Require dependencies
var http = require("http");
var fs = require("fs");
var path = require("path");
const express = require("express");
const mongojs = require("mongojs");

const app = express();


// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // When we visit different urls, read and respond with different files
  const databaseUrl = "zoo";
  const collections = ["animals"];
  
  const db = mongojs(databaseUrl, collections);
  
  db.on("error", error => {
    console.log("Database Error:", error);
  });
  
  app.get("/", (req, res) => {
    res.send("Hello world");
  });
  
  app.get("/all", (req, res) => {
    db.animals.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
  
  app.get("/name", (req, res) => {
    db.animals.find().sort({ name: 1 }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
  
  app.get("/weight", (req, res) => {
    db.animals.find().sort({ weight: -1 }, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  });
  
  app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  
}

// Sets up the Express App
// =============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// Basic route that sends the user first to the Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/fitnessTracker/exercise.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});


  

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      ({length}) => length >= 6,
      "Password should be longer."
    ]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

  lastUpdated: Date,

  fullName: String
});

// setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
UserSchema.methods.fullName = function() {
  this.username = `${this.firstName}...the Coolest!`;
  return this.username;
};

UserSchema.methods.lastUpdated = function() {
  this.date.now;
  return this.isCool;
};

// lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
<!DOCTYPE html>
<html lang="en">




db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]})
``` Find all data in a Collection with `db.[COLLECTION_NAME].find()`.




* Adding .pretty() makes the data more readable:

```sql
db.places.find().pretty()
```





* Find specific data by matching a field:

```sql
db.places.find({"continent": "Africa"})
db.places.find({"country": "Morocco"})





* We update data using `db.[COLLECTION_NAME].update()`

```
db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}})
To update multiple entries, you need to add `{multi: true}`

db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}}, {multi: true})
```db.places.insert({"continent": "Africa", "country": "Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]})
* **Answer**: `$set` will create the field `capital`

* The newly created field can now be updated with the same command:

```
db.places.update({"country": "Morocco"}, {$set: {"capital": "RABAT"}})
```

* We can update the values in an array with `$push`:

```
db.places.update({"country": "Morocco"}, {$push: {"majorcities": "Agadir"}})
```

**Deleting**

* We delete an entry with `db.[COLLECTION_NAME].remove()`

```
db.places.remove({"country": "Morocco"})
```

* We can also empty a collection with `db.[COLLECTION_NAME].remove()`

```
db.places.remove({})
```
db.students.update({name: "Steve"}, {$push: {"hobbies":"Extreme Basketweaving"}})
```

* While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

```
Insert five more documents with one command.

```
db.students.insertMany([
  {name: 'Jane', row:1, os:'Mac', hobbies:['Coding', 'Sleeping', 'Karate'] },
  {name: 'Mary', row:2, os:'Mac', hobbies:['Baseball', 'Basketball', 'Tai Chi'] },
  {name: 'Alexa', row:3, os:'Lin', hobbies:['Gaming', 'Reading', 'Gardening'] },
  {name: 'Gary', row:4, os:'Mac', hobbies:['Walking', 'Reading', 'Mountain Climbing'] },
  {name: 'Ed', row:5, os:'Win', hobbies:['Coding', 'Karate', 'Scuba Diving'] }
]);

//////////////////////////////server.js
const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "zoo";
const collections = ["animals"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.animals.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.get("/name", (req, res) => {
  db.animals.find().sort({ name: 1 }, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.get("/weight", (req, res) => {
  db.animals.find().sort({ weight: -1 }, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  db.notes.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

app.get("/all", (req, res) => {
  db.notes.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.get("/find/:id", (req, res) => {
  db.notes.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.post("/update/:id", (req, res) => {
  db.notes.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $set: {
        title: req.body.title,
        note: req.body.note,
        modified: Date.now()
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  db.notes.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
////////////////////////////////////////////////////user model
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

</body>
```
</html>