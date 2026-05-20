export const fetchDoctors=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`);
    const data= res.json();

    return data || [];
}

