<template>
<div class="cal">
  <vue-cal
  selected-date="2018-11-19"
  :time-from="9 * 60"
  :disable-views="['years', 'year']"
  active-view="month"
  hide-weekends
  events-on-month-view="short"
  :events="events"
  style="height: 700px;background-color: red;">
</vue-cal>
</div>

</template>

<script>
import { defineComponent } from '@vue/composition-api'
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'

export default defineComponent({
   
})
</script>

<style scoped>
.vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}

.cal{
  background-color: red;
  width: 40%;
}
</style>
