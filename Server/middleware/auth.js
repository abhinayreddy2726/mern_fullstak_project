import Jwt  from "jsonwebtoken";

export const verifyToken = async(req,res,next)=>{
    try{
        let token = req.header("Authorization")

        if(!token){
            return res.this.status(403).send("Access Denide")
        }

        if(token.startwith("Beare")){
            token = token.slice(7,token.lengh).trimLeft()
        }

        const verified = Jwt.verify(token,process.env.JWT_text)
        rwq.user = verified
        next()

    }catch(err){
        res.status(500).json({error : err.message})
    }
}