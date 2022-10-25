// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "Wh"},
    {year: "2016", result: "N/A"}
    //...
  ]
  function check(record){
    return record.result==="W";
  }

  function superbowlWin(array){
     const result = array.find(check);
     if(result){
        return result.year;
     }
  }
  superbowlWin(record);
  


