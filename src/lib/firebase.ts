import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTsjYZNWFfZOESP-2QQfbD7jc5fG9FJdc",
  authDomain: "explore-malaysia-6d28d.firebaseapp.com",
  databaseURL: "https://explore-malaysia-6d28d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "explore-malaysia-6d28d",
  storageBucket: "explore-malaysia-6d28d.appspot.com",
  messagingSenderId: "869053244601",
  appId: "1:869053244601:web:e5bf632bb4a689a30be768",
  measurementId: "G-0F23HMT8EK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize default admin user if it doesn't exist
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const initializeAdminUser = async () => {
  const auth = getAuth();
  try {
    await createUserWithEmailAndPassword(auth, "admin@junrie.com", "admin123");
    console.log("Admin user created successfully");
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log("Admin user already exists");
    } else {
      console.error("Error creating admin user:", error);
    }
  }
};

// Call this function when the app initializes
initializeAdminUser();