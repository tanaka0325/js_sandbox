import DataStore from 'nedb'

let db = new DataStore({
  filename: './data.db',
  autoload: true
})

const doc = {
  id: 1,
  text: 'てすとてすとー'
}
const doc2 = {
  id: 2,
  text: 'testtest'
}

db.insert(doc)
db.insert(doc2)

db.find({}, (err, docs) => {
  if (err) { console.log(err) }

  console.log(docs)
})
