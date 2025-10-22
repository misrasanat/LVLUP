import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await loadUserData(user.uid);
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loadUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      } else {
        // Create new user profile
        const newUserData = {
          level: 1,
          xp: 0,
          xpToNext: 100,
          stats: {
            strength: 10,
            intelligence: 10,
            discipline: 10,
            endurance: 10
          },
          createdAt: new Date().toISOString(),
          lastActive: new Date().toISOString()
        };
        await setDoc(doc(db, 'users', uid), newUserData);
        setUserData(newUserData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const updateUserData = async (updates) => {
    if (!user) return;
    
    try {
      const updatedData = { ...userData, ...updates, lastActive: new Date().toISOString() };
      await setDoc(doc(db, 'users', user.uid), updatedData, { merge: true });
      setUserData(updatedData);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const value = {
    user,
    userData,
    loading,
    updateUserData
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
