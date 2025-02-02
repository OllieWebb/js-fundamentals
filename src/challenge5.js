/*#### Requirements
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

```js
let student = new Student("asia")
student.capitalisedName() // "Asia"
```*/

class Student {
    constructor(name) {
        this._name = name;
    }
    capitalisedName(_name) {
        _name[0] = _name[0].toUpperCase();
        return _name;
    }
}