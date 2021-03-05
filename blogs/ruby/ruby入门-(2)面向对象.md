# ruby 入门

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