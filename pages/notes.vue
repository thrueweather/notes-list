<template>
	<div class="notes">
		<div class="notes-wrapp">
			<div class="nav">
				<div>
					<menu-icon class="custom-class"></menu-icon>
				</div>
				<div><p>Notes List</p></div>
				<div></div>
			</div>
			<br>
			<div class="list">
				<ul>
					<li
						v-for="(note, index) in notes"
						:index="index"
						:key="note.id"
						:note="note">
						<input type="radio"
						:checked="note.done"
						@change="TOGGLE(note)">
						<p :class="{ done: note.done }">{{ note.text }}</p>
						<button
							class="trash-def"
							:class="{ trash: note.trash }"
							@click="notes.splice(index, 1)">
							<trash-2-icon class="custom-class"></trash-2-icon>
						</button>
					</li>
				</ul> 
			</div>
			<div class="input" v-show="input">
				<input 
					autofocus
					@keyup.enter="addNotes" 
					type="text" 
					placeholder="What do you want to record ?">
			</div>
			<br>
			<div style="text-align: center;">
				<button @click="input = !input">
					<span style="font-size: 16px; margin-right: 5px">+</span>
					New tast
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { MenuIcon, Trash2Icon } from 'vue-feather-icons'
import { mapMutations } from 'vuex'
export default {
	name: 'Notes',
	data: () => ({
		input: false
	}),
	computed: {
		notes() {
			return this.$store.state.notes
		}
	},
	watch: {
		notes: {
			handler: 'save'
		}
	},
	methods: {
		addNotes(e) {
			let text = e.target.value
			if(text.trim() !== '') {
				this.$store.commit('ADD_NOTES', { text })
			}
			e.target.value = ''
		},
		save () {
	      this.$store.dispatch('saveNotes')
	    },
		...mapMutations([
			'TOGGLE'
		])
	},
	components: { MenuIcon, Trash2Icon }
}
</script>

<style scoped>
	.notes {
		background-color: #e3f1ff;
		display: flex;
		align-items: center;
		height: 100vh;
	}
	.notes-wrapp {
		width: 30%;
		margin: auto;
		position: relative;
	}
	.nav {
		background-color: purple;
		color: white;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav p {
		margin: 0;
		font-weight: 600;
		margin-right: 30px;
	}
	.list {
		background-color: white;
		padding: 40px 20px;
	}
	.list ul li {
		list-style: none;
		padding: 4px 0;
	}
	input[type='radio'] {
		outline: none;
		cursor: pointer;
	}
	.list ul li p {
		display: inline;
		margin-left: 20px;
		color: #ada8a8;
		font-size: 18px;
		font-weight: 500;
	}
	.trash-def {
		border: none;
		outline: none;
		background: none;
		padding: 0;
		border-radius: 0;
		float: right;
		color: #ada8a8;
		transition: .3s;
		display: none;
	}
	.trash-def:hover {
		background: white;
		color: black;
	}
	.input {
		background-color: white;
		text-align: center;
	}
	.input input {
		padding: 10px 12px;
		outline: none;
		border: 1px solid #eee;	
		border-radius: 20px;
	}
	.done {
	  text-decoration: line-through;
	}
	.trash {
		display: block;
	}
	button {
		border: none;
		background-color: purple;
		color: white;
		border-radius: 20px;
		padding: 14px 24px;
		transition: .3s;
		font-weight: 600;
		cursor: pointer;
	}
	button:hover {
		background-color: #bc05bc
	}
</style>