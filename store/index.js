import Vue from 'vue' 
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: { 
		notes: []
	},
	mutations: {
		ADD_NOTES (state, { text }) {
			state.notes.push({
				text,
				done: false,
				trash: false
			})
		},
		TOGGLE (state, notes) {
			notes.done = !notes.done,
			notes.trash = !notes.trash
		},
		ALL_NOTES (state, done) {
			state.notes.forEach((note) => {
				note.done = true
				note.trash = true
			})
		},
		ALL_CLEAR (state, notes) {
			let removed = state.notes = []
		},
		COMPLETED (state, note) {
			state.notes.sort(note => note.done !== false)
		},
		SET_NOTES (state, notes) {
			state.notes = notes
		}
	},
	actions: {
		addNotes({ commit }, notes) {
			commit('ADD_NOTES', notes)
		},
		allNotes({ commit }, note) {
			commit('ALL_NOTES', note)
		},
		allClear({ commit }, notes) {
			commit('ALL_CLEAR', notes)
		},
		completed({ commit }, note) {
			commit('COMPLETED', note)
		},
		saveNotes ({ state }) {
	      axios.put('/api/notes', { notes: state.notes })
	    },
	    nuxtServerInit ({ commit }, { req }) {
	      commit('SET_NOTES', req.session ? (req.session.notes || []) : [])
	    }
	}
}); 

export default store;