# 微信小程序鉴权封装包

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/your-repo/blob/main/LICENSE)

该库是一个基于 TypeScript 的微信小程序鉴权封装包，旨在简化微信小程序登录功能的实现。它使用了 Axios 库来进行网络请求。

## 功能特性

- 提供了简单易用的微信小程序登录功能封装
- 支持 TypeScript，提供完整的类型定义
- 使用 Axios 进行网络请求，可自定义配置
- 集成了错误处理和异常捕获

## 安装

使用 npm 进行安装:

```shell
npm install miniprogram-login
```

或者使用 yarn 进行安装:

```shell
yarn add miniprogram-login
```

## 使用方法

### 1. 引入包

```typescript
import { AuthService } from 'miniprogram-login';
```

### 2. 创建实例

```typescript
const authService = new AuthService({
    appid: **********;
    secret: **********;
});
```

### 3. 登录

```typescript
//微信小程序使用wx.login()
authService.login(code)
  .then((result) => {
    // 登录成功，将会返回openid和unionid
    console.log(authInfo);
  })
  .catch((error) => {
    // 登录失败，可能为密钥错误或者网络错误
    console.error(authError);
  });
```

## 贡献

欢迎贡献代码，提出问题和建议。你的star是对我最大的鼓励。

## 许可证

该项目基于 MIT 许可证。

## 作者

- 作者：Dcolor
- 邮箱：corfer@yeah.net

如有任何问题，请随时联系作者。