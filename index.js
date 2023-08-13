let drivers=['jobie','Jobie','sonik','kouki']
let drivers2=[{name:'jobie',hometown:'abc'},
{name:'sonik',hometown:'adc'},
{name:'kouki',hometown:'aec'}]

function findMatching(ary,str){
    return ary.filter(item=> {if(item==str || item.toLowerCase()==str.toLowerCase()){
        return item
    }})}
    console.log(findMatching(drivers,'jobie'))


function fuzzyMatch(ary,str){
    const filternames=ary.filter(item=>{if(item[0]==str[0]){return item}}
    )
    return filternames
}
console.log(fuzzyMatch(drivers,'j'))

function matchName(ary,str){
    return ary.filter(item=>{if(item.name==str ){return item}}
    )}


console.log(matchName(drivers2,'sonik'))