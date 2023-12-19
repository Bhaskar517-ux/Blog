"use strict";

var app = require('../app');

var dataService = function(mockDataService) {
  this.data = [];
  this.data.push(mockDataService.getPost("Embrace adversity as the forge that shapes your strength", "and let your resilience illuminate the path to your extraordinary potential."));
  this.data.push(mockDataService.getPost("New breakthrough in clean energy technology ", "discovered by scientists"));
  this.data.push(mockDataService.getPost("Guided by wisdom, duty fulfilled with detachment", "attaining peace through selfless action"));
  this.data.push(mockDataService.getPost("Why don't scientists trust atoms?", "Because they make up everything!"));

  this.newPost = {
    id: Math.random(),
    title: undefined,
    subtitle: undefined,
    content: undefined,
    messages: []
  };

  this.basicInfo = {
    name: "Bhaskar Choudhary",
    introduction: "Welcome to blog website, where words come to life! Dive into a world of captivating stories, insightful articles, and thought-provoking content."
  };

  this.social = {
    //works: 'Project',
    lives: 'Navi Mumbai',
    birthday: new Date('1999-12-01T01:00:00.000Z'),
    from: 'Bihar'
  };
};

var proto = dataService.prototype;

proto.getNewPostData = function() {
  return this.newPost;
};

proto.getPostData = function() {
  return this.data;
};

proto.createPost = function(data) {
  this.data.unshift( angular.copy(data) );
};

proto.getBasicInfoData = function() {
  return this.basicInfo;
};

proto.saveBasicInfo = function(data) {
  this.basicInfo = data;
};

proto.getSocialData = function() {
  return this.social;
};

proto.saveSocial = function(data) {
  this.social = data;
};

app.service('dataService', ['mockDataService', dataService]);
