export class User {

    constructor(
    public userid: number | undefined,
    public userfirstname: string | undefined,
    public userlastname : string | undefined,
    public useremail: string | undefined,
    public userphonenumber: string | undefined,
    public userpassword: string | undefined,
    public userisDeleted: boolean | undefined
    ){}
}
