/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01_ide-cpp/01/1.jpg",
    "revision": "d29e7e2fa8fbf2c08770970f302326c3"
  },
  {
    "url": "01_ide-cpp/01/2.jpg",
    "revision": "829f9234c1d84f2fdf4c8d76edff2700"
  },
  {
    "url": "01_ide-cpp/01/3.jpg",
    "revision": "1a20e2ddb7fde7e1fa49d3a646b32843"
  },
  {
    "url": "01_ide-cpp/01/4.jpg",
    "revision": "95aef042f3a7769b23a10bb7878e5605"
  },
  {
    "url": "01_ide-cpp/01/5.jpg",
    "revision": "2f815eb1961e95b11faa1debe48384ad"
  },
  {
    "url": "01_ide-cpp/01/6.jpg",
    "revision": "eede17e4d1f86f42a8b98651e022c0cc"
  },
  {
    "url": "02_ide-java/01/1.jpg",
    "revision": "baca5047f0e59418745cbb66a5214341"
  },
  {
    "url": "02_ide-java/01/2.jpg",
    "revision": "1de8b7afa336be719751196bec0d953f"
  },
  {
    "url": "02_ide-java/01/3.jpg",
    "revision": "2238d8af1ded3435be5ad62e65756d95"
  },
  {
    "url": "03_ide-jupyter/01_install_files/1.jpg",
    "revision": "9697344e96f2ac0172db7bbd16fe05fe"
  },
  {
    "url": "03_ide-jupyter/01_install_files/2.jpg",
    "revision": "813e541fab6a32ab35aa4ce8f6e55ddc"
  },
  {
    "url": "04_ide-go/01_install_files/1.jpg",
    "revision": "2454540129e9934ec64f861f6739ba67"
  },
  {
    "url": "04_ide-go/01_install_files/2.jpg",
    "revision": "2b4b6f0b944b538c8fe5eb6fd1d0af6e"
  },
  {
    "url": "05_ide-rust/01_install_files/1.jpg",
    "revision": "9192072b5dada7a0a46215d43d8793f8"
  },
  {
    "url": "05_ide-rust/01_install_files/2.jpg",
    "revision": "eb49cbabf2505a17421df3fd98d83603"
  },
  {
    "url": "05_ide-rust/01_install_files/3.jpg",
    "revision": "530641ec4e4e0ab926f3df3f9858edef"
  },
  {
    "url": "06_ide-python/01_install_files/1.jpg",
    "revision": "25be851ad38e0e637cd4c7385ec01cf5"
  },
  {
    "url": "06_ide-python/01_install_files/2.jpg",
    "revision": "5c80c695a5e792faeb1f1ef2999af291"
  },
  {
    "url": "07_ide-markdown/01_install_files/1.jpg",
    "revision": "92d9ffc93ea47d85a6cd2790211945ad"
  },
  {
    "url": "08_ide-rest-client/01_install_files/1.jpg",
    "revision": "7f865e3560667eee652603b79c4114b5"
  },
  {
    "url": "08_ide-rest-client/01_install_files/2.jpg",
    "revision": "d1fe96f02cae799772bd75c199bd51d3"
  },
  {
    "url": "09_ide-vue/01_install_files/1.jpg",
    "revision": "8046d2ea2d5e5240accdd14b97bcf6b8"
  },
  {
    "url": "09_ide-vue/01_install_files/2.jpg",
    "revision": "535eefa07df9cb7cabad5f3041621b62"
  },
  {
    "url": "10_ide-photos/01_install_files/1.jpg",
    "revision": "ecc0ae0a8e195c865c86a18699b722fa"
  },
  {
    "url": "10_ide-photos/01_install_files/2.jpg",
    "revision": "afc9639a1be3652ff84130887f065084"
  },
  {
    "url": "12_ide-android/01_install_files/1.jpg",
    "revision": "4be3862fcc24824bc613a27f001f53b6"
  },
  {
    "url": "404.html",
    "revision": "8f78b3d613817dcd8c6cda276aedec6d"
  },
  {
    "url": "assets/css/0.styles.cdfab553.css",
    "revision": "3b8a39005afc3eda195f9cbbb4f53b5e"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.4c48c6c2.js",
    "revision": "5babcaffab31f0e44c9bdf0da9cecf82"
  },
  {
    "url": "assets/js/10.33e56a32.js",
    "revision": "58d6ab23d45a8684070e4f5e8a825c68"
  },
  {
    "url": "assets/js/11.abb8cc44.js",
    "revision": "c562626ec43266ea590399dbc65649b2"
  },
  {
    "url": "assets/js/12.b3f90c79.js",
    "revision": "65b8dea31f4742cd669b2c90f0353b67"
  },
  {
    "url": "assets/js/13.43056461.js",
    "revision": "68ee7fac5c93c31771a4ffae4753a233"
  },
  {
    "url": "assets/js/14.c9e44f82.js",
    "revision": "e0120a47e02282aa29639d602a6686ca"
  },
  {
    "url": "assets/js/15.6a8b6f0f.js",
    "revision": "8ecf715cb0b9f406614a19ef5d01e95a"
  },
  {
    "url": "assets/js/16.6887d3b2.js",
    "revision": "faa3773bedb87e1bd7b3cf8ec97a72d2"
  },
  {
    "url": "assets/js/17.7aed37cb.js",
    "revision": "ff59744cf5b95c9a931deb3f07d5ca19"
  },
  {
    "url": "assets/js/18.5d8b8aa9.js",
    "revision": "112140a1effd0e327915781c32fddbda"
  },
  {
    "url": "assets/js/19.b20670b8.js",
    "revision": "39ac2fc84838d2f6d0867cb5710f36fc"
  },
  {
    "url": "assets/js/2.7df4351a.js",
    "revision": "325fc2ec2eda4cd40f4ce035469f4535"
  },
  {
    "url": "assets/js/20.dc5b5ac2.js",
    "revision": "9b1b1366732cc1b98ecd2b189065a8f8"
  },
  {
    "url": "assets/js/21.abbab298.js",
    "revision": "289f327e3bfb1be56779841e0801fbd3"
  },
  {
    "url": "assets/js/22.08dd36c1.js",
    "revision": "8419102c906a88ca305df92ba4af80be"
  },
  {
    "url": "assets/js/23.3caadaf5.js",
    "revision": "1a43b05940f6553b167ea7f237ecb006"
  },
  {
    "url": "assets/js/24.4c2f9643.js",
    "revision": "929a731655e41e9c9a131a4d6e773251"
  },
  {
    "url": "assets/js/25.f91ef875.js",
    "revision": "0809359d7074dc4e613a0ede31fb191a"
  },
  {
    "url": "assets/js/26.485cbd91.js",
    "revision": "9244a509e07c9b055d90ae6eea94825b"
  },
  {
    "url": "assets/js/27.95e23e8c.js",
    "revision": "e80ae6ea73a2d4cb45b358dd099ed564"
  },
  {
    "url": "assets/js/28.fb6bfb10.js",
    "revision": "dc700805a5d6e79fea183f15da4e7cb6"
  },
  {
    "url": "assets/js/29.43602dc1.js",
    "revision": "c5a16bfc841fd3b6d33a5b883626dbe3"
  },
  {
    "url": "assets/js/3.5d44db64.js",
    "revision": "bf166a0e0ff69a456ab794a7011fed96"
  },
  {
    "url": "assets/js/30.22675c96.js",
    "revision": "b20456f9bd5096f07d58ed85bd1893c2"
  },
  {
    "url": "assets/js/31.83c01633.js",
    "revision": "53997772c84dec29aea769194497b762"
  },
  {
    "url": "assets/js/32.68337958.js",
    "revision": "5fc2e7412b4b94c38c26456afc89142c"
  },
  {
    "url": "assets/js/33.fc01ed7d.js",
    "revision": "fb04972a8794a8b9bff715a57ea09327"
  },
  {
    "url": "assets/js/34.0da829fb.js",
    "revision": "fb46faa03872cf28dc05fb3994b17b7e"
  },
  {
    "url": "assets/js/35.cd86a2da.js",
    "revision": "2f47b00f66a81e929b6e8aa50cf094cd"
  },
  {
    "url": "assets/js/36.e263d87e.js",
    "revision": "8a46381ef91233b941d4190615d5ac43"
  },
  {
    "url": "assets/js/37.25b47e80.js",
    "revision": "434da8aef5141e7735a9ef53f6da058c"
  },
  {
    "url": "assets/js/38.0135696d.js",
    "revision": "621f4e15cf0291da03b7aa82538d013e"
  },
  {
    "url": "assets/js/39.86d3561c.js",
    "revision": "9a7607be48dbde5e5ce608a71d4ef180"
  },
  {
    "url": "assets/js/4.fe4cb694.js",
    "revision": "cb36ad1891adaaa5819345361ae275f6"
  },
  {
    "url": "assets/js/40.326beda2.js",
    "revision": "7b090183e973de3bf0012021c0fa26d1"
  },
  {
    "url": "assets/js/41.4f9c23b1.js",
    "revision": "e101e266082b14b2d581bcd90b5dd01c"
  },
  {
    "url": "assets/js/42.43631b57.js",
    "revision": "9b9fb8e95a2ca7b523233874b61465ea"
  },
  {
    "url": "assets/js/43.e69135db.js",
    "revision": "14dc72ac4af72caeb78832d5c2f23936"
  },
  {
    "url": "assets/js/44.0ab7c39a.js",
    "revision": "b8589216d6a646e8d4bad97305a7a84c"
  },
  {
    "url": "assets/js/45.6c2f519b.js",
    "revision": "f70f2c201609933ac10fcfed5303c73d"
  },
  {
    "url": "assets/js/46.6066d9a6.js",
    "revision": "9a73d2dae5446797812108cfa38e140d"
  },
  {
    "url": "assets/js/47.ac76a29c.js",
    "revision": "7d5526be49ffd3394a901ce99279317f"
  },
  {
    "url": "assets/js/48.d54dea2d.js",
    "revision": "2a2695626b7ab83b08e4f9f063a624a7"
  },
  {
    "url": "assets/js/49.4189c76d.js",
    "revision": "06bf15aba83b9a3501a91d6b8927fe4e"
  },
  {
    "url": "assets/js/5.5afec236.js",
    "revision": "8a8fac2bf6337cfabdba2df938e3b98c"
  },
  {
    "url": "assets/js/50.8756146c.js",
    "revision": "f50157af8e9f9a35ea7c240a9b794ec8"
  },
  {
    "url": "assets/js/51.46eac5f8.js",
    "revision": "0fb90134e9f43c1feafe90e8a45da981"
  },
  {
    "url": "assets/js/52.337c9e94.js",
    "revision": "20e5e6cdcc447a81b8b2610fe3011dc3"
  },
  {
    "url": "assets/js/53.ae10ca44.js",
    "revision": "9d197c6b649ed9ae6f397260c16a5ddf"
  },
  {
    "url": "assets/js/54.5a7fe454.js",
    "revision": "6589e39533cb1a43a50ee1e9e02c87b7"
  },
  {
    "url": "assets/js/55.b596c9dc.js",
    "revision": "0a67614437aca586ac80072bab040340"
  },
  {
    "url": "assets/js/56.06128d11.js",
    "revision": "c8f8b497d87efba472b4de6a1048e315"
  },
  {
    "url": "assets/js/57.6a1e2d70.js",
    "revision": "e8f1faac4edd7e224a412789796e6a01"
  },
  {
    "url": "assets/js/58.c38db85c.js",
    "revision": "ab7fc284e01383901082adcf3951c01a"
  },
  {
    "url": "assets/js/59.f02bcc46.js",
    "revision": "d262b19adafbc9586cd08a02f380cd0b"
  },
  {
    "url": "assets/js/6.8c89d0bb.js",
    "revision": "b3ddd2df21e8ef0abe1322a7e867570c"
  },
  {
    "url": "assets/js/60.f7fe360c.js",
    "revision": "25ddcc439c94fe96970826e7ef316cc9"
  },
  {
    "url": "assets/js/61.80651d71.js",
    "revision": "db69d4d2f171c6b442b96bdf4ef8e444"
  },
  {
    "url": "assets/js/62.109ccfbe.js",
    "revision": "e83698772ac7ad982b0fe9bfbb8b1fef"
  },
  {
    "url": "assets/js/63.373c5499.js",
    "revision": "5e2b25f8df612c03581ed2fe270a762d"
  },
  {
    "url": "assets/js/64.04a4cf5d.js",
    "revision": "d0de4b9f985650e7b7596e80643b78a8"
  },
  {
    "url": "assets/js/65.d751a011.js",
    "revision": "077ec2f7d69f4cf7e007101d3de9ae16"
  },
  {
    "url": "assets/js/7.d2815cd5.js",
    "revision": "21d9d52ff7c7d60db99f931bb233366b"
  },
  {
    "url": "assets/js/app.61b7a0c3.js",
    "revision": "c8d81c4d5a795d6e6c1eb46dc5d54abb"
  },
  {
    "url": "assets/js/vendors~docsearch.4f1414c9.js",
    "revision": "b10e3e37a00c4d233ec78124f9fbf909"
  },
  {
    "url": "cn/01_ide-cpp/01_install.html",
    "revision": "1405cc32dfdf0df0d3a78f91a3eaca2a"
  },
  {
    "url": "cn/01_ide-cpp/02_usage.html",
    "revision": "9ca3bd3331b45c832f1a06b4ed265dce"
  },
  {
    "url": "cn/02_ide-java/01_install.html",
    "revision": "c656a23e71b9640fc701c4daacc13e5e"
  },
  {
    "url": "cn/02_ide-java/02_usage.html",
    "revision": "39bfebf44008dc9c294d19b2d49f550f"
  },
  {
    "url": "cn/03_ide-jupyter/01_install.html",
    "revision": "d8024e6fde57441c92aeb2b5083e55f8"
  },
  {
    "url": "cn/03_ide-jupyter/02_usage.html",
    "revision": "fcdec6271fc9ce10cbedaac90f3a437b"
  },
  {
    "url": "cn/04_ide-go/01_install.html",
    "revision": "92b547974e588238b2034148697501b9"
  },
  {
    "url": "cn/04_ide-go/02_usage.html",
    "revision": "fee5c0da2a31f636228f5385558608fb"
  },
  {
    "url": "cn/05_ide-rust/01_install.html",
    "revision": "a5098a537f7cb486871b9fb496399f14"
  },
  {
    "url": "cn/05_ide-rust/02_usage.html",
    "revision": "5bd6f64859be4ed67a7ace75d806cda9"
  },
  {
    "url": "cn/06_ide-python/01_install.html",
    "revision": "6b8939064c64ec45312828a1dd0047e4"
  },
  {
    "url": "cn/07_ide-markdown/01_install.html",
    "revision": "0acfc67a3272ecfca417d9eebad68092"
  },
  {
    "url": "cn/07_ide-markdown/02_usage.html",
    "revision": "72584aec4510e7ecfacd85921c264ef6"
  },
  {
    "url": "cn/08_ide-rest-client/01_install.html",
    "revision": "dec3f985048111b39c29a06ae0301044"
  },
  {
    "url": "cn/08_ide-rest-client/02_usage.html",
    "revision": "c6c10b77423e22531e8e7bf646419e62"
  },
  {
    "url": "cn/09_ide-vue/01_install.html",
    "revision": "42590d32005b47f2547ebb583cd68f9a"
  },
  {
    "url": "cn/10_ide-photos/01_install.html",
    "revision": "2e3ed0d39b3ef44194560cc2d70f09d9"
  },
  {
    "url": "cn/11_ide-ssh-client/01_install.html",
    "revision": "78debdddf178c34abf567863b99046bb"
  },
  {
    "url": "cn/12_ide-android/01_install.html",
    "revision": "bb0df84924cb7763943de468fa31b348"
  },
  {
    "url": "cn/99_other-plugins/other_plugins.html",
    "revision": "d732a2576dd5a56ab2b6219f47cca3f7"
  },
  {
    "url": "en/01_ide-cpp/01_install.html",
    "revision": "aa94d416c3699de41437a730a5f6302b"
  },
  {
    "url": "en/01_ide-cpp/02_usage.html",
    "revision": "ade91518603721ba7920ebe5fdadab48"
  },
  {
    "url": "en/02_ide-java/01_install.html",
    "revision": "b1ff0ce629709226e660fdbcee136646"
  },
  {
    "url": "en/02_ide-java/02_usage.html",
    "revision": "6e43deca13626361364b82efef99d882"
  },
  {
    "url": "en/03_ide-jupyter/01_install.html",
    "revision": "da1f76e418965524ca77a0f7bfcf9379"
  },
  {
    "url": "en/03_ide-jupyter/02_usage.html",
    "revision": "2173f23f8d57016c44d2b84338107854"
  },
  {
    "url": "en/04_ide-go/01_install.html",
    "revision": "0f4de20eddaa16c225c105ba8966389b"
  },
  {
    "url": "en/04_ide-go/02_usage.html",
    "revision": "d8750d2ef1c52655c00e1a46db8e9959"
  },
  {
    "url": "en/05_ide-rust/01_install.html",
    "revision": "9d7b8fcb51a9e3c592d46dd94afa238f"
  },
  {
    "url": "en/05_ide-rust/02_usage.html",
    "revision": "15434e519dd2e4365ac1ba482a628149"
  },
  {
    "url": "en/06_ide-python/01_install.html",
    "revision": "58112e36e5a025e9276e6054af7e1dea"
  },
  {
    "url": "en/07_ide-markdown/01_install.html",
    "revision": "bd25dd18d590869d74c4fd72609931ec"
  },
  {
    "url": "en/07_ide-markdown/02_usage.html",
    "revision": "5644bc77219e8722af6b9ad002adff55"
  },
  {
    "url": "en/08_ide-rest-client/01_install.html",
    "revision": "2b0bc3e92cb8952f2c58600d479b90d7"
  },
  {
    "url": "en/08_ide-rest-client/02_usage.html",
    "revision": "80f285d34478c4cb434fbf27a827b18b"
  },
  {
    "url": "en/09_ide-vue/01_install.html",
    "revision": "3c3ce35dbe6697e1c6346f9184803102"
  },
  {
    "url": "en/10_ide-photos/01_install.html",
    "revision": "6a5a233bfb23ac9ff7c41170bf2eef3a"
  },
  {
    "url": "en/11_ide-ssh-client/01_install.html",
    "revision": "fcbe330cf66e704e4e6da66a421580d9"
  },
  {
    "url": "en/12_ide-android/01_install.html",
    "revision": "682c4cd49398111ae137d9fe1ac394c1"
  },
  {
    "url": "en/99_other-plugins/other_plugins.html",
    "revision": "0a1c3838d50a9a15bbc828066cbbfc70"
  },
  {
    "url": "icon-192x192.png",
    "revision": "4ee386a18b3c5459c62ef4e52acf49c9"
  },
  {
    "url": "icon-256x256.png",
    "revision": "5b2d3d8f03a0644bb06fb50379b19b28"
  },
  {
    "url": "icon-384x384.png",
    "revision": "0f4e0ac0b0db29bf842d28faef38a2a6"
  },
  {
    "url": "icon-512x512.png",
    "revision": "b293723559824112effc30c2db9b6e2c"
  },
  {
    "url": "index.html",
    "revision": "1082baa19dfc45e2d671988d2972b5bc"
  },
  {
    "url": "logo.png",
    "revision": "a78dfa30bc7f1e6e652284bdd386d0d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
