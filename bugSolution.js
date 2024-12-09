This solution uses Firebase's `onAuthStateChanged` listener to ensure the app is initialized before accessing the database.
```javascript
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
//Import your Firebase configuration
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database, 'path/to/your/data');

// Listen for changes in the database after initialization
firebase.auth().onAuthStateChanged((user) => {
if (user) {
  onValue(databaseRef, (snapshot) => {
    const data = snapshot.val();
    console.log('Data:', data);
  });
} else {
  console.log('User not signed in');
}
});
```
Alternatively, you can use promises:
```javascript
initializeApp(firebaseConfig)
  .then(() => {
    const database = getDatabase();
    // Access the database here
  })
  .catch((error) => {
    console.error('Firebase initialization error:', error);
  });
```