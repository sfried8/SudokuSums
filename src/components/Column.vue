<template>
  <div>
    <div class="column" v-if="mySums.length">
      <div v-for="s in mySumsStrs" :key="s">{{s}}</div>
      <br>
      <div v-if="alwaysContains.length">Always: {{alwaysContains}}</div>
      <div v-if="neverContains.length">Never: {{neverContains}}</div>
    </div>
  </div>
</template>
<script>
const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sandwichDigits = [2, 3, 4, 5, 6, 7, 8];
export default {
  props: ["sums", "num", "isSandwich"],
  computed: {
    mySumsStrs() {
      return this.mySums.map(s => s.join(" "));
    },
    mySums() {
      return this.sums.filter(s => s.length === this.num);
    },
    digits() {
      return this.isSandwich ? sandwichDigits : allDigits;
    },
    alwaysContains() {
      if (this.mySums.length < 2) {
        return [];
      }
      return this.digits
        .filter(d => this.mySums.every(s => s.includes(d)))
        .join(" ");
    },
    neverContains() {
      if (this.mySums.length < 2) {
        return [];
      }
      return this.digits
        .filter(d => !this.mySums.some(s => s.includes(d)))
        .join(" ");
    }
  }
};
</script>
<style lang="css">
.column {
  margin: 25px;
}
</style>
