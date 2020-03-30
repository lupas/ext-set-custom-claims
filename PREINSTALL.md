Use this extension to set custom claims to a user.

When triggered from your application's SDK, this extension will set custom claims for a user. This can be useful, for example, for setting custom claims for a users roles, like `admin = true`.

# Additional setup
None

### Security
The parameter SECURITY_CLAIM_PATH will setup a security check for the caller. If, for example, only admins shall be able to call this function, and your admin custom claim token is simply `admin`, you can set SECURITY_CLAIM_PATH to `admin`, and the function will fail if the callers custom claim token `admin !== true`.

<!-- We recommend keeping the following section to explain how billing for Firebase Extensions works -->
# Billing
This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

<!-- List all products the extension interacts with -->
- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)