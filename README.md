# NamVT-Complex-APP

Description of project.

## Introduction

Project tổng cuối khóa traning ReactJs - Mock project mini web xem phim ...

## Features
- Validation data 
- Login
- Logout
- Signup ( having send mail notification to user)
- Management of movies
- Play trailer movie
- Display all movies
- Search and filter movies
- Detail movie
- Add movie cart
- Manage cart
- Buy and Payment
## Getting Started

Provide instructions on how to set up and run your project locally.

### Installation

A step-by-step guide on how to install and set up your project.

#### Compiles and install all dependencies run project
```
npm i
```
#### Run mock data - Json server provide data for App
```
Open bash GUI and Move to the folder containing the file db.json: [\src\utils\db.json]
```
json-server --watch db.json
```
####  Run mock server  - Dùng để tự động gửi mail xác thực tới người dùng đăng ký mới tài khoản.
```
Move to the folder containing the file server.js : [\src\utils\server.js] and run command above
```
node server.js

#### Run App
```
npm run dev
```