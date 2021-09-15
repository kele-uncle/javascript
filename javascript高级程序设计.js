// function   saihi(){
//     alert('hello')
// }
// saihi()

// var的作用域问题,声明的范围是函数作用域
// function test(){
//     var message = 'hello';
//     console.log(message)
// }
// test()
// console.log(message)

// function test(){
//     message = 'hello';
//     console.log(message)
// }
// test()
// console.log(message)

// let  的作用域：块级作用域
// if(true){
//     let hello = 'hello';
//     console.log(hello)
// }
// console.log(hello)
// if(true){
//     var hello = 'hello';
//     console.log(hello)
// }
// console.log(hello)

// console.log(hello)
// var hello = 'hello';
// 关于全局声明，var  声明的变量会被当做widows对象来执行，但是let声明的变量不会当做windows对象执行
// var name = 'xiaogang';
// console.log(window.name);
// let age = 28;
// console.log(window.age);

// let  age = 18
// let age = 19
// console.log(age)

// for(var i = 0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

// 数值转化：调用typeOf方法，判断是否是number类型，如果是number类型，使用tostring，在转换为number类型

// let  value = 'xiaogang'
// let hello = `${value} is handsome`插入的值会被tostring()转换为字符串,
// console.log(hello)



// let hello = new Object();
// hello.name = 'xiaogang'
// console.log(hello.name)


// let person = new Object()
// console.log(person instanceof Object)

// var color = 'blue'
// function changecolor(){
//     let anothercolor = 'red'
//     function swapcolor(){
//         let temcolor = anothercolor;
//         anothercolor = color;
//         color = temcolor;
//         //这里可以访问定义的三个变量，temcolor、color、anothercolor
//     }
//     swapcolor();// 这里访问不到temcolor
// }
// changecolor();//  这里只能访问color

// for(let i=0;i<5;i++){
//     console.log(i)
// }
// console.log('this is out :', i)


// let somedata = new Date("may 23,2019")
// console.log(somedata.toTimeString())

// let message = 'i am xiaogang'
// console.log(message.charAt(5))//  charAt  返回给定索引位置的字符
// console.log(message.charCodeAt(5))// chartcodeat  查看指定码元的字符编码
// console.log(String.fromCharCode(97))// fromcharcode 根据码元创建字符
// // 字符串操作方法
// console.log(message.concat('i am handsome'))// concat   拼接字符
// // 位置方法
// console.log(message.indexOf("i"))//  with bagain to search code
// console.log(message.lastIndexOf("i"))// with  end to search code
// // trim  删除字符串中前后所有的空格 ，返回结果，righttrim和lefttrim去除右边和左边的空格，就像Python中的strip
// // padstart and  padend  
// let hello = 'hello'
// console.log(hello.padStart(6,"-"))


// function displayinfo(args){
//     let output = '';
//     if(typeof args.name == "string"){
//         output +='name:'+args.name +"\n"
//     }
//     if(typeof args.age == 'number'){
//         output += 'age:'+args.age+'\n'
//     }
//     console.log(output)
// }
// displayinfo({
//     name:'xiaogang',
//     age:'28'
// })

// let  hello = new Array();
// console.log(Array.isArray(hello))
// console.log(hello instanceof Array)
// const a = [1,2,3]
// console.log(Array.from(a.keys()) )
// console.log(Array.from(a.entries()))
// console.log(Array.from(a.values()))
// console.log(a instanceof Array)

// //  栈方法  pop:从栈的末尾删除一个元素，并返回,push像末尾增加元素，返回增加的长度
// let color = new Array()
// let count = color.push('red','hot')
// console.log(color,count)
// //  队列方法  先进先出   从队头使用shirt()删除数组的第一项，并返回，数组长度减一。unshirt()在数组开头添加任意多个值，并返回新的数组长度
// console.log(color.unshift('hello','xiaognag'),color)
// // 排序方法  sort() and reverse()
// console.log(color.reverse(),color.sort())
// //  slice():两个参数，开始参数和结束参数，结束不包含当前索引对应的参数
// console.log(color.slice(1,3))
// //  严格相等
// let number = [1,2,3,4,5,5,4,3,2,1]
// console.log(number.indexOf(5))
// console.log(number.lastIndexOf(5))
// console.log(number.includes(7))
// //  断言相等
// number.find((Element,index,array)=>{
//     console.log(Element);
//     console.log(index);
//     console.log(array);
//     return Element === 5

// })
// number.findIndex((Element,index,array)=>{
//     console.log(Element);
//     console.log(index);
//     console.log(array);
//     return Element < 5

// })

//  迭代方法
// let number = [1,2,3,4,5]
// console.log(number.every((element,index,array)=> element > 4))
// //  every 只要有一个不满足条件，就返回false
// console.log(number.some((element,index,array)=>element > 2))  
// // some   只要有一个满足。就返回true
// console.log(number.map((item,index,array)=>item * 2))   
// //  map  将数组每个元素进行函数的操作并返回值
// console.log(number.filter((element,index,array)=> element > 4))
// //  filter   返回满足条件的元素
// // console.log(number.forEach((element,index,array)=>{
// //     element > 4
// // }))
// console.log(number.reduce((pre,cur,index,array)=> pre+cur))
// //  Map   集合   键值对  使用任何javascript数据类型作为键
// const a = new Map();
// a.set("k","v").set('k2','v2').set("k3","v3").set("k4","v4").set("k5","v5");
// console.log(a);
// a.delete("k2");
// // a.clear()
// console.log(a)
// //   Set   add() add key,has()=>search key,size()=>get the number of elements,delete()=>delete elements,clear()=>clear elements
// function selectionSort(arr) {
//     var len = arr.length;
//     var minIndex, temp;
//     console.time('选择排序耗时');
//     for (var i = 0; i < len - 1; i++) {
//         minIndex = i;
//         for (var j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {     //寻找最小的数
//                 minIndex = j;                 //将最小数的索引保存
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     console.timeEnd('选择排序耗时');
//     return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// 冒泡排序
// var smallnumber = function(arr,k){
//     var maopao = function(arr){
//         var temp = 0;
//         for(var i = 1; i<arr.length; i++){
//             for(var j = 0;j<arr.length;j++){
//                 if(arr[j]>arr[j+1]){
//                        temp = arr[j];
//                        arr[j] = arr[j+1];
//                        arr[j+1] = temp
//                 }
//             }
//         }
//         return arr
//     }
//     let newnumbwe = maopao(arr)
//     var new_arr = []
//     for(var i=0;i<k;i++){
//         new_arr.push(newnumbwe[i])
//     }
//     return new_arr
// }
// arr = [8,4,3,7,5,6,2,5,9]
// console.log(smallnumber(arr,5))


//  选择排序
// function selecttionsort(arr){
//     var temp;
//     var minnuber;
//     var len = arr.length;
//     for(var i = 0; i< len - 1;i++){
//         minnuber = i
//         for(var j = i + 1;j<len;j++){
//             if(arr[minnuber]>arr[j]){
//                 minnuber = j
//             }

//         }
//         temp = arr[i];
//         arr[i] = arr[minnuber]
//         arr[minnuber] = temp

//     }
//     return arr
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(selecttionsort(arr));


// ###############################################
// 迭代的理解
// let hello = ['foo','hello','keleuncle']
// hello.forEach((item)=>console.log(item))
// let arr = ['foo','hello'];
// console.log(arr[Symbol.iterator]);
// let iter = arr[Symbol.iterator]();
// console.log(iter)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

//  面向对象
// let book = {}
// Object.defineProperties(book,{
//     year_:{
//         value:2021
//     },
//     edition:{
//         value:1
//     },
//     year:{
//         get:function(){
//             return  this.year_;
//         },
//         set:function(newyear){
//             if(newyear>2021){
//                 this.year_ = newyear;
//                 this.edition += newyear-2021
//             }

//         }
//     }
    
// })
// console.log(Object.getOwnPropertyDescriptors(book))
// const keyname = 'name';
// const keyage = 'age';
// const keyjob = 'job';
// let count = 0;

// function addjia(key){
//     return `${key}_${count++}`
// }
// let person = {
//     [addjia(keyname)]:'xiaogang',
//     [addjia(keyage)]:18,
//     [addjia(keyjob)]:'software'
// }
// console.log(person)
// 方法名的简写
// let person = {
//     neme_:'',
//     get name(){
//         return this.neme_;
//     },
//     set name(name){
//         this.neme_ = name;
//     },
//     sayname(){
//         console.log(`my name is ${this.name_}`)
//     }
// }
// person.name  = 'xiaogang'
// console.log(person.name)

// console.log(person.sayname())
//  对象的解构
// let person = {
//     hello:'hello',
//     age:28
// };
// 属性名一样的情况下可以简写
// let { hello, age } = person
// console.log(hello)

// let {hello : helloname,age:helloage} = person
// console.log(helloname);
//  给事先定义的变量赋值，赋值的表达式必须在一对括号中
// let hellohelo ;
// ({hello:hellohelo} = person)
// console.log(hellohelo)
// 嵌套解构
// let personcopy = {};
// ({hello:personcopy.name,age:personcopy.age} = person);
// console.log(personcopy.name)
//  创建对象  工厂模式
// function createperson(name,age,job){
//     let person = new Object();
//     person.name = name;
//     person.age = age;
//     person.job = job;
//     person.sayhi= function(name){
//         console.log(name)
//     }
//     return person
// }
// let person1 = createperson('xiaogang',18,'software')
// console.log(person1)

// 构造函数模式
// function hello(name){
//     this.name = name;
//     this.sayhi = saihi;
// }
// function saihi() {
//     console.log(this.name);
// }
// let person1 = new hello('hello');
// person1.sayhi();

// 原型模式
// function person(){}
// person.prototype.name = 'xioagang';
// person.prototype.age = '18';
// person.prototype.saihi = function(){
//     console.log('我是原型方法')
// }
// let person1 = new person()
// person1.name = 'xioahuanghua';
// console.log(person1.name)
// delete person1.name
// console.log(person1.name)
// console.log(person1.hasOwnProperty('name'))
// let keys = Object.keys(person.prototype)
// console.log(keys)

//  原型链
// function xiaogang(){
//     xiaogang.prototype = true;
// };
// xiaogang.prototype.getxiaogangvalue = function(){
//     return this.prototype
// };
// function xiaohuanghua(){
//     xiaohuanghua.hello = false;
// };
// xiaohuanghua.prototype = new xiaogang()
// xiaohuanghua.prototype.getxiaohuanghuavalue = function(){
//     // return this.hello
//     return   false
// };
// let miss = new xiaohuanghua()
// console.log(miss.getxiaohuanghuavalue())


// function xiaogang(name){
//     this.name = name;
//     this.color = ['red','blue']
// }
// function xiaohuanghua(){
//     xiaogang.call(this, "heehhe");
//     this.age = 19
// }
// let hello = new xiaohuanghua()
// console.log(hello.name)
// console.log(hello.color)

// function xiaogang(name){
//     this.name = name;
//     this.color = ['red','blue']
// }
// function xiaohuanghua(name,age){
//     xiaogang.call(this, name);
//     this.age = age
// }
// let hello = new xiaohuanghua('我是继承对的名字',18)
// hello.color.push('old')
// console.log(hello.name)
// console.log(hello.color)

//   关于继承，在javascript中，继承是在原型的基础上继承，也就是说，当A继承B的时候，B的实例成了A的属性，在访问A的属性时候，如果A的实例上有这种属性，那么就返回实例上的属性，如果没有，就返回原型上的属性，也就是B的实例，相应的，B的实例上没有，那么就返回B的原型上的属性，这就是原型的搜索机制，在继承的对象上使用call或者apply，继承的对象继承了被继承对象的全部属性。

//  类 class 
// class Animal{
//     constructor(name){
//         console.log('wobeidiaoyongle ',name)
//     }
// }
// let A = new Animal
// console.log(A)   类里面使用constructor关键字创建构造函数，在类被new关键字创建的新实例的时候，自动调用这个构造函数。在床创建的新实例中，如果有参数，那么这个参数会用作构造函数的参数，如果没有参数，那么类后面的参数也是可选的。

// let p = new class Animal{
//      constructor(x){
//          console.log(x)

//      }
// }('hello');
// console.log(p)

// class Person{
//     constructor(){
//         this.locate  = () =>console.log('instance')
//     }
//     locate(){
//         console.log('prototype')
//     }
// }
// let P = new Person();
// P.locate();
// Person.prototype.locate();
// 为了在实例中共享方法，在类块中定义的方法称为原型方法。

//  静态类方法，用于不特定于实例的操作，也不要求存在类的实例。用static 作为前缀
// class Animal{
//     constructor(){
//         console.log('i am constructor methods')
//     }
//     locate(){
//         console.log('i am yuanxing methods')
//     }
//     static locate(){
//         console.log('i am static methods')
//     }
// }
// let A = new Animal()
// A.locate();
// Animal.locate()

// 类的继承机制，使用extends关键字，继承的类可以获得被继承的类的constructor和原型的对象。在类的继承中，this的指向反映调用的实例或者类
// class vihicle{
//     idvihicle(id){
//         console.log(id,this);
//     }
//     static identificlass(id){
//         console.log(id,this)
//     }
// }
// class bus extends vihicle{}
// let V = new vihicle()
// let B = new bus()

// V.idvihicle('i am vihicle')
// B.idvihicle('i am bus')

// vihicle.identificlass('i am vihicle ')
// bus.identificlass('i am bus')


// class Person{}
// class Animal extends Person{
//     constructor(){
//         super();
//         console.log(this)
//     }
// }
// let p = new Animal()
// p

//  代理和反射

// const target = {
//     id:'target',
//     target:'target'
// }
// const handle = {
//     get(tarptarget,prototy,receiver){
//         let decoration = ''
//         if(prototy == 'target'){
//             decoration = 'this is';
//         }
//         return  decoration+ Reflect.get(...arguments);
//     }
// }

// const {proxy,revoke} =  Proxy.revocable(target,handle);
// console.log(proxy.target)
// console.log(target.target)
// revoke();
// console.log(proxy.target)


// function hello(){
//     console.log('hello '+ arguments[0]+arguments[1])
//     console.log(arguments.length)
// }
// hello('xiao','gang')


// function hello(){
//     if(!new.target){
//         throw 'must using new'
//     }
//     console.log('this is using new to create')

// }
// new hello()
// hello()

// function sum(a,b){
//     return   a+b;
// }
// function tosum(num1,num2){
//     return sum.apply(this,arguments)
// }
// console.log(tosum(10,10))

// function sum(a,b){
//     return   a+b;
// }
// function tosum(num1,num2){
//     return sum.call(this,num1,num2)
// }
// console.log(tosum(10,10))

// window.color = 'red';
// var o= {
//     color:'blue'
// }
// function showcolor(){
//     console.log(this.color)
// }
// showcolor.call(o)

// (function(){
//     for(var i=1;i<10;i++){
//         console.log(i)
//     }
// })();

// let x = 3
// setTimeout(()=>console.log(x+1),2000)
// console.log(x)

// new Promise((resolve,reject)=>{
//     setTimeout(resolve(5),1000)
// }).then((x)=>console.log(x))

// new Promise((resolve,reject)=>{
//     resolve()
// }).finally(()=>{
//     console.log('i am finally')
// })

// let p = Promise.all([
//     Promise.resolve(),
//     Promise.reject(),
//     Promise.resolve()
// ])
// setTimeout(console.log,1000,p)

// Promise.race([
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('woshiyimiao')
//         },1000)
//     }),
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('woshiliangmiao')
//         },2000)
//     })
// ]).then((hello)=>{
//     console.log(hello)
// })

// async function foo(){
//     console.log(1);
//     return 3
// }
// foo().then(console.log)
// console.log(2)




// async function foo(){
//     console.log(1)
//     await Promise.reject(' i am mistake')
//     console.log(4)
// }

// foo().then(null,console.log)
// console.log(2)


// async function foo(){
//     console.log(2)
//     await null
//      console.log(4)
// }
// console.log(1)
// foo()
// console.log(3)