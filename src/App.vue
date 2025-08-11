<script setup lang="ts">
import { reactive } from 'vue';
import GameHUD from './components/GameHUD.vue';

const state = reactive({
  hp: 100,
  xp: 0,
});

function gainXp(v: number) {
  state.xp += v;
}

function takeDamage(v: number) {
  state.hp = Math.max(0, state.hp);
}

</script>

<template>
  <GameHUD :hp="state.hp" :xp="state.xp" @gain-xp="gainXp"/>
  <button @click="takeDamage(10)">Take Damage</button>
</template>