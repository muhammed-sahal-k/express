import { Router } from "express";
import Auth from './middleware/auth.js'

// import {addData} from "./reqhandeler.js"
import * as rh from './reqhandeler.js'
const router = Router()

router.route('/adddata').post(Auth,rh.addData)
router.route('/getdata').get(rh.getData)
router.route('/getsingledata/:id').get(rh.getSingleData)
router.route('/deletedata/:id').delete(rh.deleteData)
router.route('/adduser').post(rh.ADDUser)
router.route('/login').post(rh.login)
router.route('/update/:id').put(Auth,rh.updateproduct)


export default router