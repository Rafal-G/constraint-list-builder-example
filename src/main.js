"use strict";
exports.__esModule = true;
var constraint_list_builder_1 = require("constraint-list-builder");
var correct_def_1 = require("./data/correct.def");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Creating list builder');
        var l = new constraint_list_builder_1.ListBuilder(correct_def_1.correctDef);
        var nodeAdded1 = l.addNode({
            'id': 'node1',
            'someOtherValue': 'random'
        });
        console.log("First node added? " + nodeAdded1);
        var nodeAdded2 = l.addFast({
            'id': 'fakeId',
            'someOtherStuff': 'working'
        });
        console.log("this node wasn't added because ID isn't in the allowed fields of node1 " + nodeAdded2);
        return 0;
    };
    return Startup;
}());
Startup.main();
