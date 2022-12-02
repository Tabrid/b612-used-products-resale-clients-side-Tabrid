import { useEffect, useState } from "react"

const useBuyer = email =>{
    const [isSeller,setIsSeller] = useState(false);
    useEffect( () =>{
        if(email){
            fetch(`https://finnal-project-server.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsSeller(data.isSeller);
            })
        }
    }, [email])
    return[isSeller]
}
export default useBuyer;