

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'

export default {
 
  components: {
    VueCal
  },
  data: () => ({
  selectedEvent: {},
  showDialog: false,
  selectedDate: new Date(new Date().getFullYear(), 11, 31),
  events: [
    {
      start: '2018-11-20 14:00',
      end: '2018-11-20 18:00',
      title: 'Need to go shopping',
      icon: 'shopping_cart', // Custom attribute.
      content: 'Click to see my shopping list',
      contentFull: 'My shopping list is rather long:<br><ul><li>Avocados</li><li>Tomatoes</li><li>Potatoes</li><li>Mangoes</li></ul>', // Custom attribute.
      class: 'leisure'
    },
    {
      start: '2018-11-22 10:00',
      end: '2018-11-22 15:00',
      title: 'Golf with John',
      icon: 'golf_course', // Custom attribute.
      content: 'Do I need to tell how many holes?',
      contentFull: 'Okay.<br>It will be a 18 hole golf course.', // Custom attribute.
      class: 'sport'
    }
  ]
}),
methods: {
  onEventClick (event, e) {
    this.selectedEvent = event
    this.showDialog = true

    // Prevent navigating to narrower view (default vue-cal behavior).
    e.stopPropagation()
  },
  customEventCreation () {
    const dateTime = prompt('Create event on (YYYY-MM-DD HH:mm)', '2023-06-14 13:15')

    // Check if date format is correct before creating event.
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(dateTime)) {
      this.$refs.vuecal.createEvent(
        // Formatted start date and time or JavaScript Date object.
        dateTime,
        // Event duration in minutes (Integer).
        120,
        // Custom event props (optional).
        { title: 'New Event', content: 'yay! 🎉', class: 'blue-event' }
      )
    } else if (dateTime) alert('Wrong date format.')
}
}}
</script>

<template>
<v-btn @click="customEventCreation" color="succes">
  button33213123213
</v-btn>





<vue-cal
  ref="vuecal"
  today-button
  
  :time-from="9 * 60"
  
  active-view="month"
  hide-weekends
  :selected-date="selectedDate"
  :editable-events="{ title: true, drag: false, resize: true, delete: true, create: false }"
  events-on-month-view="short"
  :events="events"
  :on-event-click="onEventClick"
  :cell-click-hold="false"
  :drag-to-create-event="false"
  style="height: 600px;background-color: red;width: 80ch;margin-left: 20%;"
  >
  <template #today-button>
   
    <v-tooltip>
      <template #activator="{ on }">
        <v-btn v-on="on">
          <v-icon>my_location</v-icon>
        </v-btn>
        <span>Go to Today's date</span>
      </template>
    </v-tooltip>
  </template>
</vue-cal>

<v-dialog v-model="showDialog">
  <v-card>
    <v-card-title>
      <v-icon>{{ selectedEvent.icon }}</v-icon>
      <span>{{ selectedEvent.title }}</span>
      <v-spacer/>
      <strong>{{ selectedEvent.start && selectedEvent.start.format('DD/MM/YYYY') }}</strong>
    </v-card-title>
    <v-card-text>
      <p v-html="selectedEvent.contentFull"/>
      <strong>Event details:</strong>
      <ul>
        <li>Event starts at: {{ selectedEvent.start && selectedEvent.start.formatTime() }}</li>
        <li>Event ends at: {{ selectedEvent.end && selectedEvent.end.formatTime() }}</li>
      </ul>
    </v-card-text>
  </v-card>
</v-dialog>
</template>

<style>
.vuecal__event {cursor: pointer;}

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;}

  .vuecal--month-view .vuecal__cell {height: 80px;}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {padding: 4px;}
.vuecal--month-view .vuecal__no-event {display: none;}
</style>