import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 } // optional: auto delete after 7 days
});

const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);
export default BlacklistToken;
