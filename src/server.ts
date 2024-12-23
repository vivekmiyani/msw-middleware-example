import { createServer } from "@mswjs/http-middleware";

import { handlers } from "./handlers";

const server = createServer(...handlers);

server.listen(9090);
