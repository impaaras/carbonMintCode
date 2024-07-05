

// function isNumber(input) {
//     return /^\d+$/.test(input);
//   }
// console.log(isNumber('4'))

// bundle exec pod install
// npx react-native init MyProject
// cd MyProject
// npx react-native start (Terminal Window 1)
// npx react-native run-ios (Terminal Window 2)

// npx react-native-clean-project



//// google
// {"additionalUserInfo": {"isNewUser": false, "profile": {"aud": "297797240603-m7v5m85fl06oj8n8hnj85ssdonsf0bln.apps.googleusercontent.com", "azp": "297797240603-55m5h9plg4kkmkniga9ar5cl0usjsjiv.apps.googleusercontent.com", "email": "happyarya1405@gmail.com", "email_verified": true, "exp": 1706098027, "family_name": "Arya", "given_name": "Happy", "iat": 1706094427, "iss": "https://accounts.google.com", "locale": "en", "name": "Happy Arya", "picture": "https://lh3.googleusercontent.com/a/ACg8ocKiPmYN-6ddhVRD4cbTisQXPZXHqmsFCnHgjp0n5iOo=s96-c", "sub": "105416182470817344331"}, "providerId": "google.com"}, "user": {"displayName": "Happy Arya", "email": "happyarya1405@gmail.com", "emailVerified": true, "isAnonymous": false, "metadata": {"creationTime": 1706009060757, "lastSignInTime": 1706094431092}, "multiFactor": {"enrolledFactors": [Array]}, "phoneNumber": null, "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocKiPmYN-6ddhVRD4cbTisQXPZXHqmsFCnHgjp0n5iOo=s96-c", "providerData": [[Object]], "providerId": "firebase", "tenantId": null, "uid": "ptL4ekkp8ubFcvPL5IgE2mvexdj1"}}


//////// email 

// {"additionalUserInfo": {"isNewUser": true}, "user": {"displayName": null, "email": "1234@gmail.com", "emailVerified": false, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "tenantId": null, "uid": "XGv2UpaGS7WbRRz3ST5HmqGIeJJ3"}}

// need to change id in firebase function
const debounceHandler = (nextFunction, time) => {
    let timeoutId;

    return () => {
        // Clear the existing timeout
        clearTimeout(timeoutId);

        // Set a new timeout
        timeoutId = setTimeout(() => {
            nextFunction();
        }, time);
    };
};

const task = () => console.log('completed task');

const debouncedTask = debounceHandler(task, 3000);

// Call debouncedTask instead of task
debouncedTask();
debouncedTask();
debouncedTask();
debouncedTask();
