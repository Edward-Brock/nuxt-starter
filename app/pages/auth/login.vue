<template>
  <main class="flex min-h-svh flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <header class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2 class="mt-10 text-center text-2xl/9 font-bold">
        登录你的账号
      </h2>
    </header>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <UForm
        :state="state"
        :disabled="isLoggedIn"
        class="space-y-6"
      >
        <UFormField
          label="电子邮箱"
          name="email"
          required
          size="lg"
          class="block text-sm/6 font-medium text-gray-900"
        >
          <UInput
            v-model="state.email"
            type="email"
            autocomplete="email"
            placeholder="输入电子邮箱"
            icon="i-lucide-mail"
            class="block w-full text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </UFormField>

        <UFormField
          label="密码"
          name="password"
          required
          size="lg"
          class="block text-sm/6 font-medium text-gray-900"
        >
          <UInput
            v-model="state.password"
            type="password"
            autocomplete="current-password"
            placeholder="输入密码"
            icon="i-lucide-lock"
            class="block w-full text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </UFormField>

        <UCheckbox
          v-model="state.rememberMe"
          color="neutral"
          label="在此设备上记住我"
          name="rememberMe"
        />

        <UButton
          color="neutral"
          type="submit"
          size="lg"
          :loading="isSubmitting"
          class="block w-full font-bold"
        >
          登录
        </UButton>
      </UForm>
    </div>

    <footer class="mt-10">
      <div class="space-y-4 text-center text-sm/6 text-gray-500">
        还没有账号？
        <UButton
          color="neutral"
          variant="link"
          trailing-icon="i-lucide-arrow-right"
          size="lg"
          class="font-semibold"
          to="/auth/signup"
        >
          注册账号
        </UButton>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth-layout',
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `登录 - ${titleChunk}` : '登录'
  },
})

const isSubmitting = ref(false)
const isLoggedIn = ref(false)
const state = reactive({
  email: '',
  password: '',
  rememberMe: true,
})
</script>

<style scoped>

</style>
