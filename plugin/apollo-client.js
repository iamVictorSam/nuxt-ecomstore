import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "localhost:3000/graphql/",
        // other configuration
      })

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)

})  