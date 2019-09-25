
let regular =  5.82333333//avg of low, med, high meat-eaters
let pesc = 3.91
let veg = 3.81
let vegan = 2.89
function dietToCo2(diet) {  
    //Should be a switch statement but I am so tired
    if (diet === "Vegetarian") { 
        return 5.82333 - veg
    } else if (diet === "Vegan")  {
        return 5.82333 - vegan
    } else if (diet === "Pescetarian")  {
        return 5.82333 - pesc
    } else if (diet === "Regular")  {
        return 0
    } 
}

function calculateFullTime(diet){
    return diet * 365
}

function calculatePartTime(diet, frequency, unit){
    dietToCo2(diet)
    let regular = 5.82333333 //avg of low, med, high meat-eaters
    if (frequency === "week"){
        return diet * (frequency/7 + regular*(1-frequency)/7) * 365}
    else if (frequency === "month"){
        return diet * frequency / 30 + regular*(1 - frequency) / 30}
    else if (frequency === "day"){
        return diet * frequency/3 + regular*(1-frequency)/3}}