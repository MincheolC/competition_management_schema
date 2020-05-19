# Installation
[![Node Version](https://img.shields.io/badge/node-v12.16.1-brightgreen)](https://nodejs.org/ko/)
[![Mysql Version](https://img.shields.io/badge/mysql-v8.0.12-blue)](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/)
### Prerequisites
#### Mysql Server Start
```
$ mysql.server start
```
#### Create database
```sql
CREATE DATABASE [database_name] CHARACTER SET utf8 COLLATE utf8_general_ci;
```

#### Configure `config/config.json`.
```json
"development": {
    "username": "username",
    "password": "password",
    "database": "database name",
    "host": "host address",
    "dialect": "mysql"
},
```
#### Install node modules.
```
$ npm install
```

# Migration
#### Deploy Migrations
```
npm run deploy:dev
```
#### Undo Migrations (주의. 초기 세팅 시에는 사용x)
생성한 테이블들을 다 지우는 방법
```
npm run undo:dev
npm run undo:dev:all
```
#### Deploy Seed
(**주의**) Seed는 해당 Table에 데이터가 없어야 정상적으로 들어감.
```
npm run deploy:dev:seed
```

# Schema
[DB diagram](https://dbdiagram.io/d/5d9c0217ff5115114db50219)