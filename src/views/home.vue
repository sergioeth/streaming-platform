<script lang="ts" setup>
import { useStore } from 'vuex';
import { key } from '../stores/auth';

const store = useStore(key);

if(store.state.token == "") window.location.href = "/login";
</script>

<template>
    <h1>Home Page</h1>
</template>
