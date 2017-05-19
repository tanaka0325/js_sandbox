import _ from 'lodash'

const data = {
  kjdlfjaklsf: { id: 1, name: 'h' },
  dsfaf: { id: 1, name: 'h' },
  dasfsaf: { id: 1, name: 'h' },
  dfffff: { id: 1, name: 'h' }
}

const todos = _.map(data, (val, uid) => {
  return { ...val, uid }
})

console.log(todos)

const todos2 = Object.keys(data).map(k => {
  return { ...data[k], uid: k }
})

console.log(todos2)
