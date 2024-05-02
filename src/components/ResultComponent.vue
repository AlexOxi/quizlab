<template>
  <div class="row">
    <div class="col-6">
      <q-knob readonly show-value class="text-green" v-model="correctChoiceCount" :min="0" :max="answers.length"
        size="100px" color="green">
        {{
          (correctChoiceCount / (correctChoiceCount + incorrectChoiceCount)) *
          100
        }}
        %
      </q-knob>
    </div>
    <div class="col-6">
      <q-knob readonly show-value class="text-red" v-model="incorrectChoiceCount" :min="0" :max="answers.length"
        size="100px" color="red">
        {{
          (incorrectChoiceCount / (correctChoiceCount + incorrectChoiceCount)) *
          100
        }}
        %
      </q-knob>
    </div>
  </div>
  <q-list>
    <q-item v-for="q in test.questions" :key="q.id">
      <q-item-section avatar>
        <q-icon :color="q.isCorrectlyAnswered ? 'positive' : 'negative'"
          :name="q.isCorrectlyAnswered ? 'done' : 'close'" />
      </q-item-section>
      <q-item-section>{{ q.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { getCorrectChoiceForQuestion, Test } from 'src/data/data-layer';
import { onBeforeMount } from 'vue';
import { ref } from 'vue';
import { defineProps, PropType } from 'vue';
const props = defineProps({
  test: {
    type: Object as PropType<Test>,
    required: true,
  },
  answers: {
    type: Object as PropType<string[]>,
    required: true,
  },
});
const correctChoiceCount = ref(0);
const incorrectChoiceCount = ref(0);
const checkAnswers = () => {
  props.test.questions.forEach((q) => {
    const correctChoice = getCorrectChoiceForQuestion(q);
    if (correctChoice) {
      if (props.answers.includes(correctChoice.id)) {
        correctChoiceCount.value++;
        q.isCorrectlyAnswered = true;
      } else {
        incorrectChoiceCount.value++;
        q.isCorrectlyAnswered = false;
      }
    }
  });
};

onBeforeMount(() => {
  checkAnswers();
});
</script> 