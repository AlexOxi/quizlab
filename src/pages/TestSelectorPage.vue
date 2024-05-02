<template>
  <div class="column">
    <div class="justify-center q-pa-lg">
      <q-select
        v-model="selectedTest"
        :options="tests"
        label="Vyberte si test..."
      />
    </div>
    <div class="q-pa-lg row">
      <q-btn
        label="Vykonať test"
        color="positive"
        :disable="selectedTest === null"
        :to="`testing/${selectedTest?.id}`"
      />
      <div class="row q-ml-md">
        <q-btn label="Home" to="/" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Test } from 'src/data/data-layer';
import { tests } from '../data/tests';

const selectedTest = <Partial<Test>>ref(null);
</script>
