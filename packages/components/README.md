<p align="center"> <span style="font-size:40px">👻</span> </p>

<h1 align="center">Vafar</h1>
<p align="center">A <span style="text-decoration:line-through;">useful</span>  Vue3 + Ts UI library in development.</p>

<p align="center">
  🇨🇳 <a href="./README.zh-CN.md">中文版介绍</a>
</p>

## Install

Using `npm` to install:

```bash
# install latest version for Vue 3 project
npm i vafar
```

Using `yarn`, `pnpm`:

```bash
# with yarn
yarn add vafar

# with pnpm
pnpm add vafar
```

## Quickstart

```ts
import { createApp } from 'vue';

import  Vafar from 'vafar';

import  'vafar/ui/es/style.css'

const app = createApp();

app.use(Vafar);
```