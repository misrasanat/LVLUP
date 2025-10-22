import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../config/firebase';

// initialize app (singleton)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let auth;
try {
  // initializeAuth with React Native AsyncStorage persistence
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  // initializeAuth can throw if already initialized or unsupported — fall back to getAuth
  console.warn('initializeAuth failed or already initialized — falling back to getAuth():', e?.message ?? e);
  auth = getAuth(app);
}

export const db = getFirestore(app);
export { auth, app };