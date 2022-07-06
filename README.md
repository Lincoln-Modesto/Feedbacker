# Feedbacker - dashboard de feedbackes

Esse projeto foi desenvolvido a partir do treinamento de Vue 3 do [VueJs Brasil](https://github.com/vuejs-br)

## Funcionalidades (only Front-end)

[x] Criação de widget para feedbacks de erro, sugestões e outros
[x] Sistema de login/logout
[x] Criação de conta
[x] Dashboard de gerenciamento de feedbacks recebidos
[x] Landing page

## Principais dependências instaladas:

- [Animate css](https://animate.style)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Tailwind](https://jestjs.io/pt-BR/)
- [Cypress](https://www.cypress.io)
- [EsLint](https://eslint.org)
- [jest](https://jestjs.io/pt-BR/)
- [Prettier](https://prettier.io)
- [Tiny-typed-emitter](https://github.com/binier/tiny-typed-emitter)
- [vee-validate](https://vee-validate.logaretm.com/v4/)
- [Vue-Router](https://router.vuejs.org)
- [Vue-Toastification](https://github.com/Maronato/vue-toastification)

## Instalação
Utilize preferencialmente o **npm** para as instalações e scripts.

Dentro das pastas **/dashboard** e **/widget**, execute os comandos para instalação

```
npm install
```

### Desenvolvimento
```
npm run serve
```

### Produção
```
npm run build
```

### Testes end-to-end com o Cypress
```
npm run test:e2e
```

### Testes unitários com o Jest
```
npm run test:unit
```

### Lint
```
npm run lint
```

- Obs: Para rodar o backend, na raiz da pasta /backend dê um ```npm run build``` e em seguida, o comando ```npm run container```

## Demo

![](/dashboard/src/assets/images/Landing.png)
![](/dashboard/src/assets/images/Landing%20cria%C3%A7%C3%A3o%20de%20conta.png)
![](/dashboard/src/assets/images/Admin%20feedbacks.png)