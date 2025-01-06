<script setup lang="ts">
definePageMeta({
  layout: 'login',
})
useHead({
  title: 'Login',
})

const router = useRouter()
  const email = ref('')
  const password = ref('')
  const remember = ref(false)
  const loading = ref(false)
  
  const handleLogin = async () => {
    try {
      loading.value = true
      // Add your login logic here
      // Example:
      // await login({ email: email.value, password: password.value })
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      loading.value = false
    }
  }

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle class="text-2xl font-bold text-center">CMS Login</CardTitle>
        <CardDescription class="text-center">
          Enter your credentials to access the dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input 
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div class="space-y-2">
            <Label for="password">Password</Label>
            <Input 
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <Checkbox id="remember" v-model="remember" />
              <Label for="remember" class="ml-2">Remember me</Label>
            </div>
            <NuxtLink to="/forgot-password" class="text-sm text-blue-600 hover:underline">
              Forgot password?
            </NuxtLink>
          </div>

          <!-- <Button type="submit" class="w-full">
            {{ loading ? 'Logging in...' : 'Login' }}
          </Button> -->
      
          <Button>Button</Button>
          
        </form>
      </CardContent>
    </Card>
  </div>
</template>
