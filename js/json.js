//javascript object Notation
//JSON 
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);

//property access korte chaile JSON.parse korte hobe . JSON.stringfify diye javascript er property access korte parbona