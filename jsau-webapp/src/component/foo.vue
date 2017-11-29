<template>
  <form v-on:submit.prevent="onSubmit">
    <label>name</label>
    <input type="text" name="name">
    <label>password</label>
    <input type="text" name="password">
    <label>profession</label>
    <input type="text" name="profession">
    <button type="submit">simuler post</button>
  </form>
</template>

<script src="./foo.js"></script>
