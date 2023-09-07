<p align="center"> <span style="font-size:40px">👻</span> </p>

<h1 align="center">Vafar</h1>
<p align="center">一个 <span style="text-decoration:line-through;">实用</span>（开发中）的 Vue3 + Ts UI组件库。</p>

## 安装

在现有项目中使用 vafar 时，可以通过 `npm` 进行安装：

```bash
# Vue 3 项目，安装最新版 Vant
npm i vafar
```

当然，你也可以通过 `yarn` 或 `pnpm` 进行安装：

```bash
# 通过 yarn 安装
yarn add vafar

# 通过 pnpm 安装
pnpm add vafar
```

## 快速上手

```ts
import { createApp } from 'vue';

import  Vafar from 'vafar';

import  'vafar/ui/es/style.css'

const app = createApp();

app.use(Vafar);
```