<template>
    <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <!-- 输入框部分 -->
            <div class="input-group">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="真实姓名">
                            <el-input v-model="formInline.username" placeholder="姓名" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="证件号码">
                            <el-input v-model="formInline.idcard" placeholder="身份证号码" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="手机号码">
                            <el-input v-model="formInline.mobile" placeholder="手机号码" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="银行卡号">
                            <el-input v-model="formInline.bank_card" placeholder="银行卡号码" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
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
        <el-table :data="tableData" style="width: 100%" fit>
            <el-table-column fixed prop="username" label="姓名" width="120" />
            <el-table-column prop="idcard" label="证件号码" width="200" />
            <el-table-column prop="mobile" label="手机号码" width="150" />
            <el-table-column prop="bank_card" label="银行卡号码" width="200" />
            <el-table-column prop="user_status" label="用户状态" width="100">
                <template #default="scoped">
                    <el-tag v-if="scoped.row.user_status === 0" type="success">正常</el-tag>
                    <el-tag v-else type="danger">黑名单</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="user_from" label="用户来源" width="120" />
            <el-table-column prop="user_client" label="注册终端" width="120">
                <template #default="scoped">
                    <el-tag v-if="scoped.row.user_client === 'ios'" type="success">IOS</el-tag>
                    <el-tag v-else type="primary">Android</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="device_type" label="设备类型" width="120" />
            <el-table-column prop="register_date" label="注册时间" width="120" />
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="centerDialogVisible = true">
                        详情
                    </el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>


    <el-dialog v-model="centerDialogVisible" title="用戶信息詳情" width="1200" center>
        <el-tabs type="border-card" class="demo-tabs">
            <el-tab-pane label="借款信息">
                <el-descriptions class="margin-top" title="本次風控審核" :column="4" border>
                    <template #extra>
                        <el-button type="primary">修改订单金额</el-button>
                    </template>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                審核結果
                            </div>
                        </template>
                        <el-tag type="success">通過</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                機審分值
                            </div>
                        </template>
                        0
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                機審時間
                            </div>
                        </template>
                        2025-03-01 12:00:00
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                備注
                            </div>
                        </template>
                        T（1、4、7）逾期笔数过多
                    </el-descriptions-item>

                </el-descriptions>

                <el-descriptions class="margin-top" title="本次借款信息" :column="4" border>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                借款人姓名
                            </div>
                        </template>
                        孔建雲
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                借款金額（元）
                            </div>
                        </template>
                        3000.00
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                借款週期（天）
                            </div>
                        </template>
                        5
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                申請時間
                            </div>
                        </template>
                        2025-03-01 12:00:00
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                貸款類型
                            </div>
                        </template>
                        首貸
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                借款利息（元）
                            </div>
                        </template>
                        1500.00
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                加款金額（元）
                            </div>
                        </template>
                        1500.00
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                放款時間
                            </div>
                        </template>
                        2025-03-01 12:00:00
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                剩餘應還（元）
                            </div>
                        </template>
                        --
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                應還時間
                            </div>
                        </template>
                        2025-03-08 12:00:00
                    </el-descriptions-item>
                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="用戶資料">
                <el-descriptions class="margin-top" title="註冊信息" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                註冊手機號
                            </div>
                        </template>
                        18002388777
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                註冊時間
                            </div>
                        </template>
                        2025年3月18日 11:00:00
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                註冊客戶端
                            </div>
                        </template>
                        H5
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                註冊渠道
                            </div>
                        </template>
                        湖人-木木分期
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                註冊經緯度
                            </div>
                        </template>
                        31.123456,121.123456
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                借款經緯度
                            </div>
                        </template>
                        31.123456,121.123456
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                居住地
                            </div>
                        </template>
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                註冊所在地
                            </div>
                        </template>
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                借款所在地
                            </div>
                        </template>
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>
                </el-descriptions>


                <el-descriptions class="margin-top" title="實名信息" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                真實姓名
                            </div>
                        </template>
                        劉鑫
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                身分證號
                            </div>
                        </template>
                        232327198005697598
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                性別
                            </div>
                        </template>
                        男
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                年齡
                            </div>
                        </template>
                        45
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                身分證頭像面
                            </div>
                        </template>
                        31.123456,121.123456
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                身分證國徽面
                            </div>
                        </template>
                        31.123456,121.123456
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                活體檢測照片
                            </div>
                        </template>
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                運營商來源
                            </div>
                        </template>
                        未授權
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                客戶來源
                            </div>
                        </template>
                        http://eeee.one
                    </el-descriptions-item>

                </el-descriptions>

                <el-descriptions class="margin-top" title="銀行卡信息" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                開戶銀行
                            </div>
                        </template>
                        中國工商銀行
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                銀行卡號
                            </div>
                        </template>
                        6230943690000330652
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                銀行預留手機號
                            </div>
                        </template>
                        18002388777
                    </el-descriptions-item>




                </el-descriptions>

                <el-descriptions class="margin-top" title="單位信息" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                單位名稱
                            </div>
                        </template>
                        四川省高級人民法院
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                單位電話
                            </div>
                        </template>
                        028-12345678
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                單位地址
                            </div>
                        </template>
                        四川省成都市武侯區辛康路56號
                    </el-descriptions-item>




                </el-descriptions>

                <el-descriptions class="margin-top" title="緊急聯繫人" :column="3" border>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                關係
                            </div>
                        </template>
                        朋友
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                姓名
                            </div>
                        </template>
                        蔡徐坤
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                電話
                            </div>
                        </template>
                        18002388777
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                關係
                            </div>
                        </template>
                        家人
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                姓名
                            </div>
                        </template>
                        張學友
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                電話
                            </div>
                        </template>
                        18002388777
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                關係
                            </div>
                        </template>
                        同事
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">

                                姓名
                            </div>
                        </template>
                        梁靜茹
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template #label>
                            <div class="cell-item">
                                電話
                            </div>
                        </template>
                        18002388777
                    </el-descriptions-item>


                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="通訊錄">
                <el-button type="primary">導出</el-button>
                <div style="display: flex;justify-content:center;margin-top:20px;">
                    <el-table :data="contactData">
                        <el-table-column prop="name" label="姓名" />
                        <el-table-column prop="mobile" label="電話" />
                    </el-table>
                </div>


            </el-tab-pane>
            <el-tab-pane label="短信紀錄">
                <el-table :data="smsData">
                    <el-table-column prop="time" label="時間" />
                    <el-table-column prop="mobile" label="電話" />
                    <el-table-column prop="content" label="內容" />
                    <el-table-column prop="type" label="類型">
                        <template #default="{ row }">
                            <el-tag v-if="row.type === 'send'" type="success">發送</el-tag>
                            <el-tag v-else type="primary">接收</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="通話紀錄">
                <el-table :data="callLogData">
                    <el-table-column prop="name" label="姓名" />
                    <el-table-column prop="mobile" label="電話" />
                    <el-table-column prop="type" label="類型">
                        <template #default="{ row }">
                            <el-tag v-if="row.type === 'income'" type="success">來電</el-tag>
                            <el-tag v-else-if="row.type === 'call'" type="primary">去電</el-tag>
                            <el-tag v-else type="danger">未接</el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column prop="cost_time" label="通話時長" />
                    <el-table-column prop="start_time" label="開始時間" />
                    <el-table-column prop="end_time" label="結束時間" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="設備信息">設備信息</el-tab-pane>
            <el-tab-pane label="運營商報告">運營商報告</el-tab-pane>
            <el-tab-pane label="風控信息">風控信息</el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import CustomSelect from '~/components/CustomSelect.vue'


const centerDialogVisible = ref(false)


const contactData = ref([{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
{
    "name": "劉鑫",
    "mobile": "18002388777"
},
])

const smsData = ref([{
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "吃了嗎",
    "type": "send"
},
{
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "不吃我就去吃飯了",
    "type": "send"
}, {
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "吃過了 你去吧",
    "type": "receive"
}, {
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "您的借款申请已通过",
    "type": "receive"
}, {
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "還錢 大哥",
    "type": "receive"
}, {
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "不然找你全家",
    "type": "receive"
}, {
    "time": "2025-03-01 12:00:00",
    "mobile": "18002388777",
    "content": "去吧 滾",
    "type": "send"
}])


const callLogData = ref([{
    "name": "劉鑫",
    "mobile": "18002388777",
    "type": "income",
    "cost_time": "00:30",
    "start_time": "2025-03-01 12:00:00",
    "end_time": "2025-03-01 12:30:00"
},
{
    "name": "爹",
    "mobile": "18002388777",
    "type": "call",
    "cost_time": "00:30",
    "start_time": "2025-03-01 12:00:00",
    "end_time": "2025-03-01 12:30:00"
},
{
    "name": "娘",
    "mobile": "18002388777",
    "type": "call",
    "cost_time": "00:30",
    "start_time": "2025-03-01 12:00:00",
    "end_time": "2025-03-01 12:30:00"
},
{
    "name": "未知",
    "mobile": "18002388777",
    "type": "decline",
    "cost_time": "00:30",
    "start_time": "2025-03-01 12:00:00",
    "end_time": "2025-03-01 12:30:00"
},
{
    "name": "爺爺",
    "mobile": "18002388777",
    "type": "income",
    "cost_time": "00:30",
    "start_time": "2025-03-01 12:00:00",
    "end_time": "2025-03-01 12:30:00"
},
{
    "name": "老婆",
    "mobile": "18002388777",
    "type": "income",
    "cost_time": "00:30",
    "start_time": "2025-03-01 12:00:00",
    "end_time": "2025-03-01 12:30:00"
},
])
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
    { label: "黑名单", value: "exception" }
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
    console.log('submit!', formInline)
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
.el-descriptions {
    margin-top: 20px;
}

.cell-item {
    display: flex;
    align-items: center;
}

.margin-top {
    margin-top: 20px;
}
</style>