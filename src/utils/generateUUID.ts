import { v4 as uuidv4 } from "uuid";

// UUID'yi kontrol et ve gerekirse oluştur
function getUserId() {
  const storageKey = "deviceUUID"; // UUID'nin saklanacağı anahtar
  let deviceUUID = localStorage.getItem(storageKey);

  // UUID yoksa yeni oluştur ve sakla
  if (!deviceUUID) {
    deviceUUID = uuidv4(); // Yeni benzersiz kimlik oluştur
    localStorage.setItem(storageKey, deviceUUID); // Tarayıcıya kaydet
  }

  return deviceUUID;
}

export default getUserId;