import { ListBuilder } from 'constraint-list-builder'
import { correctDef } from './data/correct.def'

class Startup {
    public static main(): number {
        console.log('Creating list builder');
        let l = new ListBuilder(correctDef);

        let nodeAdded1 = l.addNode({
            'id': 'node1',
            'someOtherValue': 'random'
        });
        console.log(`First node added? ${nodeAdded1}`);

        let nodeAdded2 = l.addFast({
            'id': 'fakeId',
            'someOtherStuff': 'working'
        });
        console.log(`this node wasn't added because ID isn't in the allowed fields of node1 ${nodeAdded2}`);

        return 0;
    }
}

Startup.main();