"use strict";
exports.__esModule = true;
var constraint_list_builder_1 = require("constraint-list-builder");
var correct_def_1 = require("./data/correct.def");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Creating list builder');
        var builder = new constraint_list_builder_1.ListBuilder(correct_def_1.correctDef);
        var nodeAdded1 = builder.addNode({
            'id': 'node1',
            'someOtherValue': 'random'
        });
        console.log("First node added? " + nodeAdded1);
        var nodeAdded2 = builder.addFast({
            'id': 'fakeId',
            'someOtherStuff': 'working'
        });
        console.log("this node wasn't added because ID isn't in the allowed fields of node1 " + nodeAdded2);
        try {
            var nodeFail = builder.addNode({
                'noId': 'will not add'
            });
        }
        catch (e) {
            console.log('adding node without id thows exception ');
        }
        return builder.getList().length;
    };
    return Startup;
}());
Startup.main();
