function receivesAFunction (callback){
return callback();
}
function returnsANamedFunction(){
const namedFn = () => {};
return namedFn;
}
function returnsAnAnonymousFunction(){
    return function (){};
}