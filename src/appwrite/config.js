import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/configure";

export class Service {
    client = new Client()
    databases
    bucket
    jwtToken

    constructor() {
        this.client.setEndpoint(conf.apprwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
        this.jwtToken = localStorage.getItem('jwtToken')
    }

    async getDocument(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log('Appwrite getPost error', error)
            return null
        }
    }
    async getDocuments(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log('Appwrite getPosts error', error)
            return null
        }
    }
    async createDocument({title, content, featuredImage, status, userId, slug}) {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            console.log("User is not authenticated");
            return null;
        }
        
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status, userId}

            )
        } catch (error) {
            console.log('Appwrite createDocument error', error)
            return null
        }
    }
    async updateDocument({title, content, featuredImage, status, slug}) {
        try {
            return await this.databases, this.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title, content, featuredImage, status})
        } catch (error) {
            console.log('Appwrite createDocument error', error)
            return null
        }
    }
    async deleteDocument(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        }
        catch (error) {
            console.log('Appwrite deleteDocument error', error)
            return null
        }
    }
    async authentication(token) {
        try {
            this.jwtToken = token
            localStorage.setItem('jwtToken', token)
            return true
        } catch (error) {
            console.log('Appwrite authentication error', error);
            return null
        }
    }
    async getAuthenticatedClient() {
        if(!this.jwtToken) {
            console.log("User is not authenticated");
            return null;
        }
        this.client.setJWT(this.jwtToken)
        return this.client
    }
    

    // Storage part

    async updateFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log('Appwrite updateFile error', error)
        }
    }

    async deleteFile(id) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, id)
        } catch (error) {
            console.log('Appwrite deleteFile error', error)
        }
    }

    getFilePreview(id){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            id
        ).href
    }

    async downloadFile(id) {
        try {
            return await this.bucket.getFileDownload(conf.appwriteBucketId, id)
        } catch (error) {
            console.log('Appwrite downloadFile error', error)
        }
    }
}

const service = new Service()
export default service