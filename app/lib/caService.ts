import { db } from "./firebase";
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

export const DEFAULT_CA = "MvmoYvZcekJT5v5rUAUK7dNngi2YDQzKRHRpT1Upump";
export const SITE_ID = "fuku-coin";

/**
 * Fetch CA once from Firestore (fallback to DEFAULT_CA)
 */
export async function getCAFromFirestore(siteId: string = SITE_ID): Promise<string> {
  try {
    const docRef = doc(db, "sites", siteId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      const data = snap.data();
      if (data?.ca && typeof data.ca === "string" && data.ca.trim().length > 10) {
        return data.ca.trim();
      }
    }
  } catch (err) {
    console.warn("Firestore read failed, using fallback CA:", err);
  }
  return DEFAULT_CA;
}

/**
 * Save new CA to Firestore (Permanent!)
 */
export async function saveCAToFirestore(newCA: string, siteId: string = SITE_ID): Promise<void> {
  const docRef = doc(db, "sites", siteId);
  await setDoc(
    docRef,
    {
      ca: newCA.trim(),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

/**
 * Real-time WebSocket subscriber
 * Fires immediately on initial load, then pushes whenever the CA is updated in Firestore!
 */
export function subscribeToCA(callback: (ca: string) => void, siteId: string = SITE_ID) {
  try {
    const docRef = doc(db, "sites", siteId);
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          if (data?.ca && typeof data.ca === "string" && data.ca.trim().length > 10) {
            callback(data.ca.trim());
            return;
          }
        }
        callback(DEFAULT_CA);
      },
      (error) => {
        console.warn("Firestore onSnapshot error:", error);
        callback(DEFAULT_CA);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.warn("Could not attach Firestore listener:", err);
    callback(DEFAULT_CA);
    return () => {};
  }
}
