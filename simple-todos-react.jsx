Tasks = new Mongo.Collection("tasks");

if(Meteor.isClient){
    ReactLayout.render(App)
}