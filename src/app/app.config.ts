import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-bbbbd","appId":"1:616435441931:web:b0734159aa44e1b01dc20e","storageBucket":"danotes-bbbbd.firebasestorage.app","apiKey":"AIzaSyA9YZPSDEjKD_aeYt1OR20nGUc3v5SX6YQ","authDomain":"danotes-bbbbd.firebaseapp.com","messagingSenderId":"616435441931"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
