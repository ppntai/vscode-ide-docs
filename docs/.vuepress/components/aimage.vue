<template>
  <img :src="fullPath" :alt="alt" />
</template>

<script>
import { logo } from '../config/themeConfig';
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    fullPath() {
      return `/vscode-ide-docs${this.src}`;
    }
  }
}