<template>
  <div class="hello">
    <div>
      <input type="number" v-model="target">Target
      <br>
      <input type="text" v-model="requiredStr">Including
      <br>
      <input type="text" v-model="forbiddenStr">Excluding
      <br>
      <input type="checkbox" v-model="isSandwich">
      Sandwich Sudoku
    </div>
    <div class="columns">
      <column-component v-for="n in 7" :key="n" :num="n" :sums="allSums"></column-component>
    </div>
  </div>
</template>

<script>
import SumFinder from "../SumFinder.js";
import Column from "./Column.vue";
export default {
  components: { ColumnComponent: Column },
  name: "HelloWorld",
  data() {
    return {
      target: 15,
      requiredStr: "",
      forbiddenStr: "",
      isSandwich: false
    };
  },
  computed: {
    allSums() {
      const remainingDigits = [];
      const forbiddenDigits = [...this.forbidden];
      if (this.isSandwich) {
        forbiddenDigits.push(1, 9);
      }
      for (let i = 1; i <= 9; i++) {
        if (this.required.indexOf(i) < 0 && forbiddenDigits.indexOf(i) < 0) {
          remainingDigits.push(i);
        }
      }
      const sums = SumFinder(+this.target, this.required, remainingDigits);
      return sums;
    },
    required() {
      return [...this.requiredStr].map(i => +i);
    },
    forbidden() {
      return [...this.forbiddenStr].map(i => +i);
    }
  },
  methods: {},
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.columns {
  display: flex;
  font-size: 20pt;
}
</style>
