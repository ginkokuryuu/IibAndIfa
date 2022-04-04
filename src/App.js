import './App.css';
import SweetMessages from './components/SweetMessages';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import RSVP from './components/RSVP';
import TheInvitation from './components/TheInvitation';

function App() {
  return (
    <div className="App shadow-6">
      <TheInvitation/>
      <RSVP/>
      {/* <SweetMessages/> */}
    </div>
  );
}

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Gh3Mcf4dElaprOQR0DcoN8Hq232FTJk",
  authDomain: "iibandifa.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://iibandifa-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "iibandifa",
  storageBucket: "iibandifa.appspot.com",
  messagingSenderId: "77804421053",
  appId: "1:77804421053:web:8caad2c040a808ba455cd4",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-SVWX2KZFS6",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);

export default App;
