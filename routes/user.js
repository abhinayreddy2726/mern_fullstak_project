import express from express
import {
    getUser,
    getUserFriends,
    addRomveFriends,
} from ""
import { VeriftToken, verifyToken } from "../middleware/auth.js"

const router =express.Router()

router.get("/:id" ,verifyToken,getUser)
router.get("/:id/friends" ,verifyToken,getUserFriends)


router.get("/:id/:friendsId" ,verifyToken,addRomveFriends)

export default router