 ### WINDOWS 文件检测

sfc /SCANNOW
Dism /Online /Cleanup-Image /ScanHealth
Dism /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-image /RestoreHealth

### 查看WINDOWS睡眠具体被谁唤醒

powercfg -a
powercfg -lastwake

### git命令

git init
git branch -M main
git remote add origin 链接
git add .
git commit -m "first commit"
git push /*-u origin main*/

### 梯子订阅链接

https://xn--cp3a08l.com/api/v1/client/subscribe?token=abeef6dc35cdc924d7e0ec1c2506c39f
https://d7b12d59-21aa-9561-087f-89c834ac7fe8.372372.xyz/api/v1/client/subscribe?token=43a859a1f643ee3b5c03cbd2cdeed3a0

### openwrt openclash 自定义规则

https://github.yuxianzi666.xyz/clashrule/clash\_reject.yaml
https://github.yuxianzi666.xyz/clashrule/clash\_proxy.yaml
https://github.yuxianzi666.xyz/clashrule/clash\_direct.yaml

### NMware tools 历史版本拉取命令

wget -c -r -np -k -L -p https://packages.vmware.com/tools/releases/

### ubuntu 24 更改软件源

sudo vim /etc/apt/sources.list.d/ubuntu.sources

Types: deb
URIs: http://mirrors.ustc.edu.cn/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: http://mirrors.tuna.tsinghua.edu.cn/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: http://mirrors.aliyun.com/ubuntu/
Suites: noble noble-updates noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

### docker 命令

docker run -d --restart unless-stopped -p <访问端口>:<docker内部端口> -v <外部路径>:<docker内部路径> --name <自定义名称> <docer 仓库全名>

### ffmpeg 命令

转换视频：ffmpeg -hwaccel cuda -i <输入文件> -c:v h264_nvenc <输出文件>
剪切视频：ffmpeg -hwaccel cuda -i <输入文件> -ss [起始时间00:00:00] -to [结束时间00:00:00] -c:v h264_nvenc <输出文件>
裁剪视频尺寸：ffmpeg -hwaccel cuda -i <输入文件> -vf crop=<宽度>:<高度>:<起始坐标X>:<起始坐标Y> -c:v h264_nvenc <输出文件>

### ubuntu 命令

更新软件源：sudo apt-get update
更新所有软件：sudo apt-get upgrade
更新某个特定软件：sudo apt-get upgrade <软件名>
列出可更新的软件：apt list --upgradable
升级系统版本：sudo apt-get dist-upgrade
查找已安装的软件：sudo apt list --installed | grep <软件名>
卸载软件（仅移除软件包）：sudo apt remove <完整软件名>
卸载软件并删除配置文件及数据文件等：sudo apt purge <完整软件名>
清理不再需要的依赖：sudo apt autoremove
清理所有已下载软件包：sudo apt clean
仅清理已过期或不再维护的软件包：sudo apt autoclean
清理旧内核：sudo apt autoremove --purge

### winget更换源

查看当前winget源：winget source list
删除原winget源：winget source remove winget
修改为中科大的源：winget source add winget https://mirrors.ustc.edu.cn/winget-source
如果要恢复使用 Microsoft 官方源，可以使用以下命令进行重置：winget source reset winget

