import { makeAutoObservable } from "mobx";
import { authenticationService, systemService } from "API";
import { authorizationStatusValidation, userGetDataStatus } from 'settings/responseStatus'
import { toastSendMailSuccess, toastServerError } from 'settings/toastifyTools'

export interface ISystem {
    isAuthenticated: boolean;
    isSubmitting: boolean;
    id: string;
    login: string;
    role: number;
}

class System implements ISystem{
    isAuthenticated = true
    isSubmitting = false
    id = ""
    login = "..."
    role = 100;

    constructor() {
        makeAutoObservable(this)
    }
    
    async authenticate({ login, password }){
        const response = await authenticationService.userSingInApi(login, password);
        if(response.status === 200){
            localStorage.setItem('jwt_token', response.data);
            await this.getUserData()
        }
        else{
            authorizationStatusValidation(response.status);
            this.isSubmitting = false
        }
    }

    async getUserData(){
        const response = await authenticationService.userGetData();
        if(response.status === 200) {
            this.setId(response.data.id)
            this.setLogin(response.data.login)
            this.setRole(response.data.role)
            this.setAuth(true)
        }
        else{
            userGetDataStatus(response.status)
        }
    }

    async singOut(){
        this.setAuth(false)
        localStorage.removeItem('jwt_token');
    }

    async sendMailFromUser(firstName, email, message){
        const response = await systemService.sendMail(firstName,email,message)
        if(response.status === 204){
            toastSendMailSuccess()
            return true;
        }
        else{
            toastServerError()
            return false;
        }
    }

    setId(id){
        this.id = id
    }

    setLogin(login){
        this.login = login
    }

    setRole(role){
        this.role = role
    }

    setAuth(isAuth){
        this.isAuthenticated = isAuth
    }

    get getAuthenticated(){
        return this.isAuthenticated
    }

    get showLogin(){
        return this.login
    }

    get isSub(){
        return this.isSubmitting
    }
}

export default new System();