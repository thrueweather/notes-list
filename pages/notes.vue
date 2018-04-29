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
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, deleniti quidem suscipit voluptatem laboriosam est a amet et vero officiis error voluptainment.
			</div>
			<br>
			<div style="text-align: center;">
				<button>
					<span style="font-size: 16px; margin-right: 5px">+</span>
					New tast
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'
export default {
	name: 'Notes',
	data: () => ({

	}),
	components: {
		MenuIcon
	}
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