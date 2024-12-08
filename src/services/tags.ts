import axios from "axios";
import { TagData } from "../types/tags";

const PORT = import.meta.env.VITE_PORT;




export async function getTags():Promise<TagData> {
    const res = await axios.get(`${PORT}/tags/gettags`)
    console.log(res.data);
    
    return res.data
    
}