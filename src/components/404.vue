<template>
    <div class="page-404">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </template>
  
<style lang="scss" scoped>
  .page-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;

    h1 {
      font-size: 5rem;
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      margin: 20px 0;
    }

    a {
      color: #007bff;
      font-size: 1.2rem;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom-color 0.3s;

      &:hover {
        border-bottom-color: currentColor;
      }
    }
  }
</style>
