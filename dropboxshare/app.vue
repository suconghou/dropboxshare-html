<style>
[v-cloak] {
	display: none;
}
.wrapper {
	width: 90%;
	margin: 20px auto;
}

@media screen and (max-width: 800px) {
	.wrapper {
		width: 99%;
	}
}

.file-lists .header {
	background: rgb(245, 249, 252);
	height: 40px;
	line-height: 40px;
	border-top: 1px solid #d5e7f3;
}
.file-lists .header .name {
	position: relative;
	left: -45px;
}
.nav-bar .nav {
	display: block;
	margin: 0;
	padding: 5px 0 10px 0;
	height: 30px;
	color: rgb(77, 164, 230);
}
.nav li {
	display: inline-block;
	cursor: pointer;
}
.nav li::after {
	content: " ";
	width: 7px;
	height: 7px;
	display: inline-block;
	border-top: 2px solid #aaa;
	border-right: 2px solid #aaa;
	transform: rotate(45deg);
	margin: 0 9px 1px 4px;
}

.loading-bg {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
}

.loading {
	width: 150px;
	height: 15px;
	margin: 0 auto;
}
.loading span {
	display: inline-block;
	width: 15px;
	height: 100%;
	margin-right: 5px;
	background: lightgreen;
	transform-origin: right bottom;
	animation: load 1s ease infinite;
}
.loading span:last-child {
	margin-right: 0px;
}
@keyframes load {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: rotate(90deg);
	}
}
.loading span:nth-child(1) {
	animation-delay: 0.13s;
}
.loading span:nth-child(2) {
	animation-delay: 0.26s;
}
.loading span:nth-child(3) {
	animation-delay: 0.39s;
}
.loading span:nth-child(4) {
	animation-delay: 0.52s;
}
.loading span:nth-child(5) {
	animation-delay: 0.65s;
}
</style>
<template>
	<div class="wrapper" v-cloak>
		<div v-if="loading" class="loading-bg">
			<div class="loading">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<toast ref="toast" />
		<div class="nav-bar">
			<ul class="nav">
				<li v-for="(nav,i) in navs" :key="i" v-text="nav.name" @click="navto(nav.target)"></li>
			</ul>
		</div>
		<div class="file-lists">
			<div class="file-item header">
				<div class="typeicon"></div>
				<div class="name">文件 ({{totalSizeHuman}} 共{{list.total}}个)</div>
				<div class="size">大小</div>
				<div class="date">修改时间</div>
			</div>
			<file-item v-for="item in list.list" :key="item.path" :item="item" @click.native="goto(item)" />
		</div>
	</div>
</template>
<script>
import toast from "./toast";
import fileItem from "./fileItem";
import { getList } from "./request";

import { byteFormat, loadScript } from "./util";

loadScript(
	"https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs@master/qrcode.min.js"
).then(res => {
	document.head.removeChild(res.currentTarget);
});

export default {
	data() {
		return {
			loading: true,
			list: {
				list: [],
				total: 0
			},
			path: ""
		};
	},
	components: {
		fileItem,
		toast
	},
	computed: {
		totalSize() {
			let s = 0;
			for (let item of this.list.list) {
				s += item.size;
			}
			return s;
		},
		totalSizeHuman() {
			return byteFormat(this.totalSize);
		},
		navs() {
			if (this.path == "/" || !this.path) {
				return [{ name: "所有文件", target: "/" }];
			}
			let arr = [];
			let targets = [];
			this.path.split("/").forEach(item => {
				let name = item;
				if (item == "/" || !item) {
					name = "所有文件";
				}
				targets.push(item);
				let target = targets.join("/");
				if (target == "") {
					target = "/";
				}
				arr.push({ name, target });
			});
			return arr;
		}
	},
	created() {
		window.addEventListener("hashchange", this.hashChange, false);
		if (!location.hash) {
			location.hash = "#/";
		} else {
			this.hashChange();
		}
	},

	methods: {
		toast(text) {
			this.$refs.toast.success(text);
		},
		hashChange() {
			const hash = location.hash;
			this.load(hash.substring(1));
		},
		async load(path) {
			try {
				this.loading = true;
				const data = await getList(path);
				this.list = data;
				this.path = path;
				this.loading = false;
			} catch (e) {
				this.loading = false;
				this.$refs.toast.error(e.message);
			}
		},
		goto(item) {
			if (item.isdir) {
				const path = item.path.substr(6);
				location.hash = `#${path}`;
			} else {
				window.open(item.path);
			}
		},
		navto(path) {
			location.hash = `#${path}`;
		}
	}
};
</script>