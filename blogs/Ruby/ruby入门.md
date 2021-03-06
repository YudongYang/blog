# ruby 入门

## 一、基础语法

### 1、运算符

Ruby 中比较常用的运算符： ``` +  -  *  /  %  ** ```
这个和其他语言基本一致，比较特别的是 ** 这个，表示幂运算

```
2 ** 2
 => 4
2 ** 3
 => 8
```

### 2、数据类型

Ruby 中的数据所有类型都是一个从 Object 继承过来的对象，Ruby 中万物皆对象，这个就不展开了，要说的是 Ruby 常用的又比较特殊的类型：

``` Hash 、 String 、 Array 、 Date 、 Range 、 Symbol ```

至于其他类型，其实和其他语言差别不大。

#### (1) Hash

为什么 Hash 是第一个被拿出来说的类型呢，因为 Ruby 里面的 Hash 类型真的是比较特别，比较常用，又比非常好用的一个类型，类似于 Java 中的 HashTable 和 Go 中的 Map。

Hash 在 Ruby 中，表示一个集合的概念，其表现出来的形式为：

```
{a: 1, b: '2', 'c': true}
 => {:a=>1, :b=>"2", :c=>true}
{:a=>1, :b=>"2", 'c'=>true}
 => {:a=>1, :b=>"2", "c"=>true}
 ```

key 可以是 Symbol 类型或者 String 类型，什么是 Symbol 类型，下面会说的。

然后可以看到我们定义的时候，代码是这种形式的 ``` {a: 1, b: '2', 'c': true} ``` ，但是最后，系统内存储的时候，key 还是 :a 这种形式，``` {:a=>1, :b=>"2", :c=>true} ``` 。

这是两种写法，是因为 :a=>1 这种是旧版本的 key 、 value 的写法，系统内容同时兼容两种写法。

value 则可以是任意类型的对象，这个就不多说了。

那么，Hash 类型为我们提供了哪些方法呢，我们来看一下：

```
h = {a: 1, b: 2}
 => {:a=>1, :b=>2}
h.methods
 => [:to_json,
 :as_json,
 :select!,
 :keep_if,
 :values_at,
 :delete_if,
 :to_h,
 :reject!,
 :assoc,
 :include?,
 :rassoc,
 :compact,
 :compact!
...
```

可以看到，Hash 类型的对象已经内置了很多方法了，如果平时遇到一些操作，可以先来看看有没有现成的方法，一般情况下都是有的，而且顾名思义，看到就基本知道怎么使用，通过代码跳转也可以在源码上找到详细注释。

#### (2) String

String 这个类型和其他语言的差别不大，就是用来储存字符串的。

值得一说的是，String 在 Java 中进行如拼接等操作的时候，需要使用 StringBuffer 等进行处理，否则有内存泄漏问题（ Java 8 之后已经在字节码编译阶段优化了）。而 Ruby 则没有这方面的顾虑，可以大胆使用里面的方法。

#### (3) Array

Array 数组类型也是一个日常操作了，几乎无处不在。

而在 Ruby 中， Array 的主要特点就是，提供了大量非常好用的方法供我们使用，其中大部分的方法实现是基于 c 编写优化的，比我们自己写的效率分分钟还要高。

至于有什么方法，这个等一下会说到几个，但是更多方法请自行挖掘。

本质上来说，Array 是一种特殊的 Hash ，你可以将它看作是 key 为有序数字， value 随意的一种 Hash ，所以他们所拥有的方法也是几乎一样的。

#### (4) Date

Date ，也是一个很厉害的数据类型，其提供的方法之多，使用之便利性，大大甩了很多其他语言几条街，特别是在 Rails 中，对 Date 进行了拓展，使得 Date 和 Time 几乎能独立完成你所有的需求。

例如，要算日期的加减法：

```
2.1.4 :001 > Time.now
 => 2019-04-21 16:38:38 +0800
2.1.4 :002 > Time.now + 1.hour
 => 2019-04-21 17:38:45 +0800
2.1.4 :003 > Time.now + 10.day
 => 2019-05-01 16:38:50 +0800
2.1.4 :004 > Time.now - 5.month
 => 2018-11-21 16:39:02 +0800
 ```

这就非常厉害了，什么闰月闰年，时分秒，年月日，都不用关心，你只需要简单地像做个加减法就可以达到目的。

时间的格式化：

```
Time.now.strftime('%Y-%m-%d %H:%M:%S')
 => "2019-04-21 16:46:17"
 ```

时间格式化上 ，也是可以简单得利用 strftime 这个函数，得到你想要的格式， Ruby 有自己的一套时间格式化标记，常用的就是上面例子中的标记。

Ruby 中的 Date 还提供了一些日常可能需要用到的函数，例如，什么获取月头月尾之类的：

```
Time.now.beginning_of_month
=> 2019-04-01 00:00:00 +0800
Time.now.end_of_month
=> 2019-04-30 23:59:59 +0800
```

总之一句话，非常厉害，非常方便。

更多方法可以自己查看 Time 类 和 Date 类的源码，几乎只要你想到的，都有现成的实现。

#### (5) Range

我们在一般的高级语言中，有部分语言也会有类似 Range 范围，这个类型。其主要达到的目的就是表示一个范围。

例如：

```
(1..10)
=> 1..10
(1...10)
=> 1...1
```

看不懂？我们来 p 一下。对了 p 是在 Ruby 里面一个非常有用的，作为输入的一个函数，可以将任何内容输出。

不过要注意的是，函数的返回值最后不要 p ，以后写项目的代码的时候，不要把 p 提交上来。

```
(1..10).each do |t|
  p t
end
1
2
...
9
10
=> 1..10
(1...10).each do |t|
  p t
end
1
2
...
8
9
=> 1...10
```

这个有什么用呢？呃，就表示一个范围 (1..10) 表示 1 ~ 10 共 10 个数字，(1...10) 表示 1 ~ 9 共 9 个数字。其实实际上，这个用得不多。

然后，each 是一个迭代器，下面会有大量说明的。

#### (6) Symbol

symbol 几乎是 Ruby 特有的一种类型，表现形式为

```
a = :a
```

这里 :a  是像 "a", 1, true 一样，是一种数据类型

symbol 的应用场景多数是在 hash 内作为 key

例如旧版本的 ruby 中，

```
{:a => 1, :b => "b"}
```

在 ruby 1.8 之后，可以使用如下的写法

```
{a: 1, b: "b"}
```

这样子我们写 hash  就非常方便了。

####（7）注释

ruby 的注释也比较特别，单行注释使用的是 # ，多行注释是 =begin 和 =end 配合使用

```
# {a: 1, b: "b"}
```

```
=begin
ruby 的注释也比较特别
单行注释使用的是 #
多行注释是 =begin 和 =end 配合使用
=end
```

### 3、变量

ruby 中的变量部分，可以分为： 变量，常量（类比：静态变量），全局变量，实例变量（类比：对象属性）

```
class Book
  # 这个是常量，但是这个只是常量约定的写法，RUBY_BOOK_NAME 这个值还是可以被修改，如果要真正达到常量不可修改的效果，需要加上 .freeze
  RUBY_BOOK_NAME = "《ruby 完全自学手册》"
  RUBY_BOOK_NAME = "《ruby 完全自学手册》".freeze
  # 这个是全局变量
  @@book_count = 0
  def initialize
    # 这个是实例变量
    @name = RUBY_BOOK_NAME
  end
  def read
    # 这个是变量
    a = 1
  end
end
```

### 4、流程控制

ruby 中的流程控制主要有三种： 顺序，条件和循环

#### （1）顺序

顺序为什么要说？不说了

#### （2）条件

ruby 中条件判断主要通过 if 语句完成

```
if condition1
  do_something_1 ...
elsif condition2
  do_something_2 ...
else
  do_something_3 ...
end
```

单行语法
这种单行语法也算是脚本语言的一大特色了

```
do_something_n ... if condition_n
```

unless 语法， unless 相当于 if !(condition)

```
do_something_m ... unless condition_n
```

需要注意的是，``` if ... elsif ... end ``` 这个语法，一般语言中的写法为 ``` else if ``` ，但是 ruby 中为 ``` elsif ``` ，这个很容易写错！

另外 ruby 中特有一种 unless 的判断条件语法，``` unless condition ``` 相当于 ``` if !(condition) ```

需要注意的是，如果 unless 有 else 分支，建议改为 if 语法，以避免误会，个人建议，如果 unless 中的判断过于复杂，还是使用 if 比较容易理解

#### （3）循环

ruby 中的循环主要通过各种迭代器完成，在 ruby 中，基本强烈推荐使用迭代器

例如，一个简单的循环

```
10.times do |index|
  p index
end
```

例如，遍历数组

```
a = (1..10).to_a
a.each do |a_item|
  p a_item
end
a.each_with_index do |a_item, index|
end
```

例如，遍历 hash

```
a = {a: 1, b: "b", c: :c}
a.each do |key, value|
end
```

我们可以看到，在 ruby 中，迭代器的使用是非常频繁的，因为 ruby 的迭代器实在是太方便好用了。

for ？ while ？ 不说了，没什么事不会用到的，而且跟其他语言是一样的。

除了 each 之外， ruby 中还有一些常用的迭代器，例如： map 和 select

map 可以遍历一个可迭代的对象，参数为迭代的元素，并且返回代码块运行结果，组成一个新的可迭代对象
```
a = [2, 4, 6, 8, 10]
b = a.map{ |a_item| a_item * 2 }
=> [4, 8, 12, 16, 20]
```

select 是遍历一个可迭代对象，参数为迭代的元素，通过代码块的返回结果，可以进行元素的过滤
```
aa = {a: 1, b: 10, c: 100, d: 1000, e: 10000}
bb = aa.select{ |key, value| value > 100 }
=> {:d=>1000, :e=>10000}
```

### 5、迭代器

迭代器，迭代器上面不小心说完了！


## 二、面向对象

ruby 是一门面向对象的语言，在 ruby 中，一切皆对象！

### 1、 Module

Module 模块主要有两个功能，一个是 提供了命名空间，避免冲突，一个是 提供了 mixin 的功能。

注意， ruby 中 class 可以实例化，但是 module 是不可以实例化的。

module 可以被 class 引用， ruby 中没有多继承，所以，需要用到多继承的场景基本上都是使用 module 引用解决。

组合优先于继承。

#### （1）提供命名空间

```
# 例如，如果我们的项目里面同时需要 学校的 user 和 公司的 user
class User
end
# 我们可以把这两个 model 用 module 进行区分
module School
  class User
  end
end
moduel Company
  class User
  end
end
# 当然，以下写法也是可以起到命名空间的区分的
class School::User
end
class Company::User
end
```

#### （2）提供 mixin 功能

```
# 例如，如果我们的项目里面 学校的 user 和 公司的 user 都有一样的 login 功能，那我们就不需要写两次了
module UserLogin
  def login(username, md5_pasword)
    self.class.find_by_username(username).try(:password) == Digest::MD5.hexdigest("#{md5_password}-#{self.salt}")
  end
end
# 我们可以把这两个 model 用 module 进行区分
module School
  class User
    include UserLogin
  end
end
moduel Company
  class User
    include UserLogin
  end
end
```

### 2、命名空间

感觉上面有说了，不过多说一句在  rails 中，命名空间是有约定的。

### 3、类

ruby 中类的概念和其他面向对象设计语言的类的概念类似，理念基本一致。

对比 Java ，ruby 中的类没有 接口，多继承，重载等重要特性。

```
class User

  # 引入 module 
  include UserLogin

  # 定义类的属性，这个相当于定义属性的同时定义了 get 和 set 方法
  attr_accessor :name, :age
  # 构造函数， ruby 没有重载，所以只有一个构造函数
  def initialize(name, age)
    # 属性赋值
    @name, @age = name, age
  end

  # 实例方法
  def say_hello
    # 调用类实例的 属性 self.
    "Hello! I'm #{self.name}. Nice to meet you!"
  end

  # 类方法
  # 静态方法
  def self.say_hello
    "Hello"
  end

  # ruby 中没有重载，但是有重写，同名方法会以最后一个为准进行覆盖
  def self.say_hello
    "Hello World!"
  end

  # 访问控制
  # private protect public
  # 默认是 public
  private def self.internal_say_hello
    "Only Can Be Call In THIS CLASS"
  end

end

# 类方法调用
User.say_hello
#=> "Hello World"
# 类调用构造函数实例化
user = User.new('Ruby', 20)
# 实例方法调用
user.say_hello
#=> "Hello! I'm ruby. Nice to meet you!"
# 属性调用
user.age
#=> 20

# 继承
class School::User < User

  def initialize(name, age)
   super(name, age)
  end

  # 子类方法覆盖父类方法
  def say_hello
    "Hey! Guys! I'm #{self.name}!"
  end

  # 子类独有的方法
  def school_say_hello
    "Hey! Guys! I'm #{self.name}!"
  end
end
```

### 4、include、require、extends、load

课后习题，自行去了解这几个关键字，考试要考的