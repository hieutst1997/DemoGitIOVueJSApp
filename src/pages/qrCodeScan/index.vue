<template>
	<div>
		<QrcodeStream @decode="onDecode" :worker="worker"></QrcodeStream>
		<div v-if="scannedData">Scanned QR Code: {{ scannedData }}</div>

        demk
	</div>
</template>

<script setup></script>

<script>
import { defineComponent, ref } from "vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'


export default defineComponent({
	name: "QrCodeScan",
	components: {
		QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
	},
	setup() {
		const scannedData = ref(null);
		const worker = null;

		const onDecode = (result) => {
			if (result) {
				scannedData.value = result;
			}
		};
		return {
			onDecode,
            scannedData,
            worker
		};
	},
});
</script>
<style lang="scss" scoped></style>
