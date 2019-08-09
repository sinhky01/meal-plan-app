export class User{
    userId: number;
    fname: string;
    lname: string;
    username: string;
    password: string;
    // userPref: UserPref[];
    // userHist: UserHistory[];
    // user_data: UserData[];

    constructor(username: string,password: string){
        this.username = username;
        this.password = password;
    }
}