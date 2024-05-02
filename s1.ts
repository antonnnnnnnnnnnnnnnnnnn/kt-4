class User implements IUser{
    public uid: number
    public login: string
    public password: string
    public phone: string
    public verification: boolean = false
    public openData: IUserPublicData
    public privateData: IUserPrivateData
    public settings: IUserSettings
    public role: 'Admin' | 'User'
    constructor(){}
    
    signIn(login: string, password: string){
        if (this.login == login && this.password == password){
            return {"status": "200", "text": "OK","message": "login success"}
        } else if (this.login == login && this.password != password){
            return {"status": "401", "text": "Unauthorized","message": "Bad Login"}
        } else {
            return {"status": "401", "text": "Unauthorized","message": "Bad password"}
        } 
    }
    // signin -> change to online
    // signout -> change to offline
    // register: login + pwd + repeat pwd + if ok -> signin -> user must set all public data
    // verification: get pwd + phone + age + cardNumber + geo -> change verification to true and set all these values
    // counter to get unique id if register success
    // forget pwd: get phone and send sms with url

    //transactionTrigger: -> get userid which need to pair -> pending -> add transaction to array 
    // payment if 2 payments is ok -> remove transaction, change balance  



    // + добавить новый функционал от каждого человека
    // all responses => json

}



interface IUser{
    uid: number
    login: string
    password: string
    phone: string
    verification: boolean
    openData: IUserPublicData
    privateData: IUserPrivateData
    settings: IUserSettings
}

interface IUserPublicData{
    firstname: string
    surname: string
    nickname: string
    age: number
    image: string
}

interface IUserPrivateData{
    cardNumber: number
    geo: string
    balance: number
    transactionHistory: ITransaction[]
}

interface ITransaction{
    userTrigger: number
    userReciever: number
    userTriggerPayment: boolean
    userRecieverPayment: boolean
    date: string
    amount: number
    status: "Pending" | "Success" | "Error"
}

interface IUserSettings{
    mode: "Dark" | "Light"
    showImage: boolean
    readyToRecieve: boolean
    readyToSwap: boolean
    transactionsCount: number
    lastTransaction: string 
    online: boolean
}

interface ICoin {
    name: string
    description: string
    currencyToUSD: number
    originURL: string
}