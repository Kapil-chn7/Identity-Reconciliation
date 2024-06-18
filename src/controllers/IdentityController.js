import { PrismaClient } from "@prisma/client";
export async function IdentityContoller(req, res) {
  try {
    const prisma = new PrismaClient();
    const userdata = await prisma.userdata.findMany();

    console.log("this is the req body " + req.body, "user data is " + userdata);
    res.send(200);
  } catch (e) {
    console.log("Error occured " + e);
  }
}
