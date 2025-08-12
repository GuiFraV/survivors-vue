<script setup lang="ts">
const props = defineProps<{
  hp: number;
  xp: number;
  gold: number;
}>();
const emit = defineEmits<{
  'gain-xp': [value: number]
  'gain-gold': [value: number]
}>();
</script>

<template>
    <div class="hud">
        <div>HP: {{ props.hp }}</div>
        <div>XP: {{ props.xp }}</div>
        <div>GOLD: {{ props.gold }}</div>
        <button @click="emit('gain-xp', 5)">+5 XP</button>
        <button @click="emit('gain-gold', 10)">+10 Gold</button>
    </div>
</template>