import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCFm2y5MVKLdWHoRjM90H92FGAvRz_Ud1M",

	authDomain: "ems-pera-e31fc.firebaseapp.com",

	projectId: "ems-pera-e31fc",

	storageBucket: "ems-pera-e31fc.appspot.com",

	messagingSenderId: "834017694033",

	appId: "1:834017694033:web:5b6dfe2671f2c794e90370",

	measurementId: "G-30TSZ9XCYS",
};

const app = firebase.initializeApp(firebaseConfig);
export const employeeDb = getFirestore(app);
