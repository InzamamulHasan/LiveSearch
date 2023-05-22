import React,{useState,useEffect} from "react";

let arr=["Sophia", "Noah", "Olivia", "Liam", "Emma", "Jackson", "Ava", "Aiden", "Isabella", "Lucas", 
"Mia", "Ethan", "Harper", "Oliver", "Charlotte", "Elijah", "Amelia", "Grayson", "Evelyn", 
"Benjamin", "Abigail", "Carter", "Emily", "Henry", "Elizabeth", "Sebastian", "Sofia", 
"Alexander", "Avery", "James", "Ella", "Matthew", "Scarlett", "Michael", "Grace", "Daniel", 
"Chloe", "William", "Victoria", "Joseph", "Madison", "Samuel", "Lily", "David", "Zoey", 
"Gabriel", "Penelope", "Anthony", "Layla", "Andrew"]

const Livesearch=()=>{

    let [name,setName]=useState(arr)
    let [search,setSearch]=useState("");
    console.log(search)
    console.log(name)
    useEffect(()=>{
        let filteredArr=arr.filter((el)=>{
            return el.toLocaleLowerCase().includes(search.toLowerCase());
        })
        if(search===""){
            filteredArr=arr;
        }
        setName(filteredArr);
    },[search])


    return(
        <div className="main-container">
            <div className="head">
                <h1>Live Search</h1>
                <input type="text" placeholder="Search Names" onChange={(e)=>setSearch(e.target.value)} value={search}/>
            </div>
            <div className="cont">
                {
                    name.map((el)=>{
                        return(<div key={el}><h1 >{el}</h1></div>)
                    })
                }
            </div>
        </div>
    )
}
export default Livesearch;