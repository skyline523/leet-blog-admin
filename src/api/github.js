import { createFetch } from '@vueuse/core'
import { useSnackbarStore } from '@/store/snackbar'

const snackbarStore = useSnackbarStore()

const ACCESS_KEY = import.meta.env.VITE_GITHUB_ACCESS_KEY

const useGithubApi = createFetch({
  baseUrl: 'https://api.github.com',
  options: {
    immediate: true,
    timeout: 10000,
    beforeFetch({ options }) {
      options.headers.Authorization = `Bearer ${ACCESS_KEY}`

      return { options }
    },
    afterFetch({ data, response }) {
      if (response.status !== 200) {
        snackbarStore.open({
          content: data.message,
          color: 'red'
        })
      }
      return { data, response }
    },
    onFetchError({ data, error }) {
      console.log(error)
      snackbarStore.open({
        content: error,
        color: 'red'
      })

      return { data, error }
    }
  }
})

// Get repo event for a user
export const getRepoEventApi = (username, repo) => {
  return useGithubApi(`/repos/${username}/${repo}/events`).json()
}

// Get public events for a user
export const getPublicEventsApi = (username) => {
  return useGithubApi('/users/' + username + '/events/public').json()
}

// Get public events for a network of repositories
export const getPublicEventsForNetworkApi = (username) => {
  return useGithubApi('/networks/' + username + '/events').json()
}
