import { ListBuilder } from 'constraint-list-builder'
import { correctDef } from './data/correct.def'

class Startup {
    public static main(): number {
        console.log('Creating list builder');
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

        return builder.getList().length;
    }
}

Startup.main();