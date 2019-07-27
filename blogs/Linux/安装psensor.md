# 安装 psensor

psensor 可以监控 Ubuntu 的硬件温度信息

## 安装

### 1、安装cpu 主板 风扇等监控需要的包

```
sudo apt install lm-sensors hddtemp
```

### 2、硬件信息侦测

这个步骤下，会一个个硬件询问你是否侦测，反正我也不懂，全部打了 "yes"

```
sudo sensors-detect
```

### 3、重启或通过以下命令加载 sensor需要的模块

```
sudo service module-init-tools start
sudo apt install psensor
```