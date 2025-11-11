export const firebaseConfig = {
  apiKey: "AIzaSyC45gQFrYoseaS00SYe7ZeEiCC828Yc7qk",
  authDomain: "lvlup-dc74c.firebaseapp.com",
  projectId: "lvlup-dc74c",
  storageBucket: "lvlup-dc74c.firebasestorage.app",
  messagingSenderId: "3879412591",
  appId: "1:3879412591:web:90d933be11806e05e17e9a",
  measurementId: "G-8L88GQDEX3"
};

// Validate configuration
const validateConfig = () => {
  const required = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
  const missing = required.filter(key => !firebaseConfig[key]);
  
  if (missing.length > 0) {
    console.error('Missing Firebase config fields:', missing);
    return false;
  }
  
  console.log('Firebase config validated successfully');
  return true;
};

validateConfig();

// Log config on load to verify
console.log('Firebase Config Loaded:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  hasApiKey: !!firebaseConfig.apiKey
});
