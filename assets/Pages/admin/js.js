let text = localStorage.getItem("cont");
let cont = JSON.parse(text);
for(let i=0;i<cont.length;i++)
    document.getElementById("conttable").innerHTML +=`<tr class="border-collapse border border-zinc-500">
                            <td class="border-collapse border border-zinc-500 p-5">${cont[i].email}</td>
                            <td class="p-5">${cont[i].desc}</td>
                            
                        </tr>`