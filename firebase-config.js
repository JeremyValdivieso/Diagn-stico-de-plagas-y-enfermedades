// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
    measurementId: "TU_MEASUREMENT_ID"
};

// Inicialización de Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// Subir archivo a Firebase
async function uploadToFirebase(file) {
    const storageRef = storage.ref(`images/${file.name}`);
    try {
        await storageRef.put(file);
        const url = await storageRef.getDownloadURL();
        console.log('Archivo subido:', url);
        alert('Archivo subido con éxito');
    } catch (error) {
        console.error('Error al subir archivo:', error);
        alert('Error al subir archivo');
    }
}
