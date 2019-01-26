# ubuntu16.04 和 windows10 双系统双硬盘安装

这个的情况比较像，介绍得也很详细

[windows10+ubuntu 16.04+双硬盘（SSD+HDD）分区（图文）](https://blog.csdn.net/tuzhenlei/article/details/52098046)

主要不同点在于，我的 SSD 太小，只有 120G ，目前 win10 大概占用 70G ，没有办法在 SSD 分出一个分区用于 / 目录，只能全部装在 HDD 上。

最后的时候，因为以前改过 bosi 设置，使用了 另一种模式（具体名字突然想不起来），所以还要去设置 bosi 为 UEFI 模式，才能使用 ubuntu 自带的那个系统选择功能，不需要使用 easyBSD 了。

如有有足够空间的 SSD ，ubuntu 最快的安装办法估计是直接使用默认配置状态对应的盘上。

