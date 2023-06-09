export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const addEntry = (state, payload) => {
  state.entries = [payload, ...state.entries]
}

export const updateEntry = (state, entry) => {
  const idx = state.entries.map(e => e.id).indexOf(entry.id)
  state.entries[idx] = entry
}

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter(e => e.id !== id)
}

export const clearEntries = (state) => {
  state.entries = []
}