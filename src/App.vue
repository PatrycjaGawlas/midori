<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {Navbar}
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

@font-face {
	font-family: 'Montserrat';
	src: local("Montserrat"),
    url('./fonts/Montserrat-Light.ttf') format('truetype');
	font-weight: 200;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local("Montserrat"),
    url('./fonts/Montserrat-Regular.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local("Montserrat"),
		url('./fonts/Montserrat-SemiBold.ttf') format('truetype');
	font-weight: 600;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local("Montserrat"),
    url('./fonts/Montserrat-Bold.ttf') format('truetype');
	font-weight: 700;
	font-style: normal;
}

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-thin-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-thin-webfont.woff') format('woff');
// 	font-weight: 100;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-extralight-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-extralight-webfont.woff') format('woff');
// 	font-weight: 200;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-light-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-light-webfont.woff') format('woff');
// 	font-weight: 300;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-regular-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-regular-webfont.woff') format('woff');
// 	font-weight: 400; // normal
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-medium-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-medium-webfont.woff') format('woff');
// 	font-weight: 500;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-semibold-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-semibold-webfont.woff') format('woff');
// 	font-weight: 600;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-bold-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-bold-webfont.woff') format('woff');
// 	font-weight: 700;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-extrabold-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-extrabold-webfont.woff') format('woff');
// 	font-weight: 800;
// 	font-style: normal;
// }

// @font-face {
// 	font-family: 'Montserrat';
// 	src: url('./fonts/montserrat-black-webfont.woff2') format('woff2'),
// 		url('./fonts/montserrat-black-webfont.woff') format('woff');
// 	font-weight: 900;
// 	font-style: normal;
// }
</style>
