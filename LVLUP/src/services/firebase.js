import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../config/firebase';

let app;
let auth;
let db;

// Initialize Firebase App
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  console.log('Firebase app initialized');
} else {
  app = getApp();
  console.log('Using existing Firebase app');
}

// Initialize Auth with proper persistence
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  console.log('Firebase Auth initialized with AsyncStorage');
} catch (error) {
  if (error.code === 'auth/already-initialized') {
    console.log('Auth already initialized, getting existing instance');
    auth = getAuth(app);
  } else {
    console.error('Error initializing Firebase Auth:', error);
    auth = getAuth(app);
  }
}

// Initialize Firestore - simple approach without initializeFirestore
try {
  db = getFirestore(app);
  console.log('Firestore initialized successfully');
} catch (error) {
  console.error('Firestore initialization error:', error);
}

export { auth, db, app };
