```javascript
// Incorrect usage of $inc operator with an array
db.collection.updateOne({ _id: 1 }, { $inc: { arrayField: 1 } });
```