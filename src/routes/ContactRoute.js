import Router from "router";
import { IdentityContoller } from "../controllers/IdentityController.js";
const identityRouter = Router();

identityRouter.post("/identify", IdentityContoller);

export { identityRouter };
