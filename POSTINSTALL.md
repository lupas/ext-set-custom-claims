# See it in action
This extension is implemented as an HTTPS Callable Function. To call it from your client app, follow the instructions at https://firebase.google.com/docs/functions/callable#call_the_function. The name of the function that you want to call is ${function:setCustomClaims.name}, and its region is ${function:setCustomClaims.location}.

```js
functions.httpsCallable('${function:setCustomClaims.name}')({
    // uid: The user uid of the auth user that should be modified.
    uid: 'foo',
    // customClaims: The custom claims that need to be set.
    customClaims: {
        // Example: You can set custom claims as you like.
        admin: true
    }
})
```

# Using the extension
When triggered from your application's SDK, this extension will set custom claims for a user. This can be useful, for example, for setting custom claims for a users roles, like `admin = true`.

## Security
The parameter SECURITY_CLAIM_PATH will setup a security check for the caller. If, for example, only admins shall be able to call this function, and your admin custom claim token is simply `admin`, you can set SECURITY_CLAIM_PATH to `admin`, and the function will fail if the callers custom claim token `admin !== true`.

## Learn More
To learn more about callable functions, visit the [functions documentation](https://firebase.google.com/docs/functions/callable).

<!-- We recommend keeping the following section to explain how to monitor extensions with Firebase -->
# Monitoring
As a best practice, you can [monitor the activity](https://firebase.google.com/docs/extensions/manage-installed-extensions#monitor) of your installed extension, including checks on its health, usage, and logs.
