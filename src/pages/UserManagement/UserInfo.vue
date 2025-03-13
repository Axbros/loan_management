<template>
    <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <!-- 输入框部分 -->
            <div class="input-group">
                <el-form-item label="真实姓名">
                    <el-input v-model="formInline.username" placeholder="姓名" clearable />
                </el-form-item>
                <el-form-item label="证件号码">
                    <el-input v-model="formInline.idcard" placeholder="身份证号码" clearable />
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="formInline.mobile" placeholder="手机号码" clearable />
                </el-form-item>
                <el-form-item label="银行卡尾号">
                    <el-input v-model="formInline.bank_card" placeholder="银行卡后六位" clearable />
                </el-form-item>
            </div>

            <!-- 下拉选择框部分 -->
            <div class="select-group">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <CustomSelect label="用户状态" v-model="formInline.user_status" :options="userStatusOptions" />
                    </el-col>
                    <el-col :span="6">
                        <CustomSelect label="用户来源" v-model="formInline.user_from" :options="userFromOptions" />
                    </el-col>
                    <el-col :span="6">
                        <CustomSelect label="注册终端" v-model="formInline.user_client" :options="userClientOptions" />
                    </el-col>
                    <el-col :span="6">
                        <CustomSelect label="设备类型" v-model="formInline.device_type" :options="deviceTypeOptions" />
                    </el-col>
                </el-row>
            </div>

            <!-- 日期选择器 -->
            <el-form-item label="注册时间">
                <el-date-picker v-model="formInline.register_date" type="date" placeholder="Pick a date" clearable />
            </el-form-item>

            <!-- 按钮部分 -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card style="margin-top:20px">
        <el-table :data="tableData" style="width: 100%" fit >
            <el-table-column fixed prop="username" label="姓名" width="120" />
            <el-table-column prop="idcard" label="证件号码" width="200" />
            <el-table-column prop="mobile" label="手机号码" width="150" />
            <el-table-column prop="bank_card" label="银行卡号码" width="200" />
            <el-table-column prop="user_status" label="用户状态" width="100" >
                <template #default="scoped">
                    <el-tag v-if="scoped.row.user_status === 0 " type="success">正常</el-tag>
                    <el-tag v-else type="danger">异常</el-tag>
                </template>
                </el-table-column>
            <el-table-column prop="user_from" label="用户来源" width="120" />
            <el-table-column prop="user_client" label="注册终端" width="120" >
                <template #default="scoped">
                    <el-tag v-if="scoped.row.user_client === 'ios'" type="success">IOS</el-tag>
                    <el-tag v-else type="primary">Android</el-tag>
                    </template>
                </el-table-column>
            <el-table-column prop="device_type" label="设备类型" width="120" />
            <el-table-column prop="register_date" label="注册时间" width="120" />
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">
                        详情
                    </el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import CustomSelect from '~/components/CustomSelect.vue'

const formInline = reactive({
    username: "",
    idcard: "",
    mobile: "",
    user_status: "",
    user_from: "",
    user_client: "",
    device_type: "",
    bank_card: "",
    register_date: ""
})

const initialForm = { ...formInline }

const userStatusOptions = [
    { label: "正常", value: "normal" },
    { label: "异常", value: "exception" }
]

const userFromOptions = [
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" }
]

const userClientOptions = [
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" }
]

const deviceTypeOptions = [
    { label: "Zone one", value: "shanghai" },
    { label: "Zone two", value: "beijing" }
]

const onSubmit = () => {
    console.log('submit!')
}

const resetForm = () => {
    Object.assign(formInline, initialForm)
}


const handleClick = () => {
    console.log('click')
}

const tableData = [
    {
        username: "张三",
        idcard: "232327198005697598",
        mobile: "13518248875",
        user_status: 0,
        user_from: "安逸花",
        user_client: "ios",
        device_type: "IPhone 15 Pro",
        bank_card: "6230943690000330652",
        register_date: "2025-03-01"
    },
    {
        username: "李四",
        idcard: "232327198005697598",
        mobile: "13518248875",
        user_status: 0,
        user_from: "安逸花",
        user_client: "android",
        device_type: "IPhone 15 Pro",
        bank_card: "6230943690000330652",
        register_date: "2025-03-01"
    },
    {
        username: "王五",
        idcard: "232327198005697598",
        mobile: "13518248875",
        user_status: 1,
        user_from: "安逸花",
        user_client: "android",
        device_type: "IPhone 15 Pro",
        bank_card: "6230943690000330652",
        register_date: "2025-03-01"
    },
]
</script>

<style scoped>
.input-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.select-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.select-group .el-form-item {
    width: 10vw;
}

.el-form-item {
    flex: 1;
    min-width: 200px;
}

.select {
    width: 10vw;
}
</style>