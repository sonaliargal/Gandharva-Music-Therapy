const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteCollectionId_appointments : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_APPOINTMENTS),
    appwriteCollectionId_feedback : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_FEEDBACK)
}

export default conf