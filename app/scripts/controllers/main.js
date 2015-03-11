'use strict';

/**
 * @ngdoc function
 * @name angularsrssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularsrssApp
 */
angular
    .module('angularsrssApp')
    .controller('MainCtrl', function ($scope, $http, $timeout) {

        $scope.refreshInterval = 60;
        $scope.feeds = [{
            url: 'http://dailyjs/atom.xml'
        }];

        $scope.fetchFeed = function(feed) {
            // moc du flux car l' url donnée dans le tuto ne fonctionne pas
            var mocFeeds = {
                "query":{
                    "count":10,
                    "created":"2015-03-09T19:46:36Z",
                    "lang":"fr",
                    "results":{
                        "entry":[
                            {
                                "title":"Motion Sensing with the Doppler Effect",
                                "link":{ "href":"http://dailyjs.com/2015/03/09/doppler" },
                                "updated":"2015-03-09T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/03/09/doppler",
                                "content":{"type":"html","content":"\n   <p>If you try out the following project, be aware that it emits a high frequency sound!...</p>\n "}
                            },
                            {
                                "title":"Angular 2 and TypeScript, Comparing Angular 1.x and 2.0",
                                "link":{ "href":"http://dailyjs.com/2015/03/06/typekit-angular" },
                                "updated":"2015-03-06T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/03/06/typekit-angular",
                                "content":{"type":"html","content":"\n <h3 id='angular_2_is_built_on_typescript'>Angular 2 is Built on TypeScript</h3>\n\n<p>There&#8217;s a post on the msdn blog...</p>"}
                            },
                            {
                                "title":"Make Parsers and DSLs with Jacob",
                                "link":{ "href":"http://dailyjs.com/2015/03/05/jacob" },
                                "updated":"2015-03-05T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/03/05/jacob",
                                "content":{"type":"html","content":"\n<p>Recently there have been several exciting projects that provide support for upcoming ES6 and ES7...</p>\n"}
                            },
                            {
                                "title":"Node Roundup: npm 3, io.js 1.4.3, NoDent",
                                "link":{"href":"http://dailyjs.com/2015/03/04/node-roundup"},
                                "updated":"2015-03-04T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/03/04/node-roundup",
                                "content":{"type":"html","content":"\n <h3 id='npm_roadmap_for_3_using_jquery_modules'>npm: Roadmap for 3, Using jQuery Modules...</h3>\n "}
                            },
                            {
                                "title":"ExcelJS, Material Refresh",
                                "link":{"href":"http://dailyjs.com/2015/03/03/excel-material-refresh"},
                                "updated":"2015-03-03T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/03/03/excel-material-refresh",
                                "content":{"type":"html","content":"\n <h3 id='exceljs'>ExcelJS</h3>\n\n<p>ExcelJS (GitHub: guyonroche/exceljs, License:...</p>\n "}
                            },
                            {
                                "title":"React in Atom, JSX Control Statements, Baobab",
                                "link":{"href":"http://dailyjs.com/2015/03/02/react-libraries"},
                                "updated":"2015-03-02T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/03/02/react-libraries",
                                "content":{"type":"html","content":"\n <p>I seem to have a huge backlog of React-related submissions to the DailyJS...</p>\n"}
                            },
                            {
                                "title":"React CSS with Radium, React D3 Components",
                                "link":{"href":"http://dailyjs.com/2015/02/27/radium-d3"},
                                "updated":"2015-02-27T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/02/27/radium-d3",
                                "content":{"type":"html","content":"\n <p>Ken Wheeler sent in <a href='http://projects.formidablelabs.com/radium/'>Radium</a> (GitHub:...</p>\n"}
                            },
                            {
                                "title":"Transpilers: This Time It's Different",
                                "link":{"href":"http://dailyjs.com/2015/02/26/babel"},
                                "updated":"2015-02-26T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/02/26/babel",
                                "content":{"type":"html","content":"\n <p>JavaScript is changing. It&#8217;s not just the wealth of great libraries that forces us to...</p>"}
                            },
                            {
                                "title":"Node Roundup: npm jQuery, io.js 1.3.0, proginoskes",
                                "link":{"href":"http://dailyjs.com/2015/02/25/node-roundup"},
                                "updated":"2015-02-25T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/02/25/node-roundup",
                                "content":{"type":"html","content":"\n <p>It&#8217;s finally happened: jQuery is recommending npm for distributing plugins....</p>\n"}
                            },
                            {
                                "title":"Find Your Next Developer with this JavaScript Online Test",
                                "link":{"href":"http://dailyjs.com/2015/02/24/javascript-online-tests"},
                                "updated":"2015-02-24T00:00:00+00:00",
                                "id":"http://dailyjs.com/2015/02/24/javascript-online-tests",
                                "content":{"type":"html","content":"\n<p><a href='/sponsored-content.html' class='label'>Sponsored Content</a> This post...</p>"}
                            }
                        ]
                    }
                }
            };

            feed.items = {};


            //console.log($scope.feeds);

            // Url qui pointe vers le service de yahou pour transformer un flux atom en json
            //var apiUrl = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'";
            //apiUrl += encodeURIComponent(feed.url);
            //apiUrl += "'%20and%20itemPath%3D'feed.entry'&format=json&diagnostics=true&callback=JSON_CALLBACK";

            //$http.jsonp(apiUrl).
            //    success(function(data) { //, status, headers, config
            //        console.log(data.query);
            //        if (data.query.results) {
                        feed.items = mocFeeds.query.results.entry;
            //        }
            //    }).
            //    error(function(data) {
            //        console.error('Erreur lors de la récupération des flux : ', data);
            //    });

            $timeout(function() { $scope.fetchFeed(feed); }, $scope.refreshInterval * 1000);
        };

        $scope.addFeed = function(feed) {
            if (feed.$valid) {
                var newFeed = angular.copy(feed);
                $scope.feeds.push(newFeed);
                $scope.fetchFeed(newFeed);
                $scope.newsFeed.url = '';
            }
        };

        $scope.deleteFeed = function(feed) {
            $scope.feeds.splice($scope.feeds.indexOf(feed), 1);
        };

        $scope.fetchFeed($scope.feeds[0]);
    });
