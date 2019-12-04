<style>
.wrap {
	position: fixed;
	left: 50%;
	top: 50%;
	background: rgba(0, 0, 0, 0.35);
	padding: 5px 10px;
	height: 30px;
	line-height: 30px;
	border-radius: 1px;
	transform: translate(-50%, -50%);
	min-width: 100px;
	border-width: 1px;
	border-style: solid;
	text-align: center;
}

.wrap.success {
	color: #33c15d;
	border-color: #33c15d;
	background-color: #ebfaef;
}

.wrap.error {
	color: #f4282d;
	border-color: #f4282d;
	background-color: #f8ecec;
}
</style>
<template>
	<div class="wrap" v-show="text" :class="type" v-text="text"></div>
</template>
<script>
let t;
export default {
	data() {
		return {
			type: "success",
			text: ""
		};
	},
	methods: {
		success(text) {
			this.type = "success";
			this.text = text;
			clearTimeout(t);
			t = setTimeout(() => {
				this.text = "";
			}, 2000);
		},
		error(text) {
			this.type = "error";
			this.text = text;
			clearTimeout(t);
			t = setTimeout(() => {
				this.text = "";
			}, 2000);
		}
	}
};
</script>