## option - replace

Normally a call to navigate will push a new entry into the history stack so the user can click the back button to get back to the page. If you pass replace: true to navigate then the current entry in the history stack will be replaced with the new one.

An example is when the user clicks a “purchase” button but needs to log in first, after they log in, you can replace the login screen with the checkout screen you wanted them to be at. Then when they click the back button they won’t see the login page again.

```js
navigate('/some/where', { replace: true })
```
