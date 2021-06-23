var select=document.getElementById("select");
var text=document.getElementById("text");
var result=document.getElementById("result");

text.addEventListener("input",()=>{
    runcode();
});
select.addEventListener("change",()=>{
    runcode();
});
function runcode(){
    if(select.value=="encode"){
    result.value=atob(text.value);
    }else{
        result.value=btao(text.value);
    }
}
