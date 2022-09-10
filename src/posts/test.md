---
author: Cody Brunner
date: 2022-09-09
excerpt: Testing out Markdown Configuration via astro.config.mjs with Rehype & Remark.
slug: test
title: Testing out Markdown Configuration in Astro
---

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

**BOLD**

_ITALIC_

**_BOLD & ITALIC_**

~~STRIKETHROUGH~~

I am an `inline code block`.

> BLOCKQUOTE FTW!!!

```bash
mkdir my-dir
cd my-dir
pnpm create astro@latest
```

---

```tsx
import { useState } from 'react'

export const Component = () => {
  const [name, setName] = useState('Cody')

  return (
    <div>
      <h1>Hello {name}</h1>

      <form>
        <input
          onChange={({ currentTarget }) => setName(currentTarget.value)} type="text"
          value={name ?? ''}
        />
      </form>
    </div>
  )
}
```
