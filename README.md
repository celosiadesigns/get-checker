# Server Checker

### Todo

1. Consider refactoring to using constructors. Example:

```javascript
class Server {
  constructor(name) {
    this.tr = document.getElementById(name);
    this.code = document.getElementById(name + '-code');
    this.text = document.getElementById(name + '-text');
    this.time = document.getElementById(name + '-time');
  }
}

const server1 = new Server('server1');
```
