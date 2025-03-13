# 选择基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 设置国内 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目代码
COPY . .

# 执行构建命令，生成 dist 目录
RUN npm run build

VOLUME /app/dist