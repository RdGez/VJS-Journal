import journalApi from "../../../../api/journalApi"

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  const entries = []

  for(let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }

  commit('setEntries', entries)
}

export const addEntry = async ({ commit }, entry) => {
  const { date, text, picture } = entry
  const dataToSave = { date, text, picture }

  const { data } = await journalApi.post('/entries.json', { date, text, picture })
  dataToSave.id = data.name

  commit('addEntry', dataToSave)
  return dataToSave.id
}

export const updateEntry = async ({ commit }, entry) => {
  const { id, date, text, picture } = entry
  const { data } = await journalApi.put(`/entries/${id}.json`, { date, text, picture })

  commit('updateEntry', { id, ...data })
}

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`)
  commit('deleteEntry', id)
}

