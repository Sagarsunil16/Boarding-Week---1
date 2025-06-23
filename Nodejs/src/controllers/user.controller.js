import User from "../model/user.model.js"

class UserController{
    async welcome(req,res,next){
        try {
            res.status(200).json({message:"Welcome Sagar"})
        } catch (error) {
            res.status(500).json({error:"Internal server issue"})
        }
    }

    async welcomeWithName(req,res,next){
        try {
            const {name} = req.body
            if(!name){
               return res.status(400).json({message:"All fields are required"})
            }
            res.status(200).json({message:`hello ${name}`})
        } catch (error) {
           next(error)
        }
    }

    async testError(req,res,next){
        try {
            throw new Error("Error checking")
        } catch (error) {
            next(error)
        }
    }

    async addition(req,res,next){
        try {
            const {a,b} =  req.params
            const sum = Number(a) + Number(b)
            res.status(200).json({sum})
        } catch (error) {
            next(error)
        }
    }

    async searchQuery(req,res,next){
        try {
            const {q} = req.query
            console.log(q)
            res.status(200).json({search:q})
        } catch (error) {
            next(error)
        }
    }

    async createUser(req,res,next){
        try {
            const {name,email,age} = req.body
            if(!name || !email || !age){
                return res.status(400).json({message:"All fields are required"});
            }
            const existUser = await User.findOne({email})
            if(existUser){
                return res.status(400).json({message:"User already exists"})
            }
            const newUser =  await User.create({
                name,
                email,
                age
            })
            newUser.save()
            res.status(200).json({message:"User created successfully"})
        } catch (error) {
            next(error)
        }
    }

    async getUserById(req,res,next){
        try {
            const {id} = req.params
            if(!id){
                return res.status(400).json({message:"Id is required"})
            }
            const user =  await User.findById(id)
            if(!user){
                return res.status(404).json({message:"User not found"})
            }

            res.status(200).json({message:"User found successfully",user})
        } catch (error) {
            next(error)
        }
    }

    async deleteUserById(req,res,next){
        try {
            const {id} = req.params
            if(!id){
                throw new Error("Id not found")
            }
            const user = await User.findById(id)
            if(!user){
                return res.status(404).json({message:"User not found"})
            }
            const result = await User.findByIdAndDelete(id)
            return res.status(200).json({message:"User deleted successfully",result})
        } catch (error) {
            next(error)
        }
    }
}

export default UserController