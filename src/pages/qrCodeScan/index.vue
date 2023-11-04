<template>
	<div>
		<StreamBarcodeReader
			@decode="onDecode"
			@loaded="onLoaded"
		></StreamBarcodeReader>
		<div>Scanned QR Code: {{ scannedData }}</div>

		demk
	</div>
</template>

<script setup></script>

<script>
import { defineComponent, ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";


export default defineComponent({
	name: "QrCodeScan",
	components: {
		StreamBarcodeReader,
	},
	setup() {
		const scannedData = ref(null);
		const worker = null;

		fucntion onDecode(text) {
        	console.log(`Decode text from QR code is ${text}`)
			scannedData.value = text;
		},

		fucntion onLoaded() {
			console.log(`Ready to start scanning barcodes`)
		}
		return {
			onDecode,
            onLoaded,
			scannedData
		};
	},
});
</script>
<style lang="scss" scoped></style>
