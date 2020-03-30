# Problem 1

In order to get this Extension to work, you currently need to run the following command once initially:

```zsh
gcloud alpha functions add-iam-policy-binding ext-set-custom-claims-setCustomClaims --member=allUsers --role=cloudfunctions.invoker
```

See: https://groups.google.com/forum/#!topic/firebase-mods-trusted-testers/XgWsrRpXMmQ

# Problem 2

Author field in extension.yaml does not work yet.