import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: { 
		notes: []
	},
	mutations: {
		addNotes(state, { text }) {
			state.notes.push({
				text,
				done: false,
				trash: false
			})
		},
		toggle(state, notes) {
			notes.done = !notes.done,
			notes.trash = !notes.trash
		}
	}
});

export default store;