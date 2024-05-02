<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white" reveal>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square @click="goHome">
            <img src="/public/icons/testing (3).png" />
          </q-avatar>
          Ročníkový projekt | Alex Csibrei 2024
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const router = useRouter();
    const $q = useQuasar();

    const goHome = () => {
      const dialog = $q.dialog({
        title: 'Potvrďte',
        message: 'Naozaj prejsť na hlavnú stránku?',
        cancel: true,
      });
      dialog.onOk(() => {
        router.push('/');
      });

      dialog.onCancel(() => {
        dialog.hide();
      });
    };

    return {
      goHome,
    };
  },
});
</script>
