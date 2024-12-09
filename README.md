# Firebase Database: Accessing Reference Before Initialization
This example demonstrates a common error when using the Firebase Realtime Database: accessing a database reference before the Firebase app has fully initialized.  The solution shows how to properly handle initialization and data access.

## Bug
The `bug.js` file shows how attempting to access the database before initialization leads to errors.  This often manifests as undefined references or unexpected behavior.

## Solution
The `bugSolution.js` demonstrates the correct approach using `onAuthStateChanged` or a Promise to ensure the Firebase app is ready before accessing the database. This avoids the race condition and ensures reliable data access.