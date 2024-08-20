//array;
//map;
//filters;
 //--------------------------------------------------------------------------------------------
//jab map create kiya jata he tb ek blank array creat hote he jo array
//array ke size ka hota he but usme blank spaces me ham apne array ki value dal ke 
//operation perform kr sakte he;
//Exsample:-

const arr=[1,2,3,4];
let ans=arr.map((val)=>{
    return 13; 
})
//console krne pr ans ke andar {13,13,13,13}aayega;
const arr2=[1,2,3,4];
let ans2=arr2.map((val)=>{
    return val*2;
})//console ans 2 ke andar sari value 2 se multiply ho jayegi;
//{2,4,6,8};

//*Filters:- fiters always works on true $ false ;
//jb kuchh condions lgake arr ko filter karna hota he tb filtr use krte he 
const arrf=[1,2,3,4,5];
let ansf=arr.filter((val)=>
{
    if(val<3) return true;
    else return false //this statement is optional;
})
//console.log(ansf); //{1,2} milega;
//find
const d=arr.find((val)=>{
    if(val==2)return true;
});
//console.log(d);//ans will be 2;