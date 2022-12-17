<template>
  <v-app>
    <client-only >
      <v-main>
        <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'] }"/>
      </v-main>
    </client-only>
  </v-app>
</template>
