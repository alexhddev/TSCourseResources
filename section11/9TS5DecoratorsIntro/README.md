# TypeScript 5 decorators - ES stage 3

Wrapper functions that can be attached to:

- Classes
- Class fields
- Class accessors (auto accessors)
- Class methods (public and private)

> Observation: function parameters are not supported anymore (problem with libraries that use them(NestJs))

Different structure and stronger types for decorators.
```
type Decorator = (target: Input, context: {
  kind: string;
  name: string | symbol;
  access: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  private?: boolean;
  static?: boolean;
  addInitializer?(initializer: () => void): void;
}) => Output | void;
```

> Let's check the some examples(old and new)
