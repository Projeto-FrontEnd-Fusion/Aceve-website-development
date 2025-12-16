import { chain } from "./middlewares/chain.middleware";
import { cookieAuth } from "./middlewares/cookie.middleware";
import { subdomain } from "./middlewares/subdomain.middleware";

export default chain([
  cookieAuth,
  subdomain,
]);

export const config = {
  matcher: [
    "/((?!_next|[\\w-]+\\.\\w+).*)",
  ],
};

