import { initializeApp, getApps } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAX4QJXVtaGA4tBHTyEJZP_Au0Tl8p0ebw",
  authDomain: "digital-soko.firebaseapp.com",
  projectId: "digital-soko",
  storageBucket: "digital-soko.appspot.com",
  messagingSenderId: "538307178491",
  appId: "1:538307178491:web:df39d0c88162a0d98fa55e",
  measurementId: "G-02RQMZX3W8",
};

export default function firebaseClient() {
  if (!getApps.length) {
    initializeApp(firebaseConfig);
  }
}
