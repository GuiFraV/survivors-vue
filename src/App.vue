<script setup lang="ts">
import { reactive } from 'vue';
import GameHUD from './components/GameHUD.vue';

const state = reactive({
  hp: 100,
  xp: 0,
  gold: 0,
});

function gainXp(v: number) {
  state.xp += v;
}

function takeDamage(v: number) {
  state.hp = Math.max(0, state.hp - v);
}

function gainGold(v: number) {
  state.gold += v;
}

</script>

<template>
  <GameHUD :hp="state.hp" :xp="state.xp" :gold="state.gold" @gain-xp="gainXp" @gain-gold="gainGold"/>
  <button @click="takeDamage(10)">Take Damage</button>
</template>