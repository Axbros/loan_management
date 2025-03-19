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
                    <el-descriptions-item label="審核結果">
                        <el-tag type="success">通過</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="機審分值">
                        0
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                機審時間
                            ">
                        2025-03-01 12:00:00
                    </el-descriptions-item>
                    <el-descriptions-item label="備注">
                        T（1、4、7）逾期笔数过多
                    </el-descriptions-item>

                </el-descriptions>

                <el-descriptions class="margin-top" title="本次借款信息" :column="4" border>

                    <el-descriptions-item label="借款人姓名
">
                        孔建雲
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                借款金額（元）
                            ">
                        3000.00
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                借款週期（天）
                            ">
                        5
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                申請時間
                            ">
                        2025-03-01 12:00:00
                    </el-descriptions-item>

                    <el-descriptions-item label="

                                貸款類型
                            ">
                        首貸
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                借款利息（元）
                            ">
                        1500.00
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                加款金額（元）
                            ">
                        1500.00
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                放款時間
                            ">
                        2025-03-01 12:00:00
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                剩餘應還（元）
                            ">
                        --
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                應還時間
                            ">
                        2025-03-08 12:00:00
                    </el-descriptions-item>
                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="用戶資料">
                <el-descriptions class="margin-top" title="註冊信息" :column="3" border>
                    <el-descriptions-item label="
                                註冊手機號
                            ">
                        18002388777
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                註冊時間
                            ">
                        2025年3月18日 11:00:00
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                註冊客戶端
                            ">
                        H5
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                註冊渠道
                            ">
                        湖人-木木分期
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                註冊經緯度
                            ">
                        31.123456,121.123456
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                借款經緯度
                            ">
                        31.123456,121.123456
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                居住地
                            ">
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                註冊所在地
                            ">
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                借款所在地
                            ">
                        四川省成都市邛崍市文君街道英倫半島
                    </el-descriptions-item>
                </el-descriptions>


                <el-descriptions class="margin-top" title="實名信息" :column="3" border>
                    <el-descriptions-item label="
                                真實姓名
                            ">
                        劉鑫
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                身分證號
                            ">
                        232327198005697598
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                性別
                            ">
                        男
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                年齡
                            ">
                        45
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                身分證頭像面
                            ">
                        <el-image style="width: 158px; height: 100px" :src="idcards[0]" :zoom-rate="1.2" :max-scale="7"
                            :min-scale="0.2" show-progress :initial-index="4" :preview-src-list="idcards" fit="cover" />
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                身分證國徽面
                            ">
                        <el-image style="width: 158px; height: 100px" :src="idcards[1]" :zoom-rate="1.2" :max-scale="7"
                            :min-scale="0.2" show-progress :initial-index="4" :preview-src-list="idcards" fit="cover" />
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                活體檢測照片
                            ">
                        <el-image style="width: 158px; height: 100px" :src="idcards[2]" :zoom-rate="1.2" :max-scale="7"
                            :min-scale="0.2" show-progress :initial-index="4" :preview-src-list="idcards" fit="cover" />
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                運營商來源
                            ">
                        未授權
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                客戶來源
                            ">
                        http://eeee.one
                    </el-descriptions-item>

                </el-descriptions>

                <el-descriptions class="margin-top" title="銀行卡信息" :column="3" border>
                    <el-descriptions-item label="
                                開戶銀行
                            ">
                        中國工商銀行
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                銀行卡號
                            ">
                        6230943690000330652
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                銀行預留手機號
                            ">
                        18002388777
                    </el-descriptions-item>




                </el-descriptions>

                <el-descriptions class="margin-top" title="單位信息" :column="3" border>
                    <el-descriptions-item label="
                                單位名稱
                            ">
                        四川省高級人民法院
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                單位電話
                            ">
                        028-12345678
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                單位地址
                            ">
                        四川省成都市武侯區辛康路56號
                    </el-descriptions-item>




                </el-descriptions>

                <el-descriptions class="margin-top" title="緊急聯繫人" :column="3" border>
                    <el-descriptions-item label="
                                關係
                            ">
                        朋友
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                姓名
                            ">
                        蔡徐坤
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                電話
                            ">
                        18002388777
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                關係
                            ">
                        家人
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                姓名
                            ">
                        張學友
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                電話
                            ">
                        18002388777
                    </el-descriptions-item>

                    <el-descriptions-item label="
                                關係
                            ">
                        同事
                    </el-descriptions-item>
                    <el-descriptions-item label="

                                姓名
                            ">
                        梁靜茹
                    </el-descriptions-item>
                    <el-descriptions-item label="
                                電話
                            ">
                        18002388777
                    </el-descriptions-item>


                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="通訊錄">
                <el-button type="primary">導出</el-button>
                <div style="display: flex;justify-content:center;margin-top:20px;">
                    <el-table :data="contactData" align="center" header-align="center" stripe>
                        <el-table-column prop="name" label="姓名" />
                        <el-table-column prop="mobile" label="電話" />
                    </el-table>
                </div>


            </el-tab-pane>
            <el-tab-pane label="短信紀錄">
                <el-table :data="smsData" align="center" stripe>
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
                <el-table :data="callLogData" align="center" stripe>
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
            <el-tab-pane label="設備信息">
                <el-descriptions class="margin-top" title="系統信息" :column="4" border>
                    <el-descriptions-item label="設備號">iweurokjdfaoijfoi</el-descriptions-item>
                    <el-descriptions-item label="操作系統">Android</el-descriptions-item>
                    <el-descriptions-item label="型號">Xiaomi 8A</el-descriptions-item>
                    <el-descriptions-item label="定位地址">中國</el-descriptions-item>
                </el-descriptions>
                <div>
                    <div style="font-size:16px;font-weight:bold;color:var(--ep-text-color-primary);margin-bottom:16px;margin-top:20px;">軟件列表</div>
                </div>
                <el-table :data="appListData" align="center" header-align="center" stripe>
                    <el-table-column prop="package_name" label="軟件包名" />
                    <el-table-column prop="app_name" label="軟件名稱" />
                    <el-table-column prop="update_time" label="電話" />
                    <el-table-column prop="install_time" label="電話" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="運營商報告">
                <el-descriptions class="margin-top" title="用戶基本信息" :column="3" border>
                    <el-descriptions-item label="姓名">蔡徐坤</el-descriptions-item>
                    <el-descriptions-item label="性別">男</el-descriptions-item>
                    <el-descriptions-item label="年齡">45</el-descriptions-item>
                    <el-descriptions-item label="證件號碼">2234234234234234</el-descriptions-item>
                    <el-descriptions-item label="手機號碼">18002388777</el-descriptions-item>
                    <el-descriptions-item label="入網時長">110月</el-descriptions-item>
                    <el-descriptions-item label="是否實名認證">否</el-descriptions-item>
                    <el-descriptions-item label="星座">雙魚座</el-descriptions-item>
                    <el-descriptions-item label="郵箱">tencent@gmail.com</el-descriptions-item>
                    <el-descriptions-item label="通訊地址">未知</el-descriptions-item>
                    <el-descriptions-item label="籍貫">未知</el-descriptions-item>
                    <el-descriptions-item label="話費餘額（元）">49.54</el-descriptions-item>
                    <el-descriptions-item label="運營商名">中國電信</el-descriptions-item>
                    <el-descriptions-item label="運營商編號">CHINANEL_REQUEST_203423423423424</el-descriptions-item>
                    <el-descriptions-item label="獲取時間">2025-03-07 22:22:22</el-descriptions-item>
                </el-descriptions>

                <el-descriptions class="margin-top" title="數據來源" :column="3" border>
                    <el-descriptions-item label="運營商名">蔡徐坤</el-descriptions-item>
                    <el-descriptions-item label="性別">男</el-descriptions-item>
                    <el-descriptions-item label="年齡">45</el-descriptions-item>
                   </el-descriptions>
            </el-tab-pane>
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

//TODO:idcards之後會放在object裡面
const idcards = ["http://1.14.48.67:8888/down/i98OHwGQzxlV.jpeg", "http://1.14.48.67:8888/down/ABh4XOyX2UD3.jpeg", "https://img.taotu.cn/ssd/ssd4/1/shoudong/up/10fbf8ed912e1612d534b87e3bb580a3.jpg"]

const appListData=ref([{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},{
    "package_name":"com.tencent.qq",
    "app_name":"微信",
    "update_time":"2025-03-07",
    "install_time":"2025-03-07"
},])

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