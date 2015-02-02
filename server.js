//template can be refer to https://github.com/chovy/express-template-demo/blob/master/demo/app.js
//var gaModel = require('./models/generalAdminModel');
//console.log("load models"+gaModel);
"use strict";
var domain = 'localhost';
var express = require('express'),
  http = require('http'),
  path = require('path');
//var engines = require('consolidate');
//var dust = require('express-dust-linkedin');

var app = module.exports = express();



app.configure(function() {
  // body...
  //app.set('template_engine','dust');
  app.set('domain', domain);
  app.set('port', 3399);


  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(express.cookieParser('wigglybits'));
  //app.use(express.session({ secret: 'whatever', store: store }));
  //app.use(express.session());
  //app.use(app.router);
  //app.use(require('less-middleware')({ src: __dirname + '/public' }));
  //app.use(express.static(path.join(__dirname, 'static/')));
  app.use(express.static(path.join(__dirname, '/')));

  app.get('/rest/admin/user/list', function(req, res) {
    // console.log(req.query.type);

    var data = [{
      id: "1",
      date: "2007-10-01",
      name: "test",
      note: "note",
      amount: "200.00",
      tax: "10.00",
      total: "210.00"
    }, {
      id: "2",
      date: "2007-10-02",
      name: "test2",
      note: "note2",
      amount: "300.00",
      tax: "20.00",
      total: "320.00"
    }, {
      id: "3",
      date: "2007-09-01",
      name: "test3",
      note: "note3",
      amount: "400.00",
      tax: "30.00",
      total: "430.00"
    }];


    res.send({
      errorCode: 0,
      errorDescription: "",
      // page:"1",
      // total:"2",
      // records: "18",
      item: data
    });
  });



  app.get('/rest/admin/order/list', function(req, res) {
    var data = [{
      "countPrice": 100,
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 1,
      'washStartTime': '2014/10/12 3:00',
      'comment': '无',
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 1,
      "type": 3,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        'address': {
          'id': 1,
          'name': '曙光花园小区',
          'parent': {
            'id': 3,
            'name': '北京',
            'parent': null,
            'status': 0,
            'type': 0
          },
          'status': 0,
          'type': 0
        },
        "comment": "车库306",
        "default": false,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      },
      "userCar": {
        'car': {
          'id': 4,
          'name': '丰田霸道',
          'parent': null,
          'pic': '',
          'status': 1,
          'type': 2
        },
        "carNo": "京A 88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 2,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 2,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comment":'霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。',
      "comments":[{
        "comment":'霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 3,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 3,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 4,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 4,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 5,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 5,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": null,
      "id": 6,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 6,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": {
          'id': 1,
          'name': '曙光花园小区',
          'parent': {
            'id': 3,
            'name': '北京',
            'parent': null,
            'status': 0,
            'type': 0
          },
          'status': 0,
          'type': 0
        },
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": {
          'id': 4,
          'name': '丰田霸道',
          'parent': null,
          'pic': '',
          'status': 1,
          'type': 2
        },
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    },
    {
      "countPrice": 100,
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 1,
      'washStartTime': '2014/10/12 3:00',
      'comment': '无',
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 1,
      "type": 3,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        'address': {
          'id': 1,
          'name': '曙光花园小区',
          'parent': {
            'id': 3,
            'name': '北京',
            'parent': null,
            'status': 0,
            'type': 0
          },
          'status': 0,
          'type': 0
        },
        "comment": "车库306",
        "default": false,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      },
      "userCar": {
        'car': {
          'id': 4,
          'name': '丰田霸道',
          'parent': null,
          'pic': '',
          'status': 1,
          'type': 2
        },
        "carNo": "京A 88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 2,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 2,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comment":'霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。',
      "comments":[{
        "comment":'霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。霓虹我是测试。你好我是测试。'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 3,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 3,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 4,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 4,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": '2014年-11月-04日 21:21:02',
      "id": 5,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 5,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": null,
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": null,
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }, {
      "countPrice": 100,
      "comments":[{
        "comment":'测试'
      }],
      "washer":{
        "id":"1",
        "name": "刘伟光",
        "phone": "18601391001"
      },
      "endOrderTime": null,
      "id": 6,
      "startOrderTime": "2014年-11月-04日 21:21:02",
      "status": 6,
      "type": 3,
      "user": {
        "createdDate": "2014年-10月-31日 12:25:37",
        "id": 1,
        "money": 12,
        "name": "刘伟光",
        "phone": "18601391001",
        "points": 8888888,
        "role": null,
        "sex": 1,
        "status": 1,
        "times": 221,
        "type": 1,
        "updatedDate": "2014年-10月-31日 12:26:14",
        "weixinId": "12",
        "weixinToken": "132132123"
      },
      "userAddress": {
        "address": {
          'id': 1,
          'name': '曙光花园小区',
          'parent': {
            'id': 3,
            'name': '北京',
            'parent': null,
            'status': 0,
            'type': 0
          },
          'status': 0,
          'type': 0
        },
        "comment": "2134234",
        "default": true,
        "id": 3,
        "status": 2,
        "type": 2,
        "user": null
      },
      "userCar": {
        "car": {
          'id': 4,
          'name': '丰田霸道',
          'parent': null,
          'pic': '',
          'status': 1,
          'type': 2
        },
        "carNo": "88888",
        "color": "黑色",
        "createdTime": "2014年-10月-31日 12:27:19",
        "default": true,
        "id": 1,
        "status": 0,
        "type": 0,
        "user": null
      }
    }];
    var result = {
      errorCode: 0,
      errorDescription: "success",
      item: data
    };
    res.send(result);

  });

  app.post('/rest/admin/login', function(req, res) {
    console.log(req.body);
    var result = {
      errorCode: 0,
      errorDescription: "success",
      item: {
        'id': 1,
        'name': '伟光'
      }
    };
    res.send(result);

  });

  app.post('/rest/admin/order/update', function(req, res) {
    console.log(req.body);
    var result = {
      errorCode: 0,
      errorDescription: "success",
      item: ""
    };
    res.send(result);

  });

  


  app.post('/rest/admin/logout', function(req, res) {
    console.log(req.body);
    var result = {
      errorCode: 0,
      errorDescription: "success",
      item: ""
    };
    res.send(result);

  });



  app.get('/rest/user/profile', function(req, res) {
    console.dir(req.query);
    var data = {
      id: 1,
      name: "利好",
      gender: "男",
      birthdate: "2013-12-12",
      identitynumber: "610103***********0818",
      phonenumber: "152****4567",
      location: "陕西，西安"
    };
    res.send({
      errorCode: 0,
      errorDescription: "success",
      item: data
    });

  });


  http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
  });



});