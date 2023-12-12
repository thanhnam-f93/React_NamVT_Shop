# NamVT-Complex-APP

Description of project.

## Introduction

Project tổng cuối khóa traning ReactJs - Mock project mini web xem phim ...

## Features
### Signup**
- ![Signup]('../images/signin.png')

-  ( having send mail notification to user): 
 
### Login**
- Login
### Logout**
- Logout
### Management of movies**
- Management of movies
### Play trailer movie**
- Play trailer movie
### Display all movies**
- Display all movies
### Search and filter movies**
- Search and filter movies
### Detail movie**
- Detail movie
### Add movie cart**
- Add movie cart
### Manage cart**
- Manage cart
### Buy and Payment**
- Buy and Payment
## Getting Started

Provide instructions on how to set up and run your project locally.

## Installation

A step-by-step guide on how to install and set up your project.
1. **Install all dependencies run project:**
```
npm i
```

2. **Run mock data - Json server provide data for App:**
- Open bash GUI and Move to the folder containing the file db.json: [\src\utils\db.json]

```
json-server --watch db.json
```

3. **Run mock server  - Dùng để tự động gửi mail xác thực tới người dùng đăng ký mới tài khoản:**
- Move to the folder containing the file server.js : [\src\utils\server.js] and run command above

```
node server.js
```
4. **Run Web App**
- Starting web and enjoy this moment.
```
npm run dev
```