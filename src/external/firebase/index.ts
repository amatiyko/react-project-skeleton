import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_CONFIG_DEV } from '../../config';

firebase.initializeApp(FIREBASE_CONFIG_DEV);

export default firebase;
