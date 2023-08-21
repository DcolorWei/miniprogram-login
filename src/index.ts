import axios from 'axios';
import { AuthError, AuthInfo, LoginRequest, LoginResponse } from '../typing/type'

export class AuthService {
    private readonly appid: string;
    private readonly secret: string;
    private readonly grant_type: string;
    private constructor(loginRequest: LoginRequest) {
        this.appid = loginRequest.appid;
        this.secret = loginRequest.secret;
        this.grant_type = loginRequest.grant_type;
    }

    public async login(code: string): Promise<AuthInfo | AuthError> {
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${this.appid}&secret=${this.secret}&js_code=${code}&grant_type=${this.grant_type}`;
        const res: AuthInfo | AuthError = await new Promise((resolve, reject) => {
            axios.get(url).then((res: { data: LoginResponse }) => {
                if (res.data.errcode) {
                    resolve(new AuthError(res.data));
                } else {
                    resolve(new AuthInfo(res.data));
                }
            }).catch((err) => {
                reject(err);
            })
        })
        return res;
    }
}