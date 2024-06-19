import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp, } from '@angular/fire/app';
import { routes } from './app.routes'; // adjust the import according to your project structure
import { getAuth, provideAuth } from '@angular/fire/auth';




const firebaseConfig = {
  apiKey: "AIzaSyDON8pOAbENVz_QgDlLgJUGHmXOsPp6F3w",
  authDomain: "instagram-clone-6385.firebaseapp.com",
  projectId: "instagram-clone-6385",
  storageBucket: "instagram-clone-6385.appspot.com",
  messagingSenderId: "595845132415",
  appId: "1:595845132415:web:8a0da9ef393f2734a04f4a",
  measurementId: "G-EESZBFBCEM"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
};
