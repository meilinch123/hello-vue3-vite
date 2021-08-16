// https://github.com/anncwb/vite-plugin-mock
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: '嘻嘻嘻',
        },
      }
    },
  },
] as MockMethod[]
