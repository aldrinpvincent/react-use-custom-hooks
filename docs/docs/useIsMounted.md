# useIsMounted

This hook is used to check whether the component is mounted or not. This hook will return a function which return a boolean value stating the component is mounted or not on invoking. This will be useful if you want to perform some operation based on component is mounted or not like stop polling an api, update state etc.

## Usage

```typescript
const isMounted = useIsMounted();
if (isMounted()) {
  // continue
}
```

## Examples

## API

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js
const isMounted = useIsMounted();
```

</TabItem>
<TabItem value="ts" label="Typescript">

```typescript
const isMounted: () => Boolean = useIsMounted();
```

</TabItem>

</Tabs>
