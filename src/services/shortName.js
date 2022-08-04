export const shortName =(string)=>{
    const splited = string.split(" ");
    const resulut = `${splited[0]} ${splited[1]} ${splited[2]}`;
    return resulut;
}