import conf from "../conf/configure";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client.setEndpoint(conf.apprwriteUrl).setProject(conf.appwriteProjectId).setJWT()
        this.account = new Account(this.client)
    }

    async createAccount({email, pass, confpass, name}) {
        
        try {
            const userAccount = await this.account.create(ID.unique(), email, pass, confpass, name)
            if (userAccount) {
                return
            }
            else {
                return userAccount
            }
        }
        catch(error) {
            throw error
        }
    }
    async login({email, pass}) {
        try {
            return await this.account.createEmailPasswordSession(email, pass)
        } catch (error) {
            throw error
        }
    }
    async getUser() {
        try {
            return await this.account.get()
        }
        catch (error) {
            console.log("Appwrite service error: ", error)
        }
        return null
    }
    async logout() {
        try {
            await this.account.deleteSessions() // delete sessions of every browser from where the user is logged in
        } catch (error) {
            console.log("Appwrite service error: ", error)
        }
    }
    async creatingJWT() {
        try {
            const jwtResponse = await this.account.createJWT()
            const jwtToken = jwtResponse.jwt
            localStorage.setItem("jwtToken", jwtToken);
            return jwtToken
        } catch (error) {
            console.log("Appwrite service error: ", error)
            return null
        }
    }

    isAuthenticated() {
        const jwtToken = localStorage.getItem("jwtToken");
        return !!jwtToken;
      }
    
      getToken() {
        return localStorage.getItem("jwtToken");
      }
    
      logout() {
        localStorage.removeItem("jwtToken");
      }
    }

const authService = new AuthService()
const jwtToken = await authService.createJWT()
if (jwtToken) {
}

export default authService