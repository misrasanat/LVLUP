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
  console.log('✅ Firebase app initialized');
} else {
  app = getApp();
  console.log('✅ Using existing Firebase app');
}

// Initialize Auth
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  console.log('✅ Auth initialized with persistence');
} catch (error) {
  if (error.code === 'auth/already-initialized') {
    auth = getAuth(app);
    console.log('✅ Auth already initialized');
  } else {
    console.error('❌ Auth error:', error.code, error.message);
    throw error;
  }
}

// Initialize Firestore (simple approach for v9)
try {
  db = getFirestore(app);
  console.log('✅ Firestore initialized');
} catch (error) {
  console.error('❌ Firestore error:', error);
  throw error;
}

export { auth, db, app };
