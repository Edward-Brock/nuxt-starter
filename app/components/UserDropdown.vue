<template>
  <UDropdownMenu
    arrow
    :items="items"
    :ui="{
      content: 'w-48',
    }"
  >
    <UButton
      :avatar="{
        src: session.data?.user.image as string,
        alt: session.data?.user.name,
      }"
      size="xl"
      color="neutral"
      variant="link"
    >
      {{ session.data?.user.name }}
    </UButton>
  </UDropdownMenu>
</template>

<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui'
import { authClient } from '@/utils/auth-client'

const toast = useToast()
const router = useRouter()
const session = authClient.useSession()
const items = ref<DropdownMenuItem[]>([
  [
    {
      label: '仪表盘',
      icon: 'i-lucide-gauge',
    },
    {
      label: '个人信息',
      icon: 'i-lucide-user',
      to: '/setting/profile',
    },
    {
      label: '设置',
      icon: 'i-lucide-cog',
    },
  ],
  [
    {
      label: '退出账号',
      icon: 'i-lucide-log-out',
      onSelect() {
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              toast.add({
                icon: 'i-lucide-shield-check',
                title: '退出成功',
                color: 'success',
              })
              router.push('/')
            },
          },
        })
      },
    },
  ],
])
</script>

<style>

</style>
