import { ListBuilder } from 'constraint-list-builder'
import { correctDef } from './data/correct.def'

class Startup {
    public static main(): number {
        console.log('---------------------');
        console.log('Creating list builder');
        console.log('---------------------');
        let builder = new ListBuilder(correctDef);

        let nodeAdded1 = builder.addNode({
            'id': 'node1',
            'someOtherValue': 'random'
        });
        console.log(`First node added? ${nodeAdded1}`);

        let nodeAdded2 = builder.addFast({
            'id': 'fakeId',
            'someOtherStuff': 'working'
        });
        console.log(`this node wasn't added because ID isn't in the allowed fields of node1 ${nodeAdded2}`);

        try {
            let nodeFail = builder.addNode({
                'noId': 'will not add'
            });
        } catch (e) {
            console.log('adding node without id thows exception ')
        }

        let nodeAdded3 = builder.addNode({
            'id': 'node2',
            'otherData': 'someOtherData'
        })
        console.log(`node2 can follow node node1 so this will be added - node added status ${nodeAdded3}-`);

        let nodeFail2 = builder.addNode({
            'id': 'node3',
            'otherData': 'more other data'
        });
        console.log(`node3 cannot follow node2 so this won't be added - node added status: ${nodeFail2}-`)
        console.log(`\n`)
        console.log('---------------------');
        console.log(`Getting information from builder`)
        console.log('---------------------');
        console.log(`get the full list`);
        builder.getList().forEach((e) => console.log(e));

        console.log('\n');
        console.log(`get the full definition file`);
        builder.getDefinition().forEach((e) => console.log(e));
        console.log('---------------------');

        return builder.getList().length;
    }
}

Startup.main();