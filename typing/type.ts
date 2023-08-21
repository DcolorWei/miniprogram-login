//enum
export enum GrantType {
    AUTHORIZATION_CODE = 'authorization_code'
}

//request to wechat server
export interface LoginRequest {
    appid: string;
    secret: string;
    js_code: string;
    grant_type: GrantType;
}

//response from wechat server
export interface LoginResponse {
    openid: string;
    session_key: string;
    unionid: string;
    errcode: number;
    errmsg: string;
}

export class AuthInfo {
    openid: string;
    session_key: string;
    unionid: string;

    constructor(lgRes: LoginResponse) {
        this.openid = lgRes.openid;
        this.session_key = lgRes.session_key;
        this.unionid = lgRes.unionid;
    }
}

export class AuthError {
    errcode: number;
    errmsg: string;
    constructor(lgRes: LoginResponse) {
        this.errcode = lgRes.errcode;
        this.errmsg = lgRes.errmsg;
    }
}