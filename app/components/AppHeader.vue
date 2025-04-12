<template>
  <Disclosure as="nav">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="w-full flex items-center justify-center pl-2 sm:items-stretch sm:justify-between sm:pl-0">
          <!-- Logo 区域 -->
          <div class="flex flex-1 shrink-0 items-center sm:flex-none">
            <ULink to="/">
              <img
                class="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              >
            </ULink>
          </div>
          <!-- 导航区域 -->
          <div class="sm:ml-6 sm:flex sm:justify-between">
            <template v-if="!session.data">
              <!-- 登录/注册按钮区域 -->
              <div class="space-x-2 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <UButton
                  color="neutral"
                  variant="ghost"
                  class="cursor-pointer"
                  to="/auth/login"
                >
                  Log in
                </UButton>
                <UButton
                  color="neutral"
                  variant="subtle"
                  trailing-icon="i-lucide-arrow-right"
                  class="cursor-pointer"
                  to="/auth/signup"
                >
                  Sign up
                </UButton>
              </div>
            </template>
            <template v-else>
              <UserDropdown />
            </template>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure } from '@headlessui/vue'

const session = authClient.useSession()
</script>

<style scoped>

</style>
