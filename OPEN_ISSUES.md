# Problem 1

In order to get this Extension to work, you currently need to run the following command once initially:

```zsh
gcloud alpha functions add-iam-policy-binding ext-set-custom-claims-setCustomClaims --member=allUsers --role=cloudfunctions.invoker
```

See: https://github.com/firebase/functions-samples/issues/395#issuecomment-605025572

# Problem 2

Author field in extension.yaml does not work yet.