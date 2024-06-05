import { watch } from "vue"
import { useRoute } from "vue-router"
import routes from "@/router/routes"
const route = useRoute()
watch(route, (i) => {
  console.log(i.fullPath,routes)
})