<style>
.file-item .icon,
.file-item .name,
.file-item .date,
.file-item .size {
	float: left;
}
.file-item {
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	cursor: pointer;
	overflow: hidden;
	color: #666;
	border-bottom: 1px solid #d5e7f3;
}
.file-item:hover {
	background: rgb(245, 249, 252);
}
.file-item:hover .ctrl {
	display: block;
}

.file-item .icon {
	width: 30px;
	height: 30px;
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 20px;
}

.file-item .name {
	width: 55%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.file-item .size {
	width: 10%;
}
.file-item .date {
	width: 15%;
}
.file-item .ctrl {
	float: right;
	width: 70px;
	font-size: 14px;
	display: none;
}
</style>
<template>
	<div class="file-item">
		<div class="icon" v-if="item.isdir">
			<svg
				t="1574941112104"
				class="icon"
				viewBox="0 0 1194 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				p-id="2627"
				width="256"
				height="256"
			>
				<path
					d="M1145.560315 245.47721H0V81.825737a81.825737 81.825737 0 0 1 81.825737-81.825737h286.390078l163.651474 163.651474H1063.734578a81.825737 81.825737 0 0 1 81.825737 81.825736z"
					p-id="2628"
				/>
				<path
					d="M0 327.302947m81.825737 0l981.908841 0q81.825737 0 81.825737 81.825737l0 490.95442q0 81.825737-81.825737 81.825737l-981.908841 0q-81.825737 0-81.825737-81.825737l0-490.95442q0-81.825737 81.825737-81.825737Z"
					p-id="2629"
				/>
			</svg>
		</div>
		<template v-else>
			<div class="icon" v-if="image">
				<svg
					t="1574941260911"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="3418"
					width="256"
					height="256"
				>
					<path
						d="M0 85.344v853.344h1024V85.344H0z m938.656 85.312v452.256l-128-128L640 665.568l-298.656-298.656-256 256V170.656h853.344zM85.344 853.344V742.4l256-256L640 785.056l170.656-170.656 128 128v110.944H85.312z"
						p-id="3419"
					/>
					<path
						d="M853.344 341.344a85.344 85.344 0 1 1-170.688 0 85.344 85.344 0 0 1 170.688 0z"
						p-id="3420"
					/>
				</svg>
			</div>
			<div class="icon" v-else-if="tar">
				<svg
					t="1574941527122"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="6113"
					width="256"
					height="256"
				>
					<path
						d="M640 42.7H512V128h85.3v85.3H512v85.3h85.3V384H512v85.3h85.3v85.3H512v-85.3h-85.3V384H512v-85.3h-85.3v-85.3H512V128h-85.3V42.7h-256c-23.6 0-42.7 19.1-42.7 42.7v853.3c0 23.6 19.1 42.7 42.7 42.7h682.7c23.6 0 42.7-19.1 42.7-42.7v-640C796 198.7 740 142.6 640 42.7zM597.3 896H426.7V597.3h170.7V896zM640 298.7V128l170.7 170.7H640z"
						p-id="6114"
					/>
				</svg>
			</div>
			<div class="icon" v-else-if="doc">
				<svg
					t="1574941280914"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="4224"
					width="256"
					height="256"
				>
					<path
						d="M537.152 414.72h-288.64a29.44 29.44 0 0 1-26.24-30.72 29.44 29.44 0 0 1 26.24-32h288.64a29.44 29.44 0 0 1 26.24 32 29.44 29.44 0 0 1-26.24 30.72z m209.92 165.76h-498.56a32.64 32.64 0 0 1 0-64h498.56a32.64 32.64 0 0 1 0 64z m0 165.76h-498.56a32.64 32.64 0 0 1 0-64h498.56a32.64 32.64 0 0 1 0 64z"
						fill="#333333"
						p-id="4225"
					/>
					<path
						d="M192.832 0a128 128 0 0 0-128 128v768a128 128 0 0 0 128 128h640a128 128 0 0 0 128-128l7.04-670.72L748.992 0h-556.16z m512 64l192 192h-160.64a31.36 31.36 0 0 1-31.36-31.36V64z m128 896h-640a64 64 0 0 1-64-64V128a64 64 0 0 1 64-64h448v192a64 64 0 0 0 64 64h192v576a64 64 0 0 1-64 64z"
						fill="#333333"
						p-id="4226"
					/>
				</svg>
			</div>
			<div class="icon" v-else-if="media">
				<svg
					t="1574941302252"
					class="icon"
					viewBox="0 0 1073 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="4966"
					width="256"
					height="256"
				>
					<path
						d="M881.784845 0H191.570683A191.697888 191.697888 0 0 0 0 191.570683v640.858634A191.697888 191.697888 0 0 0 191.570683 1024h690.214162a191.825093 191.825093 0 0 0 191.570683-191.570683V191.570683A191.825093 191.825093 0 0 0 881.784845 0z m24.677764 333.785839h79.503105V394.335404h-79.503105a43.631304 43.631304 0 1 0 0 87.262608h79.503105v60.549566h-79.503105a43.758509 43.758509 0 1 0 0 87.389813h79.503105v60.549566h-79.503105a43.631304 43.631304 0 1 0 0 87.262608h79.503105v54.952547a104.308075 104.308075 0 0 1-104.180869 104.308074H191.570683a104.43528 104.43528 0 0 1-104.308074-104.308074v-54.825342h79.63031a43.631304 43.631304 0 1 0 0-87.262609H87.262609V629.664596h79.63031a43.758509 43.758509 0 0 0 0-87.389813H87.262609v-60.549566h79.63031a43.631304 43.631304 0 1 0 0-87.262608H87.262609v-60.67677h79.63031a43.631304 43.631304 0 1 0 0-87.262609H87.262609v-54.952547a104.43528 104.43528 0 0 1 104.308074-104.308074h690.214162a104.308075 104.308075 0 0 1 104.180869 104.308074v54.952547h-79.503105a43.631304 43.631304 0 1 0 0 87.262609z"
						fill="#4D4D4D"
						p-id="4967"
					/>
					<path
						d="M718.199255 437.076273l-233.929938-152.645962a75.559752 75.559752 0 0 0-78.103851-4.579379 88.280248 88.280248 0 0 0-43.631305 78.994285v305.291926a89.043478 89.043478 0 0 0 44.52174 79.63031 73.524472 73.524472 0 0 0 35.617391 9.158758 78.994286 78.994286 0 0 0 42.995279-12.720497l231.894659-152.645962a89.933913 89.933913 0 0 0 40.19677-76.322982 87.008199 87.008199 0 0 0-39.560745-74.160497z m-48.337889 73.906087a7.250683 7.250683 0 0 1 0 2.925715l-220.064596 144.504844v-292.571428l219.937391 143.86882a3.180124 3.180124 0 0 1 0.127205 1.272049z"
						fill="#4D4D4D"
						p-id="4968"
					/>
				</svg>
			</div>
			<div class="icon" v-else>
				<svg
					t="1574941328714"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="5790"
					width="256"
					height="256"
				>
					<path
						d="M645.12 0H194.56C112.64 0 51.2 66.56 51.2 143.36v737.28C51.2 957.44 112.64 1024 194.56 1024h634.88c76.8 0 143.36-66.56 143.36-143.36V332.8L645.12 0z m20.48 168.96L803.84 307.2H665.6V168.96z m204.8 711.68c0 20.48-15.36 40.96-40.96 40.96H194.56c-25.6 0-40.96-20.48-40.96-40.96V143.36c0-20.48 15.36-40.96 40.96-40.96H563.2v215.04c0 51.2 40.96 92.16 92.16 92.16H870.4v471.04z"
						p-id="5791"
					/>
				</svg>
			</div>
		</template>
		<div class="name">{{item.name}}</div>
		<div class="size" v-show="!item.isdir">{{item.size | format}}</div>
		<div class="date" v-show="!item.isdir">{{item.mtime | date}}</div>
		<div class="ctrl" v-if="!item.isdir">
			<span @click.stop="copy(item)">复制地址</span>
		</div>
	</div>
</template>
<script>
import { byteFormat, dateFormat } from "./util";

export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data() {
		return {};
	},
	computed: {
		ext() {
			return this.item.name
				.split(".")
				.pop()
				.toLowerCase();
		},
		image() {
			return ["png", "jpg", "gif", "jpeg"].includes(this.ext);
		},
		media() {
			return ["mp3", "mp4", "flv", "mkv"].includes(this.ext);
		},
		tar() {
			return ["rar", "zip", "xz", "gz"].includes(this.ext);
		},
		doc() {
			return [
				"doc",
				"pdf",
				"ppt",
				"xls",
				"docx",
				"pptx",
				"xlsx"
			].includes(this.ext);
		}
	},
	filters: {
		format(s) {
			return byteFormat(s);
		},
		date(s) {
			if (s > 0) {
				return dateFormat(s * 1e3, "YYYY/MM/DD HH:mm:ss");
			}
		}
	},
	methods: {
		copy(item) {
			console.info(item);
		}
	}
};
</script>