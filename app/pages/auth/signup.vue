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
        :schema="schema"
        :state="state"
        :disabled="isSignedUp"
        class="space-y-6"
        @submit="onSubmit"
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
          block
          loading-auto
          class="w-full font-bold cursor-pointer"
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
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'auth-layout',
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `注册 - ${titleChunk}` : '注册'
  },
})

const schema = v.object({
  email: v.pipe(
    v.string('电子邮件必须是字符串'),
    v.trim(),
    v.nonEmpty('请输入电子邮箱'),
    v.email('请输入有效的电子邮箱'),
  ),
  password: v.pipe(
    v.string('密码必须是字符串'),
    v.trim(),
    v.nonEmpty('请输入你的密码'),
    v.minLength(8, '密码最少 8 个字符'),
    v.maxLength(32, '密码最多 32 个字符'),
  ),
  name: v.pipe(
    v.string('昵称必须是字符串'),
    v.trim(),
    v.nonEmpty('请输入你的昵称'),
    v.minLength(1, '昵称不能为空'),
  ),
})

type Schema = v.InferOutput<typeof schema>

const toast = useToast()
const router = useRouter()
const isSignedUp = ref(false) // 注册成功后禁用按钮
const state = reactive({
  email: '',
  password: '',
  name: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // 用户注册 API 调用
  await authClient.signUp.email({
    email: event.data.email,
    password: event.data.password,
    name: event.data.name,
  }, {
    onSuccess: () => {
      isSignedUp.value = true
      toast.add({
        icon: 'i-lucide-shield-check',
        title: '注册成功',
        color: 'success',
      })
      router.push('/')
    },
    onError: (ctx) => {
      toast.add({
        icon: 'i-lucide-shield-x',
        title: '注册失败',
        description: ctx.error.message,
        color: 'error',
      })
    },
  })
}
</script>

<style scoped>

</style>
