<template>
  <main class="flex min-h-svh flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <header class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      >
      <h2 class="mt-10 text-center text-2xl/9 font-bold">
        注册你的账号
      </h2>
    </header>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <UForm
        :state="state"
        :disabled="isSignedUp"
        class="space-y-6"
      >
        <UFormField
          label="昵称"
          name="name"
          required
          size="lg"
          class="block text-sm/6 font-medium text-gray-900"
        >
          <UInput
            v-model="state.name"
            type="text"
            autocomplete="name"
            placeholder="输入昵称"
            icon="i-lucide-user-round"
            class="block w-full text-base text-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </UFormField>

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

        <UButton
          color="neutral"
          type="submit"
          size="lg"
          :loading="isSubmitting"
          :disabled="isLoggedIn"
          class="block w-full font-bold"
        >
          注册
        </UButton>
      </UForm>
    </div>

    <footer class="mt-10">
      <div class="space-y-4 text-center text-sm/6 text-gray-500">
        已经有账号？
        <UButton
          color="neutral"
          variant="link"
          trailing-icon="i-lucide-arrow-right"
          size="lg"
          class="font-semibold"
          to="/auth/login"
        >
          登录账号
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
    return titleChunk ? `注册 - ${titleChunk}` : '注册'
  },
})

const isSubmitting = ref(false)
const isSignedUp = ref(false)
const state = reactive({
  email: '',
  password: '',
  name: '',
})
</script>

<style scoped>

</style>
