<template>
	<div class="notes">
		<div class="notes-wrapp">
			<div class="nav">
				<div>
					<menu-icon class="custom-class"></menu-icon>
				</div>
				<div><p>Notes List</p></div>
				<div>{{ length }}</div>
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
			<div class="input">
				<input 
					v-model="text"
					autofocus
					@keyup.enter="addNotes" 
					type="text" 
					placeholder="What do you want to record ?">
			</div>
			<br>
			<div style="text-align: center;">
				<button @click="addNotes">
					<span style="font-size: 16px; margin-right: 5px">+</span>
					New tast
				</button>
			</div>
			<div>
				<h3 @click="allNotes">
					<list-icon class="custom-class"></list-icon>
				</h3>
				<h3 @click="completed">
					<check-icon class="custom-class"></check-icon>
				</h3>
				<h3 @click="allClear" style="cursor: pointer;">
					<trash-2-icon class="custom-class"></trash-2-icon>
				</h3>
			</div>
		</div>
	</div>
</template>

<script>
import { MenuIcon, Trash2Icon, CheckIcon, ListIcon } from 'vue-feather-icons'
import { mapMutations } from 'vuex'
export default {
	name: 'Notes',
	data: () => ({
		text: ''
	}),
	computed: {
		notes() {
			return this.$store.state.notes
		},
		length() {
			if (this.$store.state.notes != 0) {
				return this.$store.state.notes.length
			}
		}
	},
	methods: {
		addNotes() {
			if(this.text.trim() !== '') {
				this.$store.commit('ADD_NOTES', { 
					text: this.text 
				})
			}
			this.text = ''
		},
		completed() {
			this.$store.commit('COMPLETED')
		},
		allNotes() {
			this.$store.commit('ALL_NOTES')
		},
		allClear() {
			this.$store.commit('ALL_CLEAR')
		},
		save () {
	    	this.$store.dispatch('saveNotes')
	    },
		...mapMutations([
			'TOGGLE'
		])
	},
	watch: {
		notes: {
			handler: 'save'
		}
	},
	components: { MenuIcon, Trash2Icon, CheckIcon, ListIcon }
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
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav p {
		margin: 0;
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
	.custom-class {
		cursor: pointer;
	}
	button {
		border: none;
		background-color: purple;
		color: white;
		border-radius: 20px;
		padding: 14px 24px;
		transition: .3s;
		font-weight: 600;
		outline: none;
		cursor: pointer;
	}
	button:hover {
		background-color: #bc05bc
	}
	@media only screen and (max-width : 991px) {
	  .notes-wrapp {
	    width: 80%;
	  }
	}
	@media only screen and (max-width : 480px) {
	  .list ul {
	  	padding: 0;
	  }
	  .list ul li p {
	  	font-size: 14px;
	  }
	}
</style>