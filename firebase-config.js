// ============================================================
// DHYAN CABS — FIREBASE CONFIG MODULE
// Exposes: auth, loginAdmin, logoutAdmin, watchAuthState,
//          fetchCollection, saveDocument, updateDocument, deleteDocument
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCp0wQryfa5VZElQeY7RgdCLvEdSdvr4So",
  authDomain: "dhyancab.firebaseapp.com",
  projectId: "dhyancab",
  storageBucket: "dhyancab.firebasestorage.app",
  messagingSenderId: "913112217943",
  appId: "1:913112217943:web:6ab80e99ac92887f00a612",
  measurementId: "G-GW3J2G0Q6L"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) { /* analytics unavailable in some contexts, safe to ignore */ }

const db = getFirestore(app);
export const auth = getAuth(app);

// ── AUTH ──────────────────────────────────────────────────
export function loginAdmin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logoutAdmin() {
  return signOut(auth);
}

export function watchAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

// ── FIRESTORE ─────────────────────────────────────────────
export async function fetchCollection(collectionName, orderField, orderDir = 'asc') {
  const colRef = collection(db, collectionName);
  const q = orderField ? query(colRef, orderBy(orderField, orderDir)) : colRef;
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function saveDocument(collectionName, data) {
  return addDoc(collection(db, collectionName), data);
}

export async function updateDocument(collectionName, id, updates) {
  return updateDoc(doc(db, collectionName, id), updates);
}

export async function deleteDocument(collectionName, id) {
  return deleteDoc(doc(db, collectionName, id));
}
