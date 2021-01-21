# Styled Components

## Why Styled Components?

Apart from helping you to scope styles, styled components include the following features:

1. **Automatic vendor prefixing**

   You can use standard CSS properties, and styled components will add vendor prefixes should they be needed.

2. **Unique class names**

   Styled components are independent of each other, and you do not have to worry about their names because the library handles that for you.

3. **Elimination of dead styles**

   Styled components remove unused styles, even if they’re declared in your code.

## How to Install

In your projects terminal, run this command:

    npm i styled-components

Then to add it to your component, you should add this line to your imports:

    import styled from "styled-components";

## Example

```
  import styled from "styled-components";

  const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
  `;

  function Component() {
    return <StyledButton> Login </StyledButton>;
  }
```
