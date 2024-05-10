export default function orderByProps(obj, array){
    let resultKeys = [];
    let keys = Object.keys(obj).sort();
    for(const item in keys){
        if(array.includes(keys[item])){
              resultKeys.unshift(keys[item]);
        }
        else{
              resultKeys.push(keys[item]);
        }
    }
  let result = [];
    resultKeys.forEach(key => {
      result.push({ [key]: obj[key]})
    });
  return result;
}