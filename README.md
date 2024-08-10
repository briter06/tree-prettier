# tree-prettier

Pretty print any tree-like structure. Only provide the functions to retrieve the value of a node and its child nodes.

## Usage

```typescript
import { prettierTree } from 'tree-prettier'

export type CustomNode = {
  value: string;
  children: CustomNode[];
};

const tree: CustomNode = {
  value: "Node1",
  children: [
    {
      value: "Node2",
      children: [
        {
          value: "Node4",
          children: [],
        },
      ],
    },
    {
      value: "Node3",
      children: [],
    },
  ],
};

console.log(prettierTree(tree, node => node.value, node => node.children))
```

This prints the following tree:

```bash
Node1
│─── Node2
│    └─── Node4
└─── Node3
```

The fourth argument of the `prettierTree` function is a configuration object, which ahs the following properties:

Option | Type | Default value
--- | --- | --- 
`lengthOfEdge` | `number` | 4

## License

MIT