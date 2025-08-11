<script setup lang="ts">
const props = defineProps<{
  hp: number;
  xp: number;
}>();
const emit = defineEmits<{
  (e: 'gain-xp', value: number): void;
}>();
</script>

<template>
    <div class="hud">
        <div>HP: {{ props.hp }}</div>
        <div>XP: {{ props.xp }}</div>
        <button @click="emit('gain-xp', 5)">+5 XP</button>
    </div>
</template>