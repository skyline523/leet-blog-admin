<template>
  <div class="card">
    <div class="card_wrapper">
      <v-card class="bg-background rounded-xl py-4 px-2" elevation="16">
        <v-card-title class="d-flex flex-column justify-center mb-6">
          <div class="text-h6">Sign in</div>
          <div class="text-subtitle-1">Don't have an account?  <a class="text-primary">Register</a></div>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" fast-fail @submit.prevent>
            <v-text-field
              v-model="email"
              class="rounded-lg mb-1"
              clearable
              :rules="emailRules"
              label="Email Address"
              type="email"
              variant="solo"
              elevation="0"
            ></v-text-field>

            <v-text-field
              v-model="password"
              class="rounded-lg mb-1"
              clearable
              :rules="passwordRules"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              variant="solo"
              elevation="0"
              @click:append-inner="showPassword = !showPassword"
            ></v-text-field>
            <v-btn
              block
              :loading="isLoading"
              :disabled="isLoading"
              size="large"
              class="mt-4 text-none rounded-lg"
              color="primary"
              @click="handleSubmit"
              >SIGN IN</v-btn
            >
          </v-form>
        </v-card-text>

        <v-card-text class="d-flex justify-center py-2">
          <p class="text-primary">Forget Password?</p>
        </v-card-text>
      </v-card>

      <div class="notify bg-info d-flex align-center rounded-lg text-subtitle-2 mt-6 px-3 py-2">
        <v-icon icon="mdi-alert-circle-outline" class="text-error mr-3"></v-icon>
        <p>You can use <span class="text-primary">leet@leet.com</span> and password <span class="text-primary">123456</span>!</p>
      </div>

      <v-card class="mt-6 rounded-xl bg-background" elevation="2">
        <v-card-text class="d-flex flex-column align-center mt-4">
          <p class="text-caption mb-4">使用 OAuth 登录(暂不可用)</p>
          <div class="d-flex justify-center">
            <v-btn icon="mdi-google" variant="text" class="mx-2" />
            <v-btn icon="mdi-twitter" variant="text" class="mx-2" />
            <v-btn icon="mdi-wechat" variant="text" class="mx-2" />
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup name="Login">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const router = useRouter();

const isLoading = ref(false);
const form = ref();
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const emailRules = reactive([(value) => !!value || '邮箱不能为空']);
const passwordRules = reactive([(value) => !!value || '密码不能为空']);

const handleSubmit = async () => {
  isLoading.value = true;
  const { valid } = await form.value.validate();

  if (valid) {
    const payload = {
      email: email.value,
      password: password.value,
    };
    await userStore.login(payload).then(() => {
      router.replace('/dashboard');
    });

    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 560px;
  height: 650px;

  &_wrapper {
    width: 100%;
    height: 100%;
    padding: 16px;
  }
}
.notify {
  height: 50px;
}
:deep(.v-field) {
  border-radius: 8px;
}
</style>
