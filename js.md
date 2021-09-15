# Javascript

argument：获取传的所有参数

rest:获取除了所需的参数以外的所有参数

javascript引擎执行过程中，会自动提升变量的声明，但是不会提升变量的赋值

在编写代码的过程中，不规范命名变量。那么所有的全局变量都会绑定在windows中，不同的js文件，适用了相同的全局变量，就会发生冲突

将自己的代码放在自己的命名空间中，降低全局冲突的问题

```javascript
var kekeshushu = {};
keleshushu.name = 'xiaogang';
keleshushu.add = function(a,b){
    return a+b;
}
```

作用域 中的 `let` 和`const`

关于let和const，是在es6中引入

**let**

```javascript
for(var i = 0;i < 100;i++){
    console.log(i);//会输出到99
}
console.log(i)//会输出101
```

使用var没有强调作用域的概念，即在代码块中的变量可能在外部被其他的操作弄`脏`

```javascript
for(var i = 0;i < 100;i++){
    console.log(i);//会输出到99
}
console.log(i)//会报错，i is not defined
```

**const**

在es6之前，常量的定义是大写，在代码的编写过程中，遇见大写的变量名，约定俗成当做常量，不会进行修改，es6出现之后，就使用const进行定义

```javascript
const i = 'xiaogang'
let i = 'hello'  //typeerror:assignment to constant variable
```

**apply**

```javascript
function getage(){
      var now = new Date().getFullYear();
      return now - this.birthday;
         };
var  xiaogang = {
      name:'xiaogang',
      birthday:2020,
      age : getage
         };
getage.apply(xiaogang,[]);
```

在javascript中使用this，this的指向是当前所属于的对象，可以使用apply来控制this的指向，在上面的代码中，`xiaogang`对象的age属性调用getage方法，在10 行中使用apply来实现this的指向改变问题，最后使用xiaogang.age来实现对年纪的计算

JSON

JSON.stringify  对象转换为json字符串

JSON.parse   json字符串转换为对象

面向对象编程

**面向对象原型继承**

关键字：`__ proto__`

代码

```javascript
var stuedent = {
        name:'xiaogang',
        age: 18,
        run: function(){
        console.log(this.name + 'is love you too')
             }
         };
var xiaozhang = {
         name:'xiaozhang'
         }
xiaozhang.__proto__ = stuedent
```



使用`proto`让**xiaozhang** 原型是**student**，那么就可以使用**student**的**run**方法

**面向对象class继承**

```javascript
class lover{
      constructor(name){
                 this.name = name;
             }
     love(){
                 alert('will always love me ?')
             }
         }
class like extends lover{
      constructor(name,how_long){
      super(name);
      this.how_long = how_long;
      }
   will_like(){
          alert(this.name + '  will always like you ' + this.how_long  );
             }
         }
var  xiaogang = new lover('xiaogang')
var xiaozhang = new like('xiaozhang','forever')
```

**对象的调用**

```javascript
let object = {
    fisrtname:'hello',
    lastname:'xiaogang',
    funlname:function(){
        return this.firstname + this.lastname;
    }
}
object.funname()//使用括号调用方法，没有括号返回
```

**箭头函数**

```javascript
// const aaa = function(a,b){
//     return a+b
// }
// console.log(aaa(1,2))
// 普通函数到箭头函数的变化
//  去掉function，在括号后面加上箭头
//   function(){}
//    ()=>{}
//    const aaa = function(){}
//     const aaa =(){}
// const aaa = num => num + num
// console.log(aaa(5))   当函数中只有一个参数时候，可以省略掉括号

// const aaa = (a,b) => a+b    当函数体中只有一条语句时候，可以省略return和方括号
// console.log(aaa(1,2))

// setTimeout(function(){
//     console.log(this)
// })
// setTimeout(function(){
//     console.log(this)
// })
// setTimeout(()=>{
//     console.log(this)
// })     将函数作为一个参数传给其他函数时候，适合用箭头函数
// const obj = {
//     aaa(){
//        setTimeout(function(){
//     console.log(this)
//            })
//           setTimeout(()=>{
//     console.log(this)
//             }) 
//     }
// }
// console.log(obj.aaa())
// const obj = {
//     aaa() {
//         setTimeout(function(){
//             setTimeout(function(){
//                 console.log(this);    window对象
//             })
//             setTimeout(()=>{
//                 console.log(this)    window对象
//             })
//         })
//          setTimeout(()=>{
//              setTimeout(function(){
//                  console.log(this)    window对象
//              })
//              setTimeout(()=>{
//                  console.log(this)     obj对象
//              })
//          })
//     }
// }
// console.log(obj.aaa())   箭头函数中的this，会一层一层的向外找对象，
```

## 第四章  变量、作用域和内存

### 宏观任务，微观任务和event loop

经典片段

具体的网址https://juejin.cn/post/6844903657264136200#heading-0

```javascript
setTimeout(_ => console.log(4)) //setTimeout作为一个经典的宏任务，当代码执行到这一条时候，会将这个任务放在任务队列中，执行完毕之后才会在任务队列中取出

new Promise(resolve => {
  resolve()

  console.log(1)
}).then(_ => {
    //  promise.then作为一个微任务,当new promise实例化过程中，里面的代码会同步执行，当实例化完毕，console.log(1)执行，接着执行console.log(2)，.then作微任务，当微任务执行完毕之后才会执行宏任务先执行console.log(3)，然后是console.log(4)
  console.log(3)
})

console.log(2)

```

### 变量、作用域和内存
**原始值和引用值变量复制时候的不同**

复制值：

1、原始值通过变量讲一个原始值复制给另一个原始值时候，原始值会被复制到新的变量的位置，两个变量相互独立，互不干扰。

2、引用值通过一个变量赋给另外一个变量时候，复制的值是一个指针，一个指向堆内存中的指针，完成相应的操作后，两个变量实际上指向的是同一个对象，当一个变量对堆内存中的对象进行操作时候，用另外一个变量也可以访问到相应的变化


### 执行上下文和作用域

上下文在其所有代码都执行完毕之后被销毁，包括定义在它上面的所有变量和函数，
```javascript
var color = 'blue'
function changecolor(){
    let anothercolor = 'red'
    function swapcolor(){
        let temcolor = anothercolor;
        anothercolor = color;
        color = temcolor;
        //这里可以访问定义的三个变量，temcolor、color、anothercolor
    }
    swapcolor();// 这里访问不到temcolor
}
changecolor();//  这里只能访问color
```

内部上下文可以通过作用域链访问外部上下文中的一切，但是外部上下文中不可以访问内部上下文中的任何东西。每个上下文都可以在上一级中去搜索变量和函数，但是不能到下一级中去访问。

### 变量声明

变量如果未经声明就使用，那么就会被声明为全局变量


###  垃圾回收

**标记清理**

垃圾回收程序在执行过程中，会将内存中的所有变量加上标记，然后将所有在上下文中的变量，以及在上下文中的变量引用的变量的标记去掉，然后在此之后再加上标记的变量就是待删除的变量，因为在上下文中访问不到，随后程序做一次垃圾回收清理，收回内存。



**引用计数**

javascript已经不再使用这种方式

## 第五章 基本引用类型

### 原始值包装类型

#### string()

```javascript
let s1  = 'text'
let s2 = s1.substring(2);
```

**在这里，s1是原始值，逻辑上不应该有方法，在这里，后台执行了三步**

* 创建一个string类型的实例
* 调用实例上的方法
* 销毁实例

上面的代码相当于下面这样

```javascript
let s1 = new string('text')
let s2 = s1.substring(2)
s1 = null;
```

**相应的，boolean和number也是这样，自动的隐式创建原始值包装类型，只存在于访问它的那行代码的执行期间，而通过new创建的实例会在离开作用域时候被销毁，意味着不能在执行时候给原始值添加属性和方法**

`example`

```javascript
let s1 = 'some text';   =》  let S1 = new string('some text')
s1.color = 'red';  =>  s1.color = 'red'  执行完毕就被销毁
console.lig(s1.color);  //  undefined    在这里访问不到销毁的color
```

#### string的一些方法

```javascript
let message = 'i am xiaogang'
console.log(message.charAt(5))//  charAt  返回给定索引位置的字符
console.log(message.charCodeAt(5))// chartcodeat  查看指定码元的字符编码
console.log(String.fromCharCode(97))// fromcharcode 根据码元创建字符
// 字符串操作方法
console.log(message.concat('i am handsome'))// concat   拼接字符
// 位置方法
console.log(message.indexOf("i"))//  with bagain to search code
console.log(message.lastIndexOf("i"))// with  end to search code
// trim  删除字符串中前后所有的空格 ，返回结果，righttrim和lefttrim去除右边和左边的空格，就像Python中的strip
// padstart and  padend  
let hello = 'hello'
console.log(hello.padStart(6,"-"))//  还有一个padend方法，有两个参数。第一个参数表示复制的长度，第二个参数表示复制的内容
##########################`输出的结果`##############################################
x
120
a
i am xiaogangi am handsome
0
6
-------hello      hello------
```

## 第六章  集合应用类型

### Array

```javascript

let  hello = new Array();
console.log(Array.isArray(hello))
console.log(hello instanceof Array)
const a = [1,2,3]
console.log(Array.from(a.keys()) )
console.log(Array.from(a.entries()))
console.log(Array.from(a.values()))
console.log(a instanceof Array)

//  栈方法  pop:从栈的末尾删除一个元素，并返回,push像末尾增加元素，返回增加的长度
let color = new Array()
let count = color.push('red','hot')
console.log(color,count)
//  队列方法  先进先出   从队头使用shirt()删除数组的第一项，并返回，数组长度减一。unshirt()在数组开头添加任意多个值，并返回新的数组长度
console.log(color.unshift('hello','xiaognag'),color)
// 排序方法  sort() and reverse()
console.log(color.reverse(),color.sort())
//  slice():两个参数，开始参数和结束参数，结束不包含当前索引对应的参数
console.log(color.slice(1,3))
//  严格相等
let number = [1,2,3,4,5,5,4,3,2,1]
console.log(number.indexOf(5))
console.log(number.lastIndexOf(5))
console.log(number.includes(7))
//  断言相等
number.find((Element,index,array)=>{
    console.log(Element);
    console.log(index);
    console.log(array);
    return Element === 5

})
number.findIndex((Element,index,array)=>{
    console.log(Element);
    console.log(index);
    console.log(array);
    return Element < 5

})

 迭代方法
let number = [1,2,3,4,5]
console.log(number.every((element,index,array)=> element > 4))
//  every 只要有一个不满足条件，就返回false
console.log(number.some((element,index,array)=>element > 2))  
// some   只要有一个满足。就返回true
console.log(number.map((item,index,array)=>item * 2))   
//  map  将数组每个元素进行函数的操作并返回值
console.log(number.filter((element,index,array)=> element > 4))
//  filter   返回满足条件的元素
// console.log(number.forEach((element,index,array)=>{
//     element > 4
// }))
console.log(number.reduce((pre,cur,index,array)=> pre+cur))
//  Map   集合   键值对  使用任何javascript数据类型作为键

```



### Map

```javascript
const a = new Map();
a.set("k","v").set('k2','v2').set("k3","v3").set("k4","v4").set("k5","v5");
console.log(a);
a.delete("k2");
// a.clear()
console.log(a)

```



### Set

```javascript
//   Set   add() add key,has()=>search key,size()=>get the number of elements,delete()=>delete elements,clear()=>clear elements
```

##  第十章 箭头函数

**扩展参数**
```javascript
let values = [1,2,3,4,5]
function sum(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum}
```
javascript  引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中生成函数定义，但是函数表达式必须在遇到的那一刻，才会在执行上下文中生成函数定义

**new.target**
```javascript

function hello(){
    if(!new.target){
        throw 'must using new'
    }
    console.log('this is using new to create')

}
new hello()
hello()
```

**函数属性和方法**
   length属性保存函数定义的命名参数的个数，prototype
   **方法**
   apply() and   call()
   继承
   ```javascript
   function sum(a,b){
    return   a+b;
}
function tosum(num1,num2){
    return sum.apply(this,arguments)
}
console.log(tosum(10,10))

function sum(a,b){
    return   a+b;
}
function tosum(num1,num2){
    return sum.call(this,num1,num2)
}
console.log(tosum(10,10))
   ```
两种方法的使用一样，只是在传递参数的时候不一样，apply的第二个参数将一个数组或者arguments对象传递给继承的函数，call()函数则必须将参数逐个传递给继承的函数，使用这两种方法的好处是将任意对象设置为任意函数的作用域，
```javascript
window.color = 'red';
var o= {
    color:'blue'
}
function showcolor(){
    console.log(this.color)
}
showcolor.call(o)
```
### 闭包函数
---
引用了另一个函数作用域中变量的函数，在定义函数的时候，就会创建相应的作用域链，预装载全局变量对象，并保存在内部的scope中，在调用这个函数的时候，会创建相应的上下文，然后复制scope来创建作用域链，然后创建函数的 活动对象(用作变量对象)，这就意味着，一个被调用的函数其实有两个变量对象，全局的和局部的，在函数执行完毕之后，局部的活动对象会被销毁，剩下全局作用域。
但是闭包就不一样，由于闭包是在函数内部的函数，那么，闭包函数相当于有三个作用域，全局的，外部函数，和自己内部的活动对象，那么在函数被执行完毕后，并不能在执行完毕之后被销毁，因为内部的闭包函数还存在着对函数作用域中的引用，
### 立即执行函数
---
```javascript
(function(){
    for(var i=1;i<10;i++){
        console.log(i)
    }
})();
```
## 第十一章 期约与异步函数
---
异步的行为是为了优化计算量大而时间长的问题，如果在等待其他操作的同时，即使运行其他指令，系统也能保持稳定。
```javascript
let x = 3
setTimeout(()=>console.log(x+1),2000)
console.log(x)
```
`Promise 是异步编程的一种解决方案： 从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。 promise有三种状态：**pending(等待态)，fulfiled(成功态)，rejected(失败态)**；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。`

当代码的嵌套很多，可读和可维护性很差的时候，会给编程带来很多的麻烦，俗称`回调地狱`

promise是用来解决两个问题的：

- 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象
- promise可以支持多个并发的请求，获取并发请求中的数据
- 这个promise可以解决异步的问题，本身不能说promise是异步的

### 使用

**构建一个promise对象**

```javascript
let p = new promise((resolve,reject)=>{
    #使用定时器来模拟网络请求的过程
    setTimeout(()=>{
        resolve('need data')
    },2000)
    setTimeout(()=>{
       reject('need data')
    },2000)
});
p.then((data)=>{
    console.log(data)
});
p,catch((err)=>{
    console.log(err)
})
```

> Promise的构造函数接收一个参数：函数，并且这个函数需要传入两个参数：
>
> resolve:异步操作执行成功之后的回调函数-->then
>
> reject：异步操作执行失败之后的回调函数-->catch

### then 链式操作的用法 

所以，从表面上看，Promise只是能够简化层层回调的写法，而实质上，Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多。所以使用Promise的正确场景是这样的：

> p.then(()=>{
>
> ​       成功之后执行的操作
>
> })

### catch的用法

指定reject的回调

效果和写在then的第二个参数里面一样。不过它还有另外一个作用：在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中

```javascript
let p = new     Promise((resolve,reject)=>{
    // # 使用定时器来模拟网络请求的过程
    setTimeout(()=>{
        resolve('need data')
    },2000)
    // setTimeout(()=>{
    //    reject('need data')
    // },2000)
});
p.then((data)=>{
    console.log(data)
    console.log(hell)输出未定义的函数变量
.catch((err)=>{
    console.log(err)
})
});
```

### all的用法：

谁跑的慢，以谁为准执行回调。all接收一个**数组参数**，里面的值最终都算返回**数组**

```javascript
Promise.all([
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('this is first')
        },2000)}),
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('this is two')
        },1000)
   
    })
]).then((results)=>{
    console.log(results)
})
```
只要有一个期约是拒绝或者是待定，那么整个期约都是拒绝或者待定
```javascript

let p = Promise.all([
    Promise.resolve(),
    Promise.reject(),
    Promise.resolve()
])
setTimeout(console.log,1000,p)//Promise { <rejected> undefined }
```
### race

不会对解决或者拒绝的期约区别对待，只要有一个期约完成，那么race就会包装成为新的期约
```javascript
Promise.race([
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('woshiyimiao')
        },1000)
    }),
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('woshiliangmiao')
        },2000)
    })
]).then((hello)=>{
    console.log(hello)// woshiyimiao 
})
```


### finally

在期约函数转换为解决或者拒绝状态都会执行
```javascript
new Promise((resolve,reject)=>{
    resolve()
}).finally(()=>{
    console.log('i am finally')
})
```
### 异步函数

```javascript
async function foo(){
    console.log(1);
    return 3
}
foo().then(console.log)
console.log(2)
```
使用async让函数具有异步的特征，异步函数使用return语句，这个值会被promise.resolve()包装为一个期约函数
在一个异步函数async中，promise.reject不会被异常函数捕获，会抛出未捕获的错误，但是使用await,将拒绝的期约返回
```javascript
async function foo(){
    console.log(1)
    await Promise.reject(' i am mistake')
    console.log(4)
}

foo().then(null,console.log)
console.log(2)

async function foo(){
    console.log(2)
    await null
     console.log(4)
}
console.log(1)
foo()
console.log(3)
```

## 第十二章  BOM

### BOM 的核心
   bom 的核心是windows对象，表示浏览器的实例
### 窗口
### location
### navigation
### history
