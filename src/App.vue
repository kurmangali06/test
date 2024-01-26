<script setup lang="ts">
import { ref } from 'vue';
import { listNavigation } from './helpers/constats';

const isMenuActive = ref(false)

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}
</script>

<template>
  <div class="main">
    <nav class="main__navigation" :class="{ 'is-active': isMenuActive }">
      <!-- Кнопка для мобильного меню -->
      <button @click="toggleMenu" class="menu-toggle">Menu</button>
      <ul>
        <li v-for="(item) in listNavigation" :key="item.value">
          <router-link :to="item.value">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="main__body">
      <RouterView />
    </div>
  </div>
</template>


<style scoped lang="scss">
.main {
  display: flex;
  height: 100vh;
  width: 100%;

  &__navigation {
    flex-grow: 0;
    position: relative; // Для позиционирования кнопки меню

    .menu-toggle {
      display: none; // Скрыта по умолчанию
      position: absolute;
      top: 10px;
      right: 10px;
    }

    ul {
      list-style: none;
      padding: 0; // Сбрасываем отступы

      li {
        a {
          color: #000;
          text-decoration: none;

          &:hover {
            color: #555;
          }
        }

        .router-link-active {
          color: blue;
          font-weight: bold;
        }
      }
    }

    &.is-active {
      ul {
        display: block;
      }
    }
  }

  &__body {
    flex-grow: 1;
    margin-left: 20px;
  }

  // Медиа-запросы для мобильных устройств
  @media (max-width: 763px) {
    flex-direction: column;

    &__navigation {
      ul {
        display: none;
      }

      .menu-toggle {
        display: block;
      }

      &.is-active {
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

        }
      }
    }
  }
}

</style>
