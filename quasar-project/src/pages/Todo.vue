<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input v-model="newTask" @keyup.enter="addTask" class="col"
               square filled bg-color="white" placeholder="Add task" dense>
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add"/>
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <q-item v-for="(task, index) in tasks"
              :key="task.key" @click="updateTask(task, task.key)"
              :class="{ 'done bg-blue-1' : task.done }" clickable v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(index, task.key)"
                 round dense color="primary" icon="delete"/>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary"/>
      <div class="text-h5 text-primary text-center">
        No tasks
      </div>
    </div>
  </q-page>
</template>
<script>
import {defineComponent} from 'vue'
import db from '../firebaseDb'

export default defineComponent(
  {
    data() {
      return {
        newTask: '',
        task: {},
        tasks: []
      }
    },
    created() {
      db.collection('ToDoItems').onSnapshot((snapshotChange) => {
        this.tasks = []
        snapshotChange.forEach((doc) => {
          if (doc.data().title) {
            this.tasks.push({
              key: doc.id,
              title: doc.data().title,
              done: doc.data().done,
            })
          }
        })
      })
    },
    methods: {
      deleteTask(index, id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Are you sure you would like to delete this task?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          db.collection('ToDoItems').doc(id).delete().then(() => {
          })
            .catch((error) => {
              console.error(error)
            })
          this.$q.notify('Task has been deleted')
        })
      },
      addTask() {
        this.task = {title: this.newTask, done: false}
        this.tasks.push({title: this.task.title, done: this.task.done})
        /*this.tasks.push({
        title: this.newTask,
        done: false }
        )*/
        db.collection('ToDoItems').add(this.task).then(() => {
          console.log('added to firebase DB');
          this.newTask = ''
        })
      },
      updateTask(task, id) {
        task.done = !task.done
        db.collection('ToDoItems').doc(id)
          .update(task).then(() => {
          console.log('updated firebase DB');
        }).catch((error) => {
          console.log(error)
          alert('Error updating task');
        })
      },
    }
  })
</script>
<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb
  }
}

.no-tasks {
  opacity: 0.5
}
</style>
