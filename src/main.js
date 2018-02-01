"use strict";
exports.__esModule = true;
var constraint_list_builder_1 = require("constraint-list-builder");
var correct_def_1 = require("./data/correct.def");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('---------------------');
        console.log('Creating list builder');
        console.log('---------------------');
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
        var nodeAdded3 = builder.addNode({
            'id': 'node2',
            'otherData': 'someOtherData'
        });
        console.log("node2 can follow node node1 so this will be added - node added status " + nodeAdded3 + "-");
        var nodeFail2 = builder.addNode({
            'id': 'node3',
            'otherData': 'more other data'
        });
        console.log("node3 cannot follow node2 so this won't be added - node added status: " + nodeFail2 + "-");
        console.log("\n");
        console.log('---------------------');
        console.log("Getting information from builder");
        console.log('---------------------');
        console.log("get the full list");
        builder.getList().forEach(function (e) { return console.log(e); });
        console.log('\n');
        console.log("get the full definition file");
        builder.getDefinition().forEach(function (e) { return console.log(e); });
        console.log('---------------------');
        return builder.getList().length;
    };
    return Startup;
}());
Startup.main();
