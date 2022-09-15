import Router from 'express-promise-router'
import { signinHandler, signupHandler } from '../controllers/auth.controller';
import { schemaValidator } from '../middlewares/schemaValidator'
import { SignupSchema } from '../schemas/auth.schema';

const router = Router()

router.post("/signin",  signinHandler)
router.post("/signup", schemaValidator(SignupSchema) , signupHandler)

export default router ;