import React from "react";

import { storiesOf } from "@storybook/react";

const Button: React.FC = ({ children }) => <div>{children}</div>;

storiesOf("Button", module).add("with text", () => <Button>hello</Button>);
