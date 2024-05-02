<template>
  <div class="non-selectable q-pa-md">
    <div class="text-h2 q-mb-md">{{ test.label }}</div>
    <q-list bordered padding v-for="(question, idx) in questions" :key="question.id"
      :class="question.answered ? 'bg-green-1' : ''">
      <q-item :disable="isShowResult">
        <q-item-section side class="text-bold text-black">
          Otázka č. {{ idx + 1 }}
        </q-item-section>

        <q-item-label class="text-h6">{{ question.label }}</q-item-label>
        <q-item-section v-if="question.answered" class="text-bold">Odpovedané</q-item-section>
      </q-item>

      <q-item tag="label" v-for="(choice, idx) in question.choices" :key="choice.id" :disable="isShowResult"
        :class="idx % 2 || question.answered ? '' : 'bg-grey-2'">
        <q-item-section side class="text-bold">
          Odpoveď č. {{ idx + 1 }}.
        </q-item-section>
        <q-item-section side top>
          <q-checkbox v-model="selectedChoices" :val="choice.id" :disable="isShowResult || question.answered" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ choice.label }}</q-item-label>
          <q-item-label caption v-if="choice.hint">
            {{ choice.hint }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-md">
      <q-btn label="Vyhodnotit" color="positive" @click="checkTest" :disable="!hasAllAnswers" />
      <q-btn label="Ukončiť bez vyhodnotenia" color="negative" class="on-right" @click="exitTest" />
      <q-btn label="Späť na výber testu" class="on-right" to="/selector" />
    </div>

    <q-page-sticky position="top-right" :offset="[32, 32]">
      <q-btn label="Reset" color="warning" class="on-right" @click="reset" />

    </q-page-sticky>

    <result-component v-if="isShowResult" :test="test" :answers="selectedChoices" />

    <q-dialog v-model="isShowExitTestConfirmation" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="question_mark" color="primary" text-color="white" />
          <span class="q-ml-sm">Naozaj chcete ukončiť test bez vyhodnotenia?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Ukončiť" color="negative" @click="exitTestConfirmed" />
          <q-btn label="Pokračovať v teste" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref, watch } from 'vue';
import {
  getTest,
  clearAllAnswerFlags,
  getQuestionFromChoiceId,
} from '../data/data-layer';
import { computed } from 'vue';
import ResultComponent from '../components/ResultComponent.vue';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'TestingPage',
  components: { ResultComponent },
  setup () {
    const router = useRouter();
    const route = useRoute();

    const isShowResult = ref(false);
    const testId = route.params.id;
    const test = getTest(<string>testId);

    const probalom = false;
    onMounted(() => {
      if (probalom) {
        // TODO: remove after testing
        selectedChoices.value = ['1001', '2002'];
        checkAnswers();
        checkTest();
        // remove after testing
      }
    });

    const isShowExitTestConfirmation = ref(false);

    if (test === undefined) {
      throw new Error('Unable to load test with id:' + testId);
    }
    const randomizedQuestions = test.questions.sort(() => Math.random() - 0.5);
    const questions = ref(randomizedQuestions);
    const selectedChoices: Ref<string[]> = ref([]);

    const checkAnswers = () => {
      clearAllAnswerFlags(questions.value);

      selectedChoices.value.forEach((sc) => {
        const question = getQuestionFromChoiceId(sc, questions.value);
        if (question) {
          console.log('Question', question, ' has been answered.');
          question.answered = true;
        } else {
          console.error('Question for choiceId', sc, 'not found');
        }
      });
    };

    const hasAllAnswers = computed(() => {
      const answeredQuestions = questions.value.filter(
        (q) => q.answered === true
      );
      return answeredQuestions.length === questions.value.length;
    });

    // eslint - disable - next - line @typescript-eslint / no - unused - vars
    watch(selectedChoices, (val, oldval) => {
      checkAnswers();
    });

    const exitTest = () => {
      isShowExitTestConfirmation.value = true;
    };

    const exitTestConfirmed = () => {
      router.push('/selector');
    };

    const reset = () => {
      isShowResult.value = false;
      selectedChoices.value = [];
    };

    const checkTest = () => {
      isShowResult.value = true;
    };

    const toTestSelection = () => {
      //
    };

    return {
      test,
      questions,
      selectedChoices,
      hasAllAnswers,
      isShowResult,
      isShowExitTestConfirmation,
      exitTest,
      exitTestConfirmed,
      checkTest,
      reset,
      toTestSelection,
    };
  },
});
</script>

<style>
.disabled {
  opacity: 1 !important;
}
</style>