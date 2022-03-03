import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyCg6UdPoZ7CF0QZ2x6cOOUYzNpL0vkfLHg",
  authDomain: "financeapp-b7c82.firebaseapp.com",
  databaseURL: "https://financeapp-b7c82-default-rtdb.firebaseio.com",
  projectId: "financeapp-b7c82",
  storageBucket: "financeapp-b7c82.appspot.com",
  messagingSenderId: "907371573127",
  appId: "1:907371573127:web:c86c6cfb54fe8a87892d22",
  measurementId: "G-4R2EN387YN"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const dbRef = ref(db);
