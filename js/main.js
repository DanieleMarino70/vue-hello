const app = Vue.createApp({
  data(){
    return {
      message: "Hello Vue!",
      url: "./img/works.jpg"
    }
  }
});

app.mount("#root");