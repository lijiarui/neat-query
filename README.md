# neat-query
neat-query change complex Chinese query to a neat one then NLU platform can learn

It will prprocess all data before put in NLU platform.

# Feature
* Change all blanks to English `,`
* Change Chinese punctuation to English punctuation

# Example
```ts
import { NeatQuery } from 'neat-query'

console.log(NeatQuery.convert('不要太晚了 6、7点飞就可'))
// Output: 不要太晚了,6,7点飞就可
```